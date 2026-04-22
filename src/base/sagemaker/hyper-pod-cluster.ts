import { CfnJson, Names, RemovalPolicy, Size } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3assets from "aws-cdk-lib/aws-s3-assets";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as sagemaker from "aws-cdk-lib/aws-sagemaker";
import { Construct, IDependable } from "constructs";
import { join } from "path";

/**
 * Configuration for a HyperPod instance group.
 */
export interface HyperPodInstanceGroup {
  /**
   * Instance group name.
   */
  readonly name: string;
  /**
   * EC2 instance type for the group.
   * The `ml.` prefix is automatically added for the SageMaker HyperPod API.
   *
   * @example InstanceType.of(InstanceClass.TRN1, InstanceSize.XLARGE32)
   */
  readonly instanceType: ec2.InstanceType;
  /**
   * Number of instances in the group.
   */
  readonly instanceCount: number;
  /**
   * Additional EBS volume size for each instance.
   * @default Size.gibibytes(500)
   */
  readonly additionalVolumeSize?: Size;
  /**
   * Whether to use Spot Instances for this instance group.
   * When enabled, HyperPod will request Spot capacity for significant cost savings.
   * Note: Spot capacity may be interrupted and is best suited for fault-tolerant workloads.
   * Once set, the capacity type cannot be changed after instance group creation.
   *
   * @default false - On-Demand instances are used
   */
  readonly useSpot?: boolean;
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
   * @default - private subnets with egress
   */
  readonly vpcSubnets?: ec2.SubnetSelection;
  /**
   * Cluster name.
   * @default - auto-generated
   */
  readonly clusterName?: string;
  /**
   * An existing EKS cluster to use.
   * When provided, `kubernetesVersion` and `kubectlLayer` are ignored
   * and a new EKS cluster will not be created.
   *
   * Note: When providing an existing cluster, you must ensure the HyperPod
   * execution role has cluster admin access.
   *
   * @default - a new EKS cluster is created
   */
  readonly eksCluster?: eks.ICluster;
  /**
   * Kubernetes version for the EKS cluster.
   * Ignored when `eksCluster` is provided.
   * @default eks.KubernetesVersion.V1_34
   */
  readonly kubernetesVersion?: eks.KubernetesVersion;
  /**
   * An AWS Lambda Layer which includes kubectl and Helm.
   * You must pick an appropriate release of one of the
   * `@aws-cdk/layer-kubectl-vXX` packages that works with
   * the version of Kubernetes you have chosen.
   * Required when `eksCluster` is not provided.
   */
  readonly kubectlLayer?: lambda.ILayerVersion;
  /**
   * Instance groups configuration.
   */
  readonly instanceGroups: HyperPodInstanceGroup[];
  /**
   * Enable automatic node recovery.
   * @default 'Automatic'
   */
  readonly nodeRecovery?: "Automatic" | "None";
}

/**
 * L2 construct for SageMaker HyperPod with EKS orchestration.
 *
 * Creates both an EKS cluster (control plane) and a SageMaker HyperPod cluster
 * (worker nodes) with a 1:1 mapping. This construct can be used for both
 * training and inference workloads.
 *
 * @example
 * // Create with a new EKS cluster
 * const cluster = new HyperPodCluster(this, 'HyperPod', {
 *   vpc,
 *   kubectlLayer: new KubectlV31Layer(this, 'KubectlLayer'),
 *   instanceGroups: [{
 *     name: 'workers',
 *     instanceType: InstanceType.of(InstanceClass.TRN1, InstanceSize.XLARGE32),
 *     instanceCount: 2,
 *   }],
 * });
 *
 * @example
 * // Use an existing EKS cluster
 * const cluster = new HyperPodCluster(this, 'HyperPod', {
 *   vpc,
 *   eksCluster: existingEksCluster,
 *   instanceGroups: [{
 *     name: 'workers',
 *     instanceType: InstanceType.of(InstanceClass.TRN1, InstanceSize.XLARGE32),
 *     instanceCount: 2,
 *   }],
 * });
 */
export class HyperPodCluster extends Construct {
  /**
   * The underlying EKS cluster.
   */
  readonly eksCluster: eks.ICluster;
  /**
   * The HyperPod execution role used by instance groups.
   */
  readonly executionRole: iam.Role;
  /**
   * The cluster ARN.
   */
  readonly clusterArn: string;

