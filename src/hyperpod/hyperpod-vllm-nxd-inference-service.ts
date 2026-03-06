import { Construct } from "constructs";
import { HyperPodCluster } from "./hyperpod-cluster";
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
   * @default 1
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
 */
export class HyperPodVllmNxdInferenceService extends Construct {
  /**
   * The Kubernetes manifest for the InferenceEndpointConfig CRD.
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

    this.endpointName =
      this.node.id.toLowerCase().replace(/[^a-z0-9-]/g, "-") + "-endpoint";

    const instanceType = `ml.${props.compiledModel.compileTimeInstanceType.instanceType.toString()}`;

    // Build the InferenceEndpointConfig CRD manifest
    const manifest: Record<string, any> = {
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
      },
    };

    // KV Cache configuration
    if (props.kvCacheConfig) {
      const kvCacheSpec: Record<string, any> = {};
      if (props.kvCacheConfig.enableL1Cache !== undefined) {
        kvCacheSpec.enableL1Cache = props.kvCacheConfig.enableL1Cache;
      }
      if (props.kvCacheConfig.enableL2Cache !== undefined) {
        kvCacheSpec.enableL2Cache = props.kvCacheConfig.enableL2Cache;
      }
      if (props.kvCacheConfig.enableL2Cache) {
        kvCacheSpec.l2CacheSpec = {
          l2CacheBackend: props.kvCacheConfig.l2CacheBackend ?? "tieredstorage",
        };
        if (props.kvCacheConfig.l2CacheLocalUrl) {
          kvCacheSpec.l2CacheSpec.l2CacheLocalUrl =
            props.kvCacheConfig.l2CacheLocalUrl;
        }
      }
      manifest.spec.kvCacheSpec = kvCacheSpec;
    }

    // Intelligent routing configuration
    if (props.intelligentRouting) {
      manifest.spec.intelligentRoutingSpec = {
        enabled: props.intelligentRouting.enabled,
      };
      if (props.intelligentRouting.routingStrategy) {
        manifest.spec.intelligentRoutingSpec.routingStrategy =
          props.intelligentRouting.routingStrategy;
      }
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
      const maxReplicas = props.autoscaling.maxReplicas ?? 1;
      const targetMetric = props.autoscaling.targetMetric ?? "cpu_utilization";
      const targetValue = props.autoscaling.targetValue ?? 80;

      const scaledObjectManifest: Record<string, any> = {
        apiVersion: "keda.sh/v1alpha1",
        kind: "ScaledObject",
        metadata: {
          name: `${this.endpointName}-scaledobject`,
          namespace,
        },
        spec: {
          scaleTargetRef: {
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
}
