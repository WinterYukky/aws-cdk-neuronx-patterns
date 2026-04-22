import { Names } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as eksLegacy from "aws-cdk-lib/aws-eks";
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
 * Autoscaling configuration for the inference endpoint.
 *
 * The InferenceEndpointConfig CRD (v1) accepts an `autoScalingSpec` with
 * CloudWatch- or Prometheus-based triggers; this construct currently
 * exposes the minimum surface needed to set the replica range and leave
 * triggers configurable via `triggers`.
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
   * CloudWatch triggers for autoscaling (see CRD docs for the full schema).
   * Each trigger must at least set `name`, `namespace`, `metricName` and
   * `targetValue`.
   */
  readonly cloudWatchTriggers?: Record<string, unknown>[];
  /**
   * Prometheus triggers for autoscaling (see CRD docs for the full schema).
   */
  readonly prometheusTriggers?: Record<string, unknown>[];
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

    // The compile entrypoint (scripts/compile/vllm-nxd-inference/entrypoint.sh)
    // downloads the model into `$MODEL_NAME/` and then uploads the entire
    // working directory to S3, so the compiled artifacts in S3 live under
    // `<s3Prefix>/<modelName>/...` with `config.json` inside that subdirectory.
    // When the inference operator mounts that prefix at /opt/ml/model, the
    // HuggingFace config is therefore at /opt/ml/model/<modelName>/config.json,
    // and vLLM needs to be pointed at that nested directory.
    const vllmArgs: VllmEngineArguments = {
      ...props.compiledModel.vllmArgs,
      ...props.vllmArgs,
      model: `/opt/ml/model/${props.compiledModel.modelName}`,
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
      props.compiledModel.bucket,
    );

    // --- Build the InferenceEndpointConfig CRD manifest ---
    //
    // The stored schema version in the amazon-sagemaker-hyperpod-inference
    // addon is `v1`, which differs materially from `v1alpha1`:
    //   - `containerSpec` is renamed to `worker`; `env` -> `environmentVariables`
    //     and `ports` -> `modelInvocationPort` (a single port).
    //   - `modelDataSource.s3DataSource.s3Uri` is replaced by
    //     `modelSourceConfig.{modelSourceType, s3Storage, modelLocation}`.
    //   - `sageMakerEndpoint.register: true` is replaced by populating
    //     `endpointName`; an empty string means "do not create an endpoint".
    //   - `worker.modelVolumeMount` and `worker.resources` are required.
    const manifest = {
      apiVersion: "inference.sagemaker.aws.amazon.com/v1",
      kind: "InferenceEndpointConfig",
      metadata: {
        name: this.endpointName,
        namespace,
      },
      spec: {
        modelName: props.compiledModel.modelName,
        instanceType,
        ...(registerEndpoint ? { endpointName: this.endpointName } : {}),
        modelSourceConfig: {
          modelSourceType: "s3",
          s3Storage: {
            bucketName: props.compiledModel.bucket.bucketName,
            region: cdk.Stack.of(this).region,
          },
          modelLocation: props.compiledModel.s3Prefix,
        },
        worker: {
          image: imageUri,
          // The Neuron vLLM container's ENTRYPOINT is
          // `python /usr/local/bin/vllm_entrypoint.py`, which simply
          // `subprocess.check_call`s its argv. Without an explicit
          // `command`, Kubernetes would pass the first `args` entry
          // (the model path) as the program to exec, producing
          // `PermissionError: [Errno 13] Permission denied: '/opt/ml/model'`
          // at startup. Prepend `vllm serve` so the rendered process is
          // `vllm_entrypoint.py vllm serve <model_path> <cliArgs...>`,
          // matching the invocation the compile-time image uses in
          // `scripts/compile/vllm-nxd-inference/entrypoint.sh`.
          command: ["vllm", "serve"],
          args: cliArgs,
          environmentVariables: [
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
          modelInvocationPort: {
            containerPort: port,
          },
          modelVolumeMount: {
            name: "model-volume",
          },
          resources: {
            requests: {
              "aws.amazon.com/neuron": tensorParallelSize.toString(),
            },
            limits: {
              "aws.amazon.com/neuron": tensorParallelSize.toString(),
            },
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

    // Autoscaling is driven by the `autoScalingSpec` field on the
    // InferenceEndpointConfig itself in schema v1 (the operator provisions
    // a managed ScaledObject internally), so we augment the manifest we
    // already built above rather than applying a standalone KEDA resource.
    if (props.autoscaling) {
      const autoScalingSpec: Record<string, unknown> = {
        minReplicaCount: props.autoscaling.minReplicas ?? 1,
        maxReplicaCount: props.autoscaling.maxReplicas ?? 10,
      };
      if (props.autoscaling.cloudWatchTriggers?.length) {
        autoScalingSpec.cloudWatchTriggerList =
          props.autoscaling.cloudWatchTriggers;
      }
      if (props.autoscaling.prometheusTriggers?.length) {
        autoScalingSpec.prometheusTriggerList =
          props.autoscaling.prometheusTriggers;
      }
      manifest.spec.autoScalingSpec = autoScalingSpec;
    }
  }

  private installInferencePrerequisites(
    cluster: HyperPodCluster,
    modelBucket: s3.IBucket,
  ): eks.Addon {
    // Inference Operator IRSA role.
    //
    // The EKS addon installs the controller-manager ServiceAccount under the
    // `hyperpod-inference-system` namespace (not `kube-system`), so the IRSA
    // trust policy must condition on that namespace or sts:AssumeRoleWithWebIdentity
    // is denied with "Not authorized to perform sts:AssumeRoleWithWebIdentity".
    const inferenceOperatorRole = cluster.createServiceAccountRole(
      "InferenceOperatorRole",
      "hyperpod-inference-controller-manager",
      "hyperpod-inference-system",
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
    // EKS Pod Identity Agent is required for Mountpoint S3 CSI driver v2
    // to obtain AWS credentials for signing S3 API calls. Without this
    // the Mountpoint Pod fails with "NoSigningCredentials" even if
    // driver-level Pod Identity associations are configured.
    const podIdentityAgentAddon = new eks.Addon(this, "PodIdentityAgentAddon", {
      addonName: "eks-pod-identity-agent",
      cluster: cluster.eksCluster,
    });
    // Depend on the raw CfnCluster rather than the Cluster construct so we do
    // not pull in other cluster subtree resources and form a dependency cycle.
    for (const helperAddon of [s3CsiAddon, fsxCsiAddon, podIdentityAgentAddon]) {
      helperAddon.node.addDependency(
        (cluster.eksCluster.node.defaultChild ??
          cluster.eksCluster) as IDependable,
      );
    }

    // Grant the S3 CSI driver access to the model bucket. Mountpoint S3 CSI
    // driver v2 runs as a separate Mountpoint Pod which the driver spawns on
    // the workload's node; that pod inherits credentials through an EKS Pod
    // Identity association on both the driver's controller/node SA and the
    // Mountpoint pod's SA. Here we wire both associations to a role that can
    // read/write the compiled-model bucket. See
    // https://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/CONFIGURATION.md
    const s3CsiRole = new iam.Role(this, "S3CsiDriverRole", {
      assumedBy: new iam.ServicePrincipal("pods.eks.amazonaws.com", {
        conditions: {},
      }).withSessionTags(),
      description:
        "Role assumed by the Mountpoint S3 CSI driver via EKS Pod Identity to access the inference model bucket.",
    });
    modelBucket.grantReadWrite(s3CsiRole);
    const s3CsiAssociations = [
      new eksLegacy.CfnPodIdentityAssociation(
        this,
        "S3CsiDriverSaAssociation",
        {
          clusterName: cluster.eksCluster.clusterName,
          namespace: "kube-system",
          serviceAccount: "s3-csi-driver-sa",
          roleArn: s3CsiRole.roleArn,
        },
      ),
      new eksLegacy.CfnPodIdentityAssociation(
        this,
        "S3CsiDriverControllerSaAssociation",
        {
          clusterName: cluster.eksCluster.clusterName,
          namespace: "kube-system",
          serviceAccount: "s3-csi-driver-controller-sa",
          roleArn: s3CsiRole.roleArn,
        },
      ),
      new eksLegacy.CfnPodIdentityAssociation(
        this,
        "S3CsiMountpointPodAssociation",
        {
          clusterName: cluster.eksCluster.clusterName,
          namespace: "mount-s3",
          serviceAccount: "default",
          roleArn: s3CsiRole.roleArn,
        },
      ),
    ];
    for (const a of s3CsiAssociations) {
      a.node.addDependency(
        (s3CsiAddon.node.defaultChild ?? s3CsiAddon) as IDependable,
      );
      a.node.addDependency(
        (podIdentityAgentAddon.node.defaultChild ??
          podIdentityAgentAddon) as IDependable,
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

    // We pass the HyperPod cluster ARN through `hyperpodClusterArn` using a
    // Ref of the SageMaker cluster, but `toJsonString` on
    // `configurationValues` does not propagate that Ref into
    // CloudFormation's automatic DependsOn inference. Explicitly wait for
    // the CfnCluster so the addon is created after the HyperPod cluster
    // actually exists.
    addon.node.addDependency(sagemakerCluster);

    return addon;
  }
}
