import { CfnJson, Size } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { CfnAddon } from "aws-cdk-lib/aws-eks";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as sagemaker from "aws-cdk-lib/aws-sagemaker";
import { Construct } from "constructs";
import { INeuronxInstanceType } from "../base/neuronx";

/**
 * Configuration for a HyperPod instance group.
 */
export interface HyperPodInstanceGroup {
  /**
   * Instance group name.
   */
  readonly name: string;
  /**
   * Neuronx instance type. Only trn1/trn2 are supported in HyperPod.
   */
  readonly neuronxInstanceType: INeuronxInstanceType;
  /**
   * Number of instances in the group.
   */
  readonly instanceCount: number;
  /**
   * Additional EBS volume size for each instance.
   * @default Size.gibibytes(500)
   */
  readonly additionalVolumeSize?: Size;
}

/**
 * Props for HyperPodCluster construct.
 */
export interface HyperPodClusterProps {
  /**
   * VPC for the cluster.
   */
  readonly vpc: ec2.IVpc;
  /**
   * VPC subnets for worker nodes.
   * @default - private subnets
   */
  readonly vpcSubnets?: ec2.SubnetSelection;
  /**
   * Cluster name.
   * @default - auto-generated
   */
  readonly clusterName?: string;
  /**
   * Kubernetes version for the EKS cluster.
   * @default eks.KubernetesVersion.V1_31
   */
  readonly kubernetesVersion?: eks.KubernetesVersion;
  /**
   * An AWS Lambda Layer which includes kubectl and Helm.
   * You must pick an appropriate release of one of the
   * `@aws-cdk/layer-kubectl-vXX` packages that works with
   * the version of Kubernetes you have chosen.
   */
  readonly kubectlLayer: lambda.ILayerVersion;
  /**
   * Instance groups configuration.
   */
  readonly instanceGroups: HyperPodInstanceGroup[];
  /**
   * Enable automatic node recovery.
   * @default 'Automatic'
   */
  readonly nodeRecovery?: "Automatic" | "None";
  /**
   * Whether to install the SageMaker HyperPod inference operator add-on.
   * @default true
   */
  readonly enableInference?: boolean;
}

/**
 * High-level construct that creates both an EKS cluster and a SageMaker HyperPod cluster.
 *
 * The EKS cluster serves as the control plane, while HyperPod manages the worker nodes
 * with Trainium instances for inference workloads.
 */
export class HyperPodCluster extends Construct {
  /**
   * The underlying EKS cluster.
   */
  readonly eksCluster: eks.Cluster;
  /**
   * The SageMaker HyperPod cluster (L1 CfnCluster).
   */
  readonly sagemakerCluster: sagemaker.CfnCluster;
  /**
   * The HyperPod execution role.
   */
  readonly executionRole: iam.Role;
  /**
   * The IAM role for the inference operator service account.
   */
  readonly inferenceOperatorRole: iam.Role;

