import { ExpectedResult, IntegTest, Match } from "@aws-cdk/integ-tests-alpha";
import { App, CfnOutput, Duration, RemovalPolicy, Stack } from "aws-cdk-lib";
import {
  GatewayVpcEndpointAwsService,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Port,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { NodegroupAmiType, Cluster } from "aws-cdk-lib/aws-eks-v2";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { KubectlV34Layer } from "@aws-cdk/lambda-layer-kubectl-v34";
import * as cxapi from "aws-cdk-lib/cx-api";
import { join } from "path";
import { HttpRequestFromVpcFunctionPayload } from "./private/http-request-from-vpc";
import {
  HyperPodCluster,
  HyperPodVllmNxdInferenceService,
  Model,
  NeuronxInstanceType,
  Parameters,
  VllmNxdInferenceCompiler,
} from "../src/index";

const app = new App();
Object.entries(cxapi.CURRENTLY_RECOMMENDED_FLAGS).map(([key, value]) =>
  app.node.setContext(key, value),
);

class HyperPodClusterIntegTestStack extends Stack {
  readonly cluster: HyperPodCluster;
  readonly inferenceService: HyperPodVllmNxdInferenceService;
  readonly httpRequestFromVpcFunction: IFunction;
  readonly ingressHostName: string;
  constructor(scope: App, id: string) {
    // NOTE: We intentionally leave the stack environment-agnostic (no
    // `env` on `super(...)`) so that the synthesized snapshot stays
    // reproducible across environments (no baked-in account/region). The
    // actual region is pinned via integ-runner's `--parallel-regions
    // sa-east-1` flag. trn2 capacity is unevenly distributed across AZs
    // (for example sa-east-1a currently has no trn2.3xlarge spot
    // inventory even when 1b/1c do), so we still provision 3 AZs
    // explicitly below to give HyperPod the best chance of finding
    // capacity.
    super(scope, id);
    const vpc = new Vpc(this, "Vpc", {
      natGateways: 1,
      availabilityZones: ["sa-east-1a", "sa-east-1b", "sa-east-1c"],
      gatewayEndpoints: {
        S3: {
          service: GatewayVpcEndpointAwsService.S3,
        },
      },
    });

    const bucket = new Bucket(this, "Bucket", {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Compile a small model for testing. Qwen3-0.6B is chosen because it
    // is small enough to compile on c7i in a few minutes but has enough
    // reasoning ability to deterministically answer trivial arithmetic,
    // which lets us assert the semantic contents of the response.
    const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("Qwen/Qwen3-0.6B", {
        parameters: Parameters.million(600),
        config: {
          attentionHeads: 16,
          embeddingDimension: 1024,
          layers: 28,
        },
      }),
      vllmArgs: {
        maxModelLen: 2048,
      },
      neuronxInstanceType: NeuronxInstanceType.TRN2_3XLARGE,
    });
    const compiledModel = compiler.compile();

    this.cluster = new HyperPodCluster(this, "HyperPod", {
      vpc,
      // HyperPod's internal capacity allocator appears to consistently pick
      // the first subnet it receives, so if the first subnet is in an AZ
      // with no trn2.3xlarge spot inventory (historically sa-east-1a and
      // sa-east-1c have alternated between "full" and "empty") the
      // instance group is stuck forever. Pin the worker subnets to the
      // single AZ that has had the most reliable trn2.3xlarge spot
      // inventory during this test's history (sa-east-1b). The EKS control
      // plane still uses every AZ the VPC provides (EKS requires >=2 AZs).
      workerSubnets: { availabilityZones: ["sa-east-1b"] },
      kubectlLayer: new KubectlV34Layer(this, "KubectlLayer"),
      instanceGroups: [
        {
          name: "inference-workers",
          instanceType: InstanceType.of(
            InstanceClass.TRN2,
            InstanceSize.XLARGE3,
          ),
          instanceCount: 1,
          useSpot: true,
        },
      ],
      nodeRecovery: "Automatic",
    });

    // Add a small managed node group for system workloads
    const eksCluster = this.cluster.eksCluster as Cluster;
    // The inference operator addon brings in a fair number of system pods
    // (cert-manager, KEDA, ALB controller, the inference controller-manager
    // itself, plus its init containers) on top of the baseline kube-system
    // daemons. A single t3.medium runs into the per-node pod cap (17), so we
    // provision two t3.large nodes (35 pods each) for the system node group.
    eksCluster.addNodegroupCapacity("SystemNodes", {
      instanceTypes: [InstanceType.of(InstanceClass.T3, InstanceSize.LARGE)],
      minSize: 2,
      maxSize: 3,
      desiredSize: 2,
      amiType: NodegroupAmiType.AL2023_X86_64_STANDARD,
    });

    // Deploy inference service with SageMaker endpoint registration
    this.inferenceService = new HyperPodVllmNxdInferenceService(
      this,
      "InferenceService",
      {
        cluster: this.cluster,
        compiledModel,
        registerEndpoint: true,
      },
    );

    // Look up the ALB hostname the inference operator provisions (named
    // `alb-<endpointName>` in the `default` namespace). This lets the
    // integ assertion Lambda POST directly against the model server.
    this.ingressHostName = eksCluster.getIngressLoadBalancerAddress(
      `alb-${this.inferenceService.endpointName}`,
      { timeout: Duration.minutes(15) },
    );

    // VPC-attached Lambda used to invoke the model's /invocations endpoint
    // for the integ assertion. The inference ALB is scheme=internal, so
    // the request must originate from inside the VPC.
    this.httpRequestFromVpcFunction = new NodejsFunction(
      this,
      "HttpRequestFromVpcFunction",
      {
        entry: join(__dirname, "private/http-request-from-vpc.ts"),
        vpc,
        timeout: Duration.minutes(5),
      },
    );
    this.cluster.eksCluster.clusterSecurityGroup.connections.allowFrom(
      this.httpRequestFromVpcFunction,
      // ALB listens on 443 (HTTPS, cert-manager self-signed).
      Port.tcp(443),
      "Allow integ test Lambda to call the inference ALB",
    );

    new CfnOutput(this, "EksClusterName", {
      value: this.cluster.eksCluster.clusterName,
    });
    new CfnOutput(this, "HyperPodClusterArn", {
      value: this.cluster.clusterArn,
    });
    new CfnOutput(this, "CompiledArtifact", {
      value: compiledModel.s3Uri,
    });
    new CfnOutput(this, "EndpointName", {
      value: this.inferenceService.endpointName,
    });
  }
}

const stack = new HyperPodClusterIntegTestStack(
  app,
  "HyperPodClusterIntegTestStack",
);

const integTest = new IntegTest(app, "IntegTest", {
  testCases: [stack],
  // Keep the assertion stack environment-agnostic for the same
  // reproducibility reasons as above; integ-runner injects the real
  // account/region at deploy time from `--parallel-regions` and the
  // ambient CDK credentials.
  assertionStack: new Stack(app, "IntegTestAssertions"),
});

// Assert that the HyperPod cluster is InService
const describeCluster = integTest.assertions.awsApiCall(
  "SageMaker",
  "describeCluster",
  {
    ClusterName: stack.cluster.clusterArn,
  },
);

describeCluster
  .expect(
    ExpectedResult.objectLike({
      ClusterStatus: "InService",
      Orchestrator: Match.objectLike({
        Eks: Match.objectLike({
          ClusterArn: Match.stringLikeRegexp(".*"),
        }),
      }),
      InstanceGroups: Match.arrayWith([
        Match.objectLike({
          InstanceGroupName: "inference-workers",
          InstanceType: "ml.trn2.3xlarge",
        }),
      ]),
    }),
  )
  .waitForAssertions();

// Assert inference by having the VPC-attached Lambda POST against the
// inference ALB's /invocations endpoint (the operator exposes the model
// server there). We cannot use `SageMakerRuntime.invokeEndpoint` because
// that API requires a SageMaker Endpoint created via a separate
// `SageMakerEndpointRegistration` CR + REST API Gateway, which is out of
// scope for this PR.
const invoke = integTest.assertions.invokeFunction({
  functionName: stack.httpRequestFromVpcFunction.functionName,
  payload: JSON.stringify({
    url: `https://${stack.ingressHostName}/invocations`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        model: "Qwen/Qwen3-0.6B",
        messages: [
          {
            role: "user",
            content: "What is 1+1? Answer with just the digit.",
          },
        ],
        max_tokens: 300,
        temperature: 0,
      }),
    },
  } satisfies HttpRequestFromVpcFunctionPayload),
});

invoke
  .expect(
    ExpectedResult.objectLike({
      Payload: Match.serializedJson(
        Match.objectLike({
          statusCode: 200,
          body: Match.objectLike({
            // Assert on the semantic response: Qwen3-0.6B reliably answers
            // "2" (possibly wrapped in `<think>...</think>` reasoning,
            // followed by the digit) for trivial arithmetic.
            choices: Match.arrayWith([
              Match.objectLike({
                message: Match.objectLike({
                  content: Match.stringLikeRegexp("2"),
                }),
              }),
            ]),
          }),
        }),
      ),
    }),
  )
  .waitForAssertions();
