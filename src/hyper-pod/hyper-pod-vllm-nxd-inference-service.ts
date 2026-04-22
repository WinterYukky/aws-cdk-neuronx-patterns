import { Names } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct, IDependable } from "constructs";
import { HyperPodCluster } from "../base/sagemaker";
import { VllmNxdInferenceCompiledModel } from "../vllm-nxd-inference/vllm-nxd-inference-compiler";
import {
  VllmEngineArguments,
  VllmEngineArgumentsParser,
} from "../base/server-engine/vllm-engine";
import {
  IVllmInferenceNeuronxImage,
  VllmInferenceNeuronxImage,
} from "../base/neuronx";

/**
 * KV cache configuration for the inference endpoint.
 */
export interface KvCacheConfig {
  /**
   * Enable L1 (in-memory) KV cache.
   * @default false
   */
  readonly enableL1Cache?: boolean;
  /**
   * Enable L2 (persistent) KV cache.
   * @default false
   */
  readonly enableL2Cache?: boolean;
  /**
   * L2 cache backend type.
   * @default 'tieredstorage'
   */
  readonly l2CacheBackend?: "redis" | "tieredstorage";
  /**
   * L2 cache local URL override.
   */
  readonly l2CacheLocalUrl?: string;
}

/**
 * Intelligent routing configuration for the inference endpoint.
 */
export interface IntelligentRoutingConfig {
  /**
   * Whether intelligent routing is enabled.
   */
  readonly enabled: boolean;
  /**
   * Routing strategy to use.
   * @default 'prefixaware'
   */
  readonly routingStrategy?:
    | "prefixaware"
    | "kvaware"
    | "session"
    | "roundrobin";
}

/**
 * Autoscaling configuration for the inference endpoint via KEDA.
 */
export interface AutoscalingConfig {
  /**
   * Minimum number of replicas.
   * @default 1
   */
  readonly minReplicas?: number;
  /**
   * Maximum number of replicas.
   * @default 10
   */
  readonly maxReplicas?: number;
  /**
   * Target metric name for autoscaling.
   */
  readonly targetMetric?: string;
  /**
   * Target metric value threshold.
   */
  readonly targetValue?: number;
}

/**
 * Props for HyperPodVllmNxdInferenceService construct.
 */
export interface HyperPodVllmNxdInferenceServiceProps {
  /**
   * The HyperPod cluster to deploy on.
   */
  readonly cluster: HyperPodCluster;
  /**
   * The compiled model to deploy.
   */
  readonly compiledModel: VllmNxdInferenceCompiledModel;
  /**
   * Kubernetes namespace for the deployment.
   * @default 'default'
   */
  readonly namespace?: string;
  /**
   * The vLLM container image to use.
   * @default - latest VllmInferenceNeuronxImage
   */
  readonly image?: IVllmInferenceNeuronxImage;
  /**
   * vLLM engine arguments override.
   */
  readonly vllmArgs?: VllmEngineArguments;
  /**
   * KV cache configuration.
   */
  readonly kvCacheConfig?: KvCacheConfig;
  /**
   * Intelligent routing configuration.
   */
  readonly intelligentRouting?: IntelligentRoutingConfig;
  /**
   * Autoscaling configuration.
   */
  readonly autoscaling?: AutoscalingConfig;
  /**
   * Register as SageMaker endpoint for invoke-endpoint API.
   * @default false
   */
  readonly registerEndpoint?: boolean;
}

/**
 * High-level construct that deploys a vLLM inference endpoint on a HyperPod cluster
 * using the InferenceEndpointConfig Kubernetes CRD.
 *
 * This construct installs the required inference operator addon, cert-manager,
 * the S3 Mountpoint and FSx for Lustre CSI drivers, and configures IRSA roles
 * automatically.
 *
 * Note: Model artifacts are loaded by the HyperPod execution role. For production
 * workloads requiring pod-level isolation, consider using IRSA for S3 access instead.
 */
export class HyperPodVllmNxdInferenceService extends Construct {
  /**
   * The Kubernetes endpoint name.
   */
  readonly endpointName: string;

