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
import { HyperPodVllmNxdInferenceService } from "./hyperpod-vllm-nxd-inference-service";

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
      compileTimeInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
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
        targetMetric: "cpu_utilization",
        targetValue: 70,
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
});
