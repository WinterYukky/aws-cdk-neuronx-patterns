import { App, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { HyperPodCluster } from "./hyper-pod-cluster";

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
          instanceType: InstanceType.of(
            InstanceClass.TRN2,
            InstanceSize.XLARGE48,
          ),
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
          instanceType: InstanceType.of(
            InstanceClass.TRN2,
            InstanceSize.XLARGE48,
          ),
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
          instanceType: InstanceType.of(
            InstanceClass.TRN1,
            InstanceSize.XLARGE32,
          ),
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

  it("supports any instance type (generic L2)", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
        kubectlLayer,
        instanceGroups: [
          {
            name: "gpu-workers",
            instanceType: InstanceType.of(
              InstanceClass.G5,
              InstanceSize.XLARGE,
            ),
            instanceCount: 1,
          },
        ],
      });
    }).not.toThrow();
  });

  it("supports CPU instance types", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
        kubectlLayer,
        instanceGroups: [
          {
            name: "cpu-workers",
            instanceType: InstanceType.of(
              InstanceClass.T3,
              InstanceSize.MEDIUM,
            ),
            instanceCount: 1,
          },
        ],
      });
    }).not.toThrow();
  });

  it("sets node recovery to None when specified", () => {
    new HyperPodCluster(stack, "HyperPod", {
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
          instanceType: InstanceType.of(
            InstanceClass.TRN2,
            InstanceSize.XLARGE48,
          ),
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

  it("includes VPC config in HyperPod cluster", () => {
    new HyperPodCluster(stack, "HyperPod", {
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
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::SageMaker::Cluster", {
      VpcConfig: Match.objectLike({
        SecurityGroupIds: Match.anyValue(),
        Subnets: Match.anyValue(),
      }),
    });
  });

  it("createServiceAccountRole creates IRSA role", () => {
    const cluster = new HyperPodCluster(stack, "HyperPod", {
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
    cluster.createServiceAccountRole("TestRole", "test-sa", "test-namespace");
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::IAM::Role", {
      AssumeRolePolicyDocument: Match.objectLike({
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: "sts:AssumeRoleWithWebIdentity",
          }),
        ]),
      }),
    });
  });

  it("uses an existing EKS cluster when provided", () => {
    const existingCluster = new eks.Cluster(stack, "ExistingEks", {
      vpc,
      version: eks.KubernetesVersion.V1_34,
      kubectlProviderOptions: {
        kubectlLayer,
      },
      defaultCapacity: 0,
      defaultCapacityType: eks.DefaultCapacityType.NODEGROUP,
    });
    const cluster = new HyperPodCluster(stack, "HyperPod", {
      vpc,
      eksCluster: existingCluster,
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
    expect(cluster.eksCluster).toBe(existingCluster);
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::SageMaker::Cluster", {
      Orchestrator: Match.objectLike({
        Eks: Match.objectLike({
          ClusterArn: Match.anyValue(),
        }),
      }),
    });
  });

  it("throws when neither eksCluster nor kubectlLayer is provided", () => {
    expect(() => {
      new HyperPodCluster(stack, "HyperPod", {
        vpc,
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
    }).toThrow("kubectlLayer is required when eksCluster is not provided");
  });
});