  constructor(scope: Construct, id: string, props: HyperPodClusterProps) {
    super(scope, id);

    this.validateInstanceTypes(props.instanceGroups);

    const kubernetesVersion =
      props.kubernetesVersion ?? eks.KubernetesVersion.V1_31;
    const enableInference = props.enableInference ?? true;

    // --- EKS Cluster ---
    this.eksCluster = new eks.Cluster(this, "EksCluster", {
      vpc: props.vpc,
      vpcSubnets: props.vpcSubnets
        ? [props.vpcSubnets]
        : [{ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS }],
      version: kubernetesVersion,
      kubectlProviderOptions: {
        kubectlLayer: props.kubectlLayer,
      },
      defaultCapacity: 0,
      defaultCapacityType: eks.DefaultCapacityType.NODEGROUP,
      clusterName: props.clusterName,
      endpointAccess: eks.EndpointAccess.PRIVATE,
    });

    // --- HyperPod Execution Role ---
    this.executionRole = new iam.Role(this, "ExecutionRole", {
      assumedBy: new iam.ServicePrincipal("sagemaker.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "AmazonSageMakerClusterInstanceRolePolicy",
        ),
      ],
    });
    this.executionRole.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          "ec2:DescribeSubnets",
          "ec2:DescribeSecurityGroups",
          "ec2:DescribeVpcs",
          "ec2:DescribeNetworkInterfaces",
          "ec2:CreateNetworkInterface",
          "ec2:CreateNetworkInterfacePermission",
          "ec2:DeleteNetworkInterface",
          "ec2:ModifyNetworkInterfaceAttribute",
        ],
        resources: ["*"],
      }),
    );

    // Grant the execution role cluster admin access via EKS Access API
    this.eksCluster.grantClusterAdmin(
      "HyperPodExecutionRoleAccess",
      this.executionRole.roleArn,
    );

    // --- SageMaker HyperPod Cluster ---
    const instanceGroups =
      props.instanceGroups.map<sagemaker.CfnCluster.ClusterInstanceGroupProperty>(
        (group) => ({
          instanceGroupName: group.name,
          instanceType: `ml.${group.neuronxInstanceType.instanceType.toString()}`,
          instanceCount: group.instanceCount,
          executionRole: this.executionRole.roleArn,
          lifeCycleConfig: {
            sourceS3Uri: "s3://placeholder/lifecycle-scripts/",
            onCreate: "on_create.sh",
          },
          instanceStorageConfigs: group.additionalVolumeSize
            ? [
                {
                  ebsVolumeConfig: {
                    volumeSizeInGb: group.additionalVolumeSize.toGibibytes(),
                  },
                },
              ]
            : [
                {
                  ebsVolumeConfig: {
                    volumeSizeInGb: 500,
                  },
                },
              ],
        }),
      );

    this.sagemakerCluster = new sagemaker.CfnCluster(this, "HyperPodCluster", {
      clusterName: props.clusterName
        ? `${props.clusterName}-hyperpod`
        : undefined,
      instanceGroups,
      orchestrator: {
        eks: {
          clusterArn: this.eksCluster.clusterArn,
        },
      },
      nodeRecovery: props.nodeRecovery ?? "Automatic",
      vpcConfig: {
        securityGroupIds: [this.eksCluster.clusterSecurityGroupId],
        subnets: props.vpc.selectSubnets(
          props.vpcSubnets ?? {
            subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          },
        ).subnetIds,
      },
    });
    this.sagemakerCluster.node.addDependency(this.eksCluster);

    // --- Inference Operator Role (IRSA) ---
    this.inferenceOperatorRole = this.createInferenceOperatorRole();

    // --- Install EKS Add-ons and Helm Charts ---
    // cert-manager is required before the inference operator
    const certManager = this.installCertManager();
    if (enableInference) {
      // The inference operator addon bundles ALB Controller and KEDA,
      // so we don't install them separately via Helm charts.
      const inferenceAddon = this.installInferenceOperatorAddon();
      inferenceAddon.node.addDependency(certManager);
    }
  }

  private validateInstanceTypes(instanceGroups: HyperPodInstanceGroup[]) {
    for (const group of instanceGroups) {
      const instanceTypeName =
        group.neuronxInstanceType.instanceType.toString();
      if (
        !instanceTypeName.startsWith("trn1") &&
        !instanceTypeName.startsWith("trn2")
      ) {
        throw new Error(
          `HyperPod only supports trn1/trn2 instance types for Neuron workloads. Got: ${instanceTypeName}`,
        );
      }
    }
  }

  private createInferenceOperatorRole(): iam.Role {
    const conditions = new CfnJson(this, "InferenceOperatorOidcCondition", {
      value: {
        [`${this.eksCluster.clusterOpenIdConnectIssuerUrl}:sub`]:
          "system:serviceaccount:kube-system:hyperpod-inference-controller-manager",
        [`${this.eksCluster.clusterOpenIdConnectIssuerUrl}:aud`]:
          "sts.amazonaws.com",
      },
    });

    const role = new iam.Role(this, "InferenceOperatorRole", {
      roleName: `SageMakerHyperPodInference-${this.node.addr.substring(0, 32)}`,
      assumedBy: new iam.FederatedPrincipal(
        this.eksCluster.openIdConnectProvider.openIdConnectProviderArn,
        {
          StringEquals: conditions,
        },
        "sts:AssumeRoleWithWebIdentity",
      ),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "AmazonSageMakerHyperPodInferenceAccess",
        ),
      ],
    });

    return role;
  }

  private installInferenceOperatorAddon(): Construct {
    // S3 bucket for TLS certificates required by the inference operator
    const tlsBucket = new s3.Bucket(this, "TlsCertificateBucket", {
      enforceSSL: true,
    });
    tlsBucket.grantReadWrite(this.inferenceOperatorRole);

    const addon = new CfnAddon(this, "InferenceOperatorAddon", {
      addonName: "amazon-sagemaker-hyperpod-inference",
      clusterName: this.eksCluster.clusterName,
      configurationValues: JSON.stringify({
        executionRoleArn: this.inferenceOperatorRole.roleArn,
        tlsCertificateS3Bucket: tlsBucket.bucketName,
      }),
    });
    addon.node.addDependency(this.eksCluster);
    addon.node.addDependency(tlsBucket);
    return addon;
  }

  private installCertManager(): Construct {
    return this.eksCluster.addHelmChart("CertManager", {
      chart: "cert-manager",
      repository: "https://charts.jetstack.io",
      namespace: "cert-manager",
      createNamespace: true,
      values: {
        installCRDs: true,
      },
    });
  }
}
