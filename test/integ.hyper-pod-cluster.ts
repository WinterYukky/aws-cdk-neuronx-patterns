import { ExpectedResult, IntegTest, Match } from "@aws-cdk/integ-tests-alpha";
import { App, CfnOutput, RemovalPolicy, Stack } from "aws-cdk-lib";
import {
  GatewayVpcEndpointAwsService,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { NodegroupAmiType, Cluster } from "aws-cdk-lib/aws-eks-v2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { KubectlV34Layer } from "@aws-cdk/lambda-layer-kubectl-v34";
import * as cxapi from "aws-cdk-lib/cx-api";
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
  constructor(scope: App, id: string) {
    // env-agnostic stacks default to 2 availability zones in CDK, but trn2
    // capacity is unevenly distributed across AZs (for example sa-east-1a
    // currently has no trn2.3xlarge spot inventory even when 1b/1c do),
    // so we pin the stack to sa-east-1 and provision 3 AZs explicitly to
    // give HyperPod the best chance of finding capacity.
    super(scope, id, {
      env: { region: "sa-east-1" },
    });
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

    // Compile a small model for testing
    const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct", {
        parameters: Parameters.million(135),
        config: {
          attentionHeads: 9,
          embeddingDimension: 576,
          layers: 30,
        },
      }),
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
      // inventory during this test's history (sa-east-1b). The Cluster
      // construct still uses the full AZ set for its EKS control plane
      // subnets, which do not care about trn2 inventory.
      vpcSubnets: { availabilityZones: ["sa-east-1b"] },
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
  assertionStack: new Stack(app, "IntegTestAssertions", {
    env: { region: "sa-east-1" },
  }),
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

// Assert inference via SageMaker Runtime invoke-endpoint
const invokeEndpoint = integTest.assertions.awsApiCall(
  "SageMakerRuntime",
  "invokeEndpoint",
  {
    EndpointName: stack.inferenceService.endpointName,
    ContentType: "application/json",
    Body: JSON.stringify({
      model: "HuggingFaceTB/SmolLM-135M-Instruct",
      messages: [
        {
          role: "system",
          content: "You are helpfull assistant.",
        },
        {
          role: "user",
          content:
            "please answer '1+1=?'. You must answer only answer numeric.",
        },
      ],
    }),
  },
);

invokeEndpoint
  .expect(
    ExpectedResult.objectLike({
      StatusCode: 200,
    }),
  )
  .waitForAssertions();