  constructor(
    scope: Construct,
    id: string,
    props: HyperPodVllmNxdInferenceServiceProps,
  ) {
    super(scope, id);

    const namespace = props.namespace ?? "default";
    const vllmImage = props.image ?? VllmInferenceNeuronxImage.LATEST;
    const imageUri = `${vllmImage.imageName}:${vllmImage.imageTag}`;
    const registerEndpoint = props.registerEndpoint ?? false;

    const vllmArgs: VllmEngineArguments = {
      ...props.compiledModel.vllmArgs,
      ...props.vllmArgs,
      model: "/opt/ml/model",
    };
    const tensorParallelSize = vllmArgs.tensorParallelSize ?? 1;
    const port = vllmArgs.port ?? 8000;
    const cliArgs = VllmEngineArgumentsParser.cli(vllmArgs);

    this.endpointName = Names.uniqueResourceName(this, {
      maxLength: 63,
      allowedSpecialCharacters: "-",
    })
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/^[^a-z]/, "a");

    const instanceType = `ml.${props.compiledModel.recommendedInstanceType.instanceType.toString()}`;

    // --- Install inference prerequisites ---
    const inferencePrerequisites = this.installInferencePrerequisites(
      props.cluster,
    );

    // --- Build the InferenceEndpointConfig CRD manifest ---
    const manifest = {
      apiVersion: "inference.sagemaker.aws.amazon.com/v1alpha1",
      kind: "InferenceEndpointConfig",
      metadata: {
        name: this.endpointName,
        namespace,
      },
      spec: {
        modelName: props.compiledModel.modelName,
        instanceType,
        containerSpec: {
          image: imageUri,
          env: [
            {
              name: "VLLM_NEURON_FRAMEWORK",
              value: "neuronx-distributed-inference",
            },
            {
              name: "NEURON_COMPILED_ARTIFACTS",
              value: "neuron-compiled-artifacts",
            },
            {
              name: "NEURON_RT_NUM_CORES",
              value: tensorParallelSize.toString(),
            },
            {
              name: "XLA_HANDLE_SPECIAL_SCALAR",
              value: "1",
            },
          ],
          args: cliArgs,
          ports: [
            {
              containerPort: port,
              protocol: "TCP",
            },
          ],
        },
        modelDataSource: {
          s3DataSource: {
            s3Uri: props.compiledModel.s3Uri,
          },
        },
      } as Record<string, unknown>,
    };

    // KV Cache configuration
    if (props.kvCacheConfig) {
      const kvCacheSpec: Record<string, unknown> = {};
      if (props.kvCacheConfig.enableL1Cache !== undefined) {
        kvCacheSpec.enableL1Cache = props.kvCacheConfig.enableL1Cache;
      }
      if (props.kvCacheConfig.enableL2Cache !== undefined) {
        kvCacheSpec.enableL2Cache = props.kvCacheConfig.enableL2Cache;
      }
      if (props.kvCacheConfig.enableL2Cache) {
        const l2Spec: Record<string, unknown> = {
          l2CacheBackend: props.kvCacheConfig.l2CacheBackend ?? "tieredstorage",
        };
        if (props.kvCacheConfig.l2CacheLocalUrl) {
          l2Spec.l2CacheLocalUrl = props.kvCacheConfig.l2CacheLocalUrl;
        }
        kvCacheSpec.l2CacheSpec = l2Spec;
      }
      manifest.spec.kvCacheSpec = kvCacheSpec;
    }

    // Intelligent routing configuration
    if (props.intelligentRouting) {
      const routingSpec: Record<string, unknown> = {
        enabled: props.intelligentRouting.enabled,
      };
      if (props.intelligentRouting.routingStrategy) {
        routingSpec.routingStrategy = props.intelligentRouting.routingStrategy;
      }
      manifest.spec.intelligentRoutingSpec = routingSpec;
    }

    // SageMaker endpoint registration
    if (registerEndpoint) {
      manifest.spec.sageMakerEndpoint = {
        register: true,
      };
    }