  private readonly _sagemakerCluster: sagemaker.CfnCluster;

  constructor(scope: Construct, id: string, props: HyperPodClusterProps) {
    super(scope, id);

    const subnetSelection = props.vpcSubnets ?? {
      subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
    };

    // --- EKS Cluster ---
    if (props.eksCluster) {
      this.eksCluster = props.eksCluster;
    } else {
      if (!props.kubectlLayer) {
        throw new Error(
          "kubectlLayer is required when eksCluster is not provided",
        );
      }
      const kubernetesVersion =
        props.kubernetesVersion ?? eks.KubernetesVersion.V1_34;
      this.eksCluster = new eks.Cluster(this, "EksCluster", {
        vpc: props.vpc,
        vpcSubnets: [subnetSelection],
        version: kubernetesVersion,
        kubectlProviderOptions: {
          kubectlLayer: props.kubectlLayer,
        },
        defaultCapacity: 0,
        defaultCapacityType: eks.DefaultCapacityType.NODEGROUP,
        clusterName: props.clusterName,
        endpointAccess: eks.EndpointAccess.PRIVATE,
      });
    }

    // --- EFA-enabled Security Group ---
    // EFA (Elastic Fabric Adapter) requires a security group that allows all
    // inbound and outbound traffic to and from itself.
    // See: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa-start.html#efa-start-security
    // See: https://github.com/aws-samples/awsome-distributed-training/blob/main/1.architectures/7.sagemaker-hyperpod-eks/cfn-templates/nested-stacks/security-group-stack.yaml
    const hyperPodSg = new ec2.SecurityGroup(this, "HyperPodSecurityGroup", {
      vpc: props.vpc,
      description: "Security group for SageMaker HyperPod with EFA support",
      allowAllOutbound: true,
    });
    hyperPodSg.addIngressRule(
      hyperPodSg,
      ec2.Port.allTraffic(),
      "Allow all inbound traffic within SG for EFA",
    );
    // Add explicit self-referencing egress rule for EFA
    new ec2.CfnSecurityGroupEgress(this, "HyperPodSgSelfEgress", {
      groupId: hyperPodSg.securityGroupId,
      ipProtocol: "-1",
      destinationSecurityGroupId: hyperPodSg.securityGroupId,
      description: "Allow all outbound traffic within SG for EFA",
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

    // Grant the execution role cluster admin access via HYPERPOD_LINUX access entry
    if (!props.eksCluster && this.eksCluster instanceof eks.Cluster) {
      new eks.AccessEntry(this, "HyperPodExecutionRoleAccess", {
        cluster: this.eksCluster,
        principal: this.executionRole.roleArn,
        accessEntryType: eks.AccessEntryType.HYPERPOD_LINUX,
        accessPolicies: [],
      });
    }

    // --- Install HyperPod Dependencies Helm Chart ---
    // The HyperPod dependencies (health monitoring agent, deep health check,
    // job auto restart, device plugins, etc.) must be installed on the EKS
    // cluster before the SageMaker HyperPod cluster can be created.
    // See: https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-eks-install-packages-using-helm-chart.html
    const hyperPodDepsChart = this.eksCluster.addHelmChart(
      "HyperPodDependencies",
      {
        chartAsset: new s3assets.Asset(this, "HyperPodHelmChartAsset", {
          path: join(__dirname, "../../../scripts/hyper-pod-helm-chart"),
        }),
        namespace: "kube-system",
        release: "hyperpod-dependencies",
        values: {
          "nvidia-device-plugin": {
            devicePlugin: {
              enabled: false,
            },
          },
        },
      },
    );

    // --- Lifecycle Scripts S3 Bucket ---
    const lifecycleBucket = new s3.Bucket(this, "LifecycleBucket", {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    const lifecycleDeploy = new s3deploy.BucketDeployment(
      this,
      "LifecycleScriptsDeploy",
      {
        sources: [
          s3deploy.Source.asset(
            join(__dirname, "../../../scripts/hyper-pod-lifecycle-scripts"),
          ),
        ],
        destinationBucket: lifecycleBucket,
        destinationKeyPrefix: "lifecycle-scripts",
      },
    );
    lifecycleBucket.grantRead(this.executionRole);

    // --- SageMaker HyperPod Cluster ---
    const hasSpotGroups = props.instanceGroups.some(
      (group) => group.useSpot === true,
    );
    const instanceGroups =
      props.instanceGroups.map<sagemaker.CfnCluster.ClusterInstanceGroupProperty>(
        (group) => ({
          instanceGroupName: group.name,
          instanceType: `ml.${group.instanceType.toString()}`,
          instanceCount: group.instanceCount,
          executionRole: this.executionRole.roleArn,
          lifeCycleConfig: {
            sourceS3Uri: lifecycleBucket.s3UrlForObject("lifecycle-scripts"),
            onCreate: "on_create.sh",
          },
          instanceStorageConfigs: [
            {
              ebsVolumeConfig: {
                volumeSizeInGb: group.additionalVolumeSize
                  ? group.additionalVolumeSize.toGibibytes()
                  : 500,
              },
            },
          ],
          ...(group.useSpot ? { capacityRequirements: { spot: {} } } : {}),
        }),
      );

    this._sagemakerCluster = new sagemaker.CfnCluster(
      this,
      "SageMakerCluster",
      {
        clusterName: props.clusterName,
        instanceGroups,
        orchestrator: {
          eks: {
            clusterArn: this.eksCluster.clusterArn,
          },
        },
        nodeRecovery: props.nodeRecovery ?? "Automatic",
        ...(hasSpotGroups ? { nodeProvisioningMode: "Continuous" } : {}),
        vpcConfig: {
          securityGroupIds: [
            this.eksCluster.clusterSecurityGroupId,
            hyperPodSg.securityGroupId,
          ],
          subnets: props.vpc.selectSubnets(subnetSelection).subnetIds,
        },
      },
    );
    // Depend on the underlying CfnCluster (and the dependency bootstraps)
    // rather than the EKS Cluster construct. Depending on the construct
    // would expand into every KubernetesManifest / HelmChart / Addon rooted
    // at the EKS cluster, and any consumer that later makes one of those
    // resources depend on the SageMaker cluster would form a
    // CloudFormation dependency cycle.
    const eksClusterCfn = (this.eksCluster.node.defaultChild ??
      this.eksCluster) as IDependable;
    this._sagemakerCluster.node.addDependency(eksClusterCfn);
    this._sagemakerCluster.node.addDependency(hyperPodDepsChart);
    this._sagemakerCluster.node.addDependency(lifecycleDeploy);
    this.clusterArn = this._sagemakerCluster.attrClusterArn;
  }

  /**
   * Creates an IRSA (IAM Role for Service Account) with trust policy for the EKS OIDC provider.
   *
   * Note: When using an existing EKS cluster (via `eksCluster` prop), the HYPERPOD_LINUX
   * AccessEntry is not automatically created. You must ensure the HyperPod execution role
   * has cluster admin access configured externally.
   *
   * @param id Construct ID for the role
   * @param serviceAccountName Kubernetes service account name
   * @param serviceAccountNamespace Kubernetes namespace for the service account
   * @returns IAM Role with OIDC trust policy
   */
  createServiceAccountRole(
    id: string,
    serviceAccountName: string,
    serviceAccountNamespace: string,
  ): iam.Role {
    const oidcProvider = this.eksCluster.openIdConnectProvider;
    const issuerUrl = oidcProvider.openIdConnectProviderIssuer;

    const conditions = new CfnJson(this, `${id}OidcCondition`, {
      value: {
        [`${issuerUrl}:sub`]: `system:serviceaccount:${serviceAccountNamespace}:${serviceAccountName}`,
        [`${issuerUrl}:aud`]: "sts.amazonaws.com",
      },
    });

    return new iam.Role(this, id, {
      roleName:
        `${Names.uniqueResourceName(this, { maxLength: 50, allowedSpecialCharacters: "-" })}-${id}`.substring(
          0,
          64,
        ),
      assumedBy: new iam.FederatedPrincipal(
        oidcProvider.openIdConnectProviderArn,
        {
          StringEquals: conditions,
        },
        "sts:AssumeRoleWithWebIdentity",
      ),
    });
  }
}
