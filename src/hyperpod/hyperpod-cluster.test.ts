import { App, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NeuronxInstanceType } from "../base/neuronx";
import { HyperPodCluster } from "./hyperpod-cluster";

describe("HyperPodCluster", () => {
  let app: App;
  let stack: Stack;
  let vpc: Vpc;
  let kubectlLayer: lambda.ILayerVersion;

  beforeEach(() => {
    app = new App();
    stack = new Stack(app, "TestStack");
    vpc = new Vpc(stack, "Vpc", { maxAzs: 2 });
    kubectlLayer = lambda.LayerVersion.fromLayerVersionArn(
      stack,
      "KubectlLayer",
      "arn:aws:lambda:us-east-1:123456789012:layer:kubectl:1",
    );
  });

  it("creates an EKS cluster", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 1,
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EKS::Cluster", {
      ResourcesVpcConfig: Match.objectLike({
        EndpointPrivateAccess: true,
      }),
    });
  });

  it("creates a SageMaker HyperPod cluster", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 2,
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::SageMaker::Cluster", {
      InstanceGroups: Match.arrayWith([
        Match.objectLike({
          InstanceGroupName: "workers",
          InstanceType: "ml.trn2.48xlarge",
          InstanceCount: 2,
        }),
      ]),
      NodeRecovery: "Automatic",
    });
  });

  it("creates HyperPod execution role with SageMaker trust", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN1_32XLARGE,
          instanceCount: 1,
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: Match.objectLike({
        Statement: Match.arrayWith([
          Match.objectLike({
            Principal: Match.objectLike({
              Service: "sagemaker.amazonaws.com",
            }),
          }),
        ]),
      }),
      ManagedPolicyArns: Match.arrayWith([
        Match.objectLike({
          "Fn::Join": Match.arrayWith([
            Match.arrayWith([
              Match.stringLikeRegexp(
                "AmazonSageMakerClusterInstanceRolePolicy",
              ),
            ]),
          ]),
        }),
      ]),
    });
  });

  it("throws error for inf2 instance types", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
        kubectlLayer,
        instanceGroups: [
          {
            name: "workers",
            neuronxInstanceType: NeuronxInstanceType.INF2_48XLARGE,
            instanceCount: 1,
          },
        ],
      });
    }).toThrow(
      /HyperPod only supports trn1\/trn2 instance types for Neuron workloads/,
    );
  });

  it("allows trn1 instance types", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
        kubectlLayer,
        instanceGroups: [
          {
            name: "workers",
            neuronxInstanceType: NeuronxInstanceType.TRN1_32XLARGE,
            instanceCount: 1,
          },
        ],
      });
    }).not.toThrow();
  });

  it("allows trn2 instance types", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
        kubectlLayer,
        instanceGroups: [
          {
            name: "workers",
            neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
            instanceCount: 1,
          },
        ],
      });
    }).not.toThrow();
  });

  it("installs inference operator addon when enableInference is true", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 1,
        },
      ],
      enableInference: true,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EKS::Addon", {
      AddonName: "amazon-sagemaker-hyperpod-inference",
    });
  });

  it("does not install inference operator addon when enableInference is false", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 1,
        },
      ],
      enableInference: false,
    });
    const template = Template.fromStack(stack);
    template.resourcePropertiesCountIs(
      "AWS::EKS::Addon",
      {
        AddonName: "amazon-sagemaker-hyperpod-inference",
      },
      0,
    );
  });

  it("sets node recovery to None when specified", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 1,
        },
      ],
      nodeRecovery: "None",
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::SageMaker::Cluster", {
      NodeRecovery: "None",
    });
  });

  it("creates HyperPod cluster with EKS orchestrator", () => {
    new HyperPodCluster(stack, "HyperPod", {
      vpc,
      kubectlLayer,
      instanceGroups: [
        {
          name: "workers",
          neuronxInstanceType: NeuronxInstanceType.TRN2_48XLARGE,
          instanceCount: 1,
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::SageMaker::Cluster", {
      Orchestrator: Match.objectLike({
        Eks: Match.objectLike({
          ClusterArn: Match.anyValue(),
        }),
      }),
    });
  });
});