    // Deploy the CRD manifest via kubectl
    const endpointManifest = props.cluster.eksCluster.addManifest(
      "InferenceEndpoint",
      manifest,
    );
    // The CRDs required by this manifest (e.g. InferenceEndpointConfig) are
    // installed by the amazon-sagemaker-hyperpod-inference addon. Without
    // this dependency the manifest can race ahead of the addon and fail
    // with "no matches for kind InferenceEndpointConfig".
    //
    // We depend on the CfnAddon resource directly (rather than the
    // surrounding Construct) so we only introduce a leaf-level dependency
    // and avoid CloudFormation dependency cycles caused by the Construct's
    // other supporting resources (IRSA role, TLS bucket, ...) that already
    // depend on shared cluster infrastructure.
    endpointManifest.node.addDependency(
      inferencePrerequisites.node.defaultChild as cdk.CfnResource,
    );

    // Grant S3 access for model loading
    props.compiledModel.bucket.grantRead(props.cluster.executionRole);

    // Autoscaling via KEDA ScaledObject
    if (props.autoscaling) {
      const minReplicas = props.autoscaling.minReplicas ?? 1;
      const maxReplicas = props.autoscaling.maxReplicas ?? 10;
      const targetMetric = props.autoscaling.targetMetric ?? "cpu_utilization";
      const targetValue = props.autoscaling.targetValue ?? 80;

      const scaledObjectManifest = {
        apiVersion: "keda.sh/v1alpha1",
        kind: "ScaledObject",
        metadata: {
          name: `${this.endpointName}-scaledobject`,
          namespace,
        },
        spec: {
          scaleTargetRef: {
            apiVersion: "apps/v1",
            kind: "Deployment",
            name: this.endpointName,
          },
          minReplicaCount: minReplicas,
          maxReplicaCount: maxReplicas,
          triggers: [
            {
              type: "metrics-api",
              metadata: {
                targetValue: targetValue.toString(),
                url: `http://localhost:${port}/metrics`,
                valueLocation: targetMetric,
              },
            },
          ],
        },
      };

      const scaledObject = props.cluster.eksCluster.addManifest(
        "AutoscalingScaledObject",
        scaledObjectManifest,
      );
      // KEDA's ScaledObject CRD is also installed by the inference addon,
      // so mirror the dependency used for the InferenceEndpointConfig manifest.
      scaledObject.node.addDependency(
        inferencePrerequisites.node.defaultChild as cdk.CfnResource,
      );
    }
  }

  private installInferencePrerequisites(cluster: HyperPodCluster): eks.Addon {
    // Inference Operator IRSA role
    const inferenceOperatorRole = cluster.createServiceAccountRole(
      "InferenceOperatorRole",
      "hyperpod-inference-controller-manager",
      "kube-system",
    );
    inferenceOperatorRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AmazonSageMakerHyperPodInferenceAccess",
      ),
    );
    // Override role name to match inference operator's required pattern
    const cfnRole = inferenceOperatorRole.node.defaultChild as iam.CfnRole;
    cfnRole.addPropertyOverride(
      "RoleName",
      `SageMakerHyperPodInference-${Names.uniqueResourceName(this, { maxLength: 64 - "SageMakerHyperPodInference-".length, allowedSpecialCharacters: "-" })}`,
    );

    // TLS certificate bucket
    const tlsBucket = new s3.Bucket(this, "TlsCertificateBucket", {
      enforceSSL: true,
    });
    tlsBucket.grantReadWrite(inferenceOperatorRole);

    // Install cert-manager via Helm.
    //
    // The `amazon-sagemaker-hyperpod-inference` EKS addon depends on
    // cert-manager at install time (currently a preview-stage requirement):
    //
    //     Code: K8sResourceNotFound, Message: cert-manager is not installed
    //     on this cluster. During preview, you are required to have
    //     previously installed cert-manager.
    //
    // We deploy the upstream Jetstack chart into the `cert-manager` namespace
    // with CRDs enabled. The addon below depends on this chart so that
    // CloudFormation does not race the addon ahead of the cert-manager
    // installation.
    const certManager = cluster.eksCluster.addHelmChart("CertManager", {
      chart: "cert-manager",
      repository: "https://charts.jetstack.io",
      release: "cert-manager",
      namespace: "cert-manager",
      createNamespace: true,
      values: {
        crds: {
          enabled: true,
        },
      },
      wait: true,
    });

    // Install the Mountpoint for Amazon S3 and the FSx for Lustre CSI drivers
    // as EKS managed addons. The HyperPod inference operator's
    // `check-csi-drivers` init container enforces that both CSIDriver objects
    // exist on the cluster:
    //
    //     S3 CSI driver not installed (missing CSIDriver s3.csi.aws.com).
    //     FSx CSI driver not installed (missing CSIDriver fsx.csi.aws.com).
    //
    // Without these, the inference operator controller-manager pod enters
    // Init:CrashLoopBackOff and the EKS addon status stays at CREATING for
    // the full CloudFormation stabilization window (2h+).
    const s3CsiAddon = new eks.Addon(this, "S3CsiDriverAddon", {
      addonName: "aws-mountpoint-s3-csi-driver",
      cluster: cluster.eksCluster,
    });
    const fsxCsiAddon = new eks.Addon(this, "FsxCsiDriverAddon", {
      addonName: "aws-fsx-csi-driver",
      cluster: cluster.eksCluster,
    });
    // Depend on the raw CfnCluster rather than the Cluster construct so we do
    // not pull in other cluster subtree resources and form a dependency cycle.
    for (const csiAddon of [s3CsiAddon, fsxCsiAddon]) {
      csiAddon.node.addDependency(
        (cluster.eksCluster.node.defaultChild ??
          cluster.eksCluster) as IDependable,
      );
    }

    // Inference Operator EKS Addon (bundles ALB Controller and KEDA; requires
    // cert-manager and the S3/FSx CSI drivers to be pre-installed on the
    // cluster).
    // Derive the HyperPod SageMaker cluster ARN via Stack.formatArn +
    // getResourceNameAttribute against the underlying CfnCluster's `Ref`
    // (which resolves to the cluster name). This avoids emitting an
    // `Fn::GetAtt` to the CfnCluster, which would pull the cluster
    // construct (and everything that depends on it, including the inference
    // manifest) into the addon's implicit DependsOn and cause a
    // CloudFormation dependency cycle.
    const sagemakerCluster = cluster.node.findChild(
      "SageMakerCluster",
    ) as cdk.CfnResource;
    const clusterArnForAddon = cdk.Stack.of(this).formatArn({
      service: "sagemaker",
      resource: "cluster",
      resourceName: sagemakerCluster.ref,
    });

    const addon = new eks.Addon(this, "InferenceOperatorAddon", {
      addonName: "amazon-sagemaker-hyperpod-inference",
      cluster: cluster.eksCluster,
      configurationValues: {
        executionRoleArn: inferenceOperatorRole.roleArn,
        tlsCertificateS3Bucket: tlsBucket.bucketName,
        // The inference operator tries to auto-detect the HyperPod cluster
        // ARN from the node it runs on, which fails when it is scheduled on
        // the EKS system nodegroup ("cluster name label not found"). Pass
        // the ARN explicitly so the operator does not depend on node labels
        // present only on SageMaker HyperPod instance groups.
        hyperpodClusterArn: clusterArnForAddon,
      },
    });
    // We intentionally depend on the underlying CfnCluster rather than the
    // Cluster construct itself. Depending on the Construct would expand into
    // every resource reachable from the cluster subtree (including any
    // KubernetesManifest rendered via `cluster.eksCluster.addManifest(...)`),
    // which would cause CloudFormation dependency cycles once we make our
    // own manifests depend on the addon to ensure CRDs exist first.
    addon.node.addDependency(
      (cluster.eksCluster.node.defaultChild ??
        cluster.eksCluster) as IDependable,
    );
    addon.node.addDependency(tlsBucket);
    // The inference addon's controller pods only pass their init checks when
    // both the S3 Mountpoint and FSx CSI drivers are already present, so wait
    // for each addon's CfnResource before kicking off the inference addon
    // install.
    for (const csiAddon of [s3CsiAddon, fsxCsiAddon]) {
      addon.node.addDependency(
        (csiAddon.node.defaultChild ?? csiAddon) as IDependable,
      );
    }
    // The inference addon refuses to install until cert-manager is present
    // on the cluster, so wait for the Helm chart above to finish. We depend
    // on the CfnResource for the custom resource that runs `helm install` to
    // avoid pulling in any transitive dependencies from the Cluster subtree
    // and re-introducing a dependency cycle.
    addon.node.addDependency(
      (certManager.node.defaultChild ?? certManager) as IDependable,
    );

    return addon;
  }
}
