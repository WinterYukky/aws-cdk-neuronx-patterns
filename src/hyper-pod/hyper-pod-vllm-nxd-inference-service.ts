import { Names } from "aws-cdk-lib";
import * as eks from "aws-cdk-lib/aws-eks-v2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
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
 * and configures IRSA roles automatically.
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
    this.installInferencePrerequisites(props.cluster);

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
    props.cluster.eksCluster.addManifest("InferenceEndpoint", manifest);

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

      props.cluster.eksCluster.addManifest(
        "AutoscalingScaledObject",
        scaledObjectManifest,
      );
    }
  }

  private installInferencePrerequisites(cluster: HyperPodCluster): Construct {
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

    // Inference Operator EKS Addon (bundles ALB Controller, KEDA, and cert-manager)
    const addon = new eks.Addon(this, "InferenceOperatorAddon", {
      addonName: "amazon-sagemaker-hyperpod-inference",
      cluster: cluster.eksCluster,
      configurationValues: {
        executionRoleArn: inferenceOperatorRole.roleArn,
        tlsCertificateS3Bucket: tlsBucket.bucketName,
      },
    });
    addon.node.addDependency(cluster.eksCluster);
    addon.node.addDependency(tlsBucket);

    return addon;
  }
}
