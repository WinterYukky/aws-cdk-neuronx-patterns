import { App, Size, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { NeuronxInstanceType } from "../base/neuronx";
import { BlockSize } from "../base/server-engine/vllm-engine";
import { VllmNxdInferenceCompiledModel } from "../vllm-nxd-inference/vllm-nxd-inference-compiler";
import { HyperPodCluster } from "../base/sagemaker";
import { HyperPodVllmNxdInferenceService } from "./hyper-pod-vllm-nxd-inference-service";

describe("HyperPodVllmNxdInferenceService", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let cluster: HyperPodCluster;
  let compiledModel: VllmNxdInferenceCompiledModel;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "TestStack");
    vpc = new Vpc(stack, "Vpc", { maxAzs: 2 });
    const kubectlLayer = lambda.LayerVersion.fromLayerVersionArn(
      stack,
      "KubectlLayer",
      "arn:aws:lambda:us-east-1:123456789012:layer:kubectl:1",
    );
    cluster = new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          instanceType: InstanceType.of(
            InstanceClass.TRN2,
            InstanceSize.XLARGE48,
          ),
          instanceCount: 1,
        },
      ],
    });
    const bucket = new Bucket(stack, "Bucket");
    compiledModel = {
      recommendedInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
      bucket,
      s3Uri: bucket.s3UrlForObject("compiled-model"),
      s3Prefix: "compiled-model",
      modelName: "test-model",
      weightSize: Size.gibibytes(20),
      vllmArgs: {
        model: "test-model",
        tensorParallelSize: 64,
        maxModelLen: 4096,
        blockSize: BlockSize.SIZE_32,
        maxNumSeqs: 1,
        servedModelName: ["test-model"],
      },
    };
  });

  it("creates a basic inference service with addon", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
    });
    const template = Template.fromStack(stack);
    // Should have K8s manifests (inference endpoint + cert-manager) and EKS addon
    template.hasResourceProperties("AWS::EKS::Addon", {
      AddonName: "amazon-sagemaker-hyperpod-inference",
    });
  });

  it("creates inference service with KV cache config", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
      kvCacheConfig: {
        enableL1Cache: true,
        enableL2Cache: true,
        l2CacheBackend: "tieredstorage",
      },
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EKS::Addon", {
      AddonName: "amazon-sagemaker-hyperpod-inference",
    });
  });

  it("creates inference service with intelligent routing", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
      intelligentRouting: {
        enabled: true,
        routingStrategy: "prefixaware",
      },
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EKS::Addon", {
      AddonName: "amazon-sagemaker-hyperpod-inference",
    });
  });

  it("creates inference service with autoscaling", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
      autoscaling: {
        minReplicas: 1,
        maxReplicas: 4,
        cloudWatchTriggers: [
          {
            name: "cpu",
            namespace: "AWS/EKS",
            metricName: "pod_cpu_utilization",
            targetValue: 70,
          },
        ],
      },
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EKS::Addon", {
      AddonName: "amazon-sagemaker-hyperpod-inference",
    });
  });

  it("creates inference operator IRSA role with correct name pattern", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      ManagedPolicyArns: Match.arrayWith([
        Match.objectLike({
          "Fn::Join": Match.arrayWith([
            Match.arrayWith([
              Match.stringLikeRegexp("AmazonSageMakerHyperPodInferenceAccess"),
            ]),
          ]),
        }),
      ]),
    });
  });

  it("grants S3 read access to the execution role", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Policy", {
      PolicyDocument: Match.objectLike({
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: Match.arrayWith(["s3:GetObject*"]),
          }),
        ]),
      }),
    });
  });

  it("configures destroy-time tolerations on the addon's ALB and KEDA components", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
    });
    const template = Template.fromStack(stack);
    // The addon's `configurationValues` is serialized into a tokenized
    // `Fn::Join` in the CloudFormation template, so we inspect the
    // concrete resource JSON and assert the substrings we need are
    // present in one of the join parts.
    const addons = template.findResources("AWS::EKS::Addon", {
      Properties: { AddonName: "amazon-sagemaker-hyperpod-inference" },
    });
    expect(Object.keys(addons)).toHaveLength(1);
    const [addon] = Object.values(addons);
    const join = (addon as any).Properties.ConfigurationValues["Fn::Join"];
    expect(join).toBeDefined();
    const joinedLiteral = join[1]
      .filter((part: unknown): part is string => typeof part === "string")
      .join("");
    // Both the ALB and KEDA sections get the same taint tolerations.
    expect(joinedLiteral).toMatch(
      /"alb":[\s\S]*"tolerations":\[[\s\S]*"node\.kubernetes\.io\/unreachable"[\s\S]*"node\.kubernetes\.io\/not-ready"/,
    );
    expect(joinedLiteral).toMatch(
      /"keda":\{[\s\S]*"tolerations":\[[\s\S]*"node\.kubernetes\.io\/unreachable"[\s\S]*"node\.kubernetes\.io\/not-ready"/,
    );
  });

  it("installs a KubernetesPatch that removes the InferenceEndpointConfig finalizer on destroy", () => {
    new HyperPodVllmNxdInferenceService(stack, "InferenceService", {
      cluster,
      compiledModel,
    });
    const template = Template.fromStack(stack);
    // The patch uses `MERGE` type with an empty `applyPatch` and a
    // `restorePatch` that clears the finalizer list. We match on
    // `ResourceName` + `PatchType` + the serialized `RestorePatchJson`.
    template.hasResourceProperties("Custom::AWSCDK-EKS-KubernetesPatch", {
      ResourceName: Match.stringLikeRegexp("^inferenceendpointconfig/"),
      PatchType: "merge",
      RestorePatchJson: Match.stringLikeRegexp(
        '"finalizers"\\s*:\\s*\\[\\s*\\]',
      ),
    });
  });
});
