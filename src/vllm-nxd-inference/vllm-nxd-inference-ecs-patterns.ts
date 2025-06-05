import { Duration } from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3assets from "aws-cdk-lib/aws-s3-assets";
import {
  ApplicationListener,
  ApplicationLoadBalancer,
  ApplicationTargetGroup,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { Construct } from "constructs";
import { join } from "path";
import {
  ApplicationLoadBalancedNeuronxService,
  ApplicationLoadBalancedNeuronxServiceProps,
  NeuronxTaskDefinition,
  NeuronxTaskDefinitionPropsBase,
} from "../base/aws-ecs-patterns";
import { INeuronxImage, PytorchTrainingNeuronxImage } from "../base/neuronx";
import { INeuronxContainerImage } from "../base/neuronx-compiler";
import { VllmEngineArgumentsParser } from "../base/server-engine/vllm-engine";
import { VllmNxdInferenceCompiledModel } from "./vllm-nxd-inference-compiler";

/**
 * Base class for VllmNxdInferenceImage.
 */
export abstract class VllmNxdInferenceImageBase
  implements INeuronxContainerImage
{
  /**
   * The container image.
   */
  abstract readonly image: ecs.ContainerImage;
  /**
   * The neuronx SDK version.
   */
  readonly sdkVersion: string;
  constructor(neruonxImage: INeuronxImage) {
    this.sdkVersion = neruonxImage.sdkVersion;
  }
  /**
   * The Git branch name for aws-neuron/upstreaming-to-vllm.
   * @see https://github.com/aws-neuron/upstreaming-to-vllm
   */
  get vllmGitBranch(): string {
    return "main";
  }
}

/**
 * Inference container image for vLLM on NxD Inference.
 * @example new VllmNxdInferenceImage(PytorchTrainingNeuronxImage.LATEST)
 */
export class VllmNxdInferenceImage extends VllmNxdInferenceImageBase {
  readonly image: ecs.ContainerImage;
  constructor(neruonxImage: INeuronxImage) {
    super(neruonxImage);
    this.image = ecs.ContainerImage.fromAsset(
      join(__dirname, "../../scripts/inference/vllm-nxd-inference"),
      {
        buildArgs: {
          IMAGE_NAME: neruonxImage.imageName,
          IMAGE_TAG: neruonxImage.imageTag,
          VLLM_GIT_BRANCH: this.vllmGitBranch,
        },
      },
    );
  }
}

/**
 * Task definition for VllmNxdInference.
 */
/**
 * Configuration for a LoRA adapter.
 */
export interface LoraAdapterConfig {
  /**
   * The name of the adapter.
   */
  readonly name: string;

  /**
   * The path to the local LoRA adapter file or directory.
   * Either localPath or s3Location must be specified.
   */
  readonly localPath?: string;

  /**
   * The S3 bucket containing the adapter.
   * Either localPath or both s3Bucket and s3Key must be specified.
   */
  readonly s3Bucket?: s3.IBucket;
  
  /**
   * The S3 key of the adapter.
   * Either localPath or both s3Bucket and s3Key must be specified.
   */
  readonly s3Key?: string;

  /**
   * The base model name for this adapter (optional).
   */
  readonly baseModelName?: string;

  /**
   * Additional asset options when using localPath.
   * @default - No additional options
   */
  readonly assetOptions?: s3assets.AssetOptions;
}

export interface VllmNxdInferenceTaskDefinitionProps
  extends NeuronxTaskDefinitionPropsBase {
  /**
   * The model to be compiled.
   */
  readonly compiledModel: VllmNxdInferenceCompiledModel;
  /**
   * The image to be used for the container.
   * @default - latest VllmNxdInferenceImage
   */
  readonly image?: VllmNxdInferenceImage;
  /**
   * The environment variables to pass to the container.
   * This is only applicable when using container runtime.
   *
   * @default - No environment variables.
   */
  readonly environment?: {
    [key: string]: string;
  };
  
  /**
   * LoRA adapters to be used with this task definition.
   * @default - No LoRA adapters
   */
  readonly loraAdapters?: LoraAdapterConfig[];
}

/**
 * Task definition for VllmNxdInference.
 */
export class VllmNxdInferenceTaskDefinition extends NeuronxTaskDefinition {
  private readonly loraAdapters: { name: string; s3Uri: string; baseModelName?: string }[] = [];

  /**
   * Add a LoRA adapter to this task definition.
   * 
   * @param adapter The LoRA adapter configuration
   * @returns This task definition for chaining
   */
  public addLoraAdapter(adapter: LoraAdapterConfig): VllmNxdInferenceTaskDefinition {
    let s3Uri: string;
    
    if (adapter.localPath) {
      // Create an asset for local path
      const asset = new s3assets.Asset(this, `LoraAdapter-${adapter.name}`, {
        path: adapter.localPath,
        ...adapter.assetOptions
      });
      
      // Grant read access to the task role
      asset.grantRead(this.taskRole);
      
      s3Uri = asset.s3ObjectUrl;
    } else if (adapter.s3Bucket && adapter.s3Key) {
      // Use existing S3 object
      s3Uri = `s3://${adapter.s3Bucket.bucketName}/${adapter.s3Key}`;
      adapter.s3Bucket.grantRead(this.taskRole, adapter.s3Key);
    } else {
      throw new Error(`LoRA adapter ${adapter.name} must specify either localPath or both s3Bucket and s3Key`);
    }
    
    this.loraAdapters.push({
      name: adapter.name,
      s3Uri,
      baseModelName: adapter.baseModelName,
    });
    
    return this;
  }
  
  constructor(
    scope: Construct,
    id: string,
    props: VllmNxdInferenceTaskDefinitionProps,
  ) {
    const neuronxInstanceType =
      props.neuronxInstanceType ?? props.compiledModel.compileTimeInstanceType;
    const tensorParallelSize =
      props.compiledModel.vllmArgs.tensorParallelSize ?? 1;
    super(scope, id, {
      ...props,
      neuronxInstanceType,
      tensorParallelSize,
    });
    const image =
      props.image ??
      new VllmNxdInferenceImage(PytorchTrainingNeuronxImage.LATEST);
    const port = props.compiledModel.vllmArgs.port ?? 8000;
    
    // Add LoRA adapters if specified in props
    if (props.loraAdapters) {
      for (const adapter of props.loraAdapters) {
        this.addLoraAdapter(adapter);
      }
    }
    
    // Prepare vllmArgs with LoRA modules if any
    let vllmArgs = { ...props.compiledModel.vllmArgs };
    
    if (this.loraAdapters.length > 0) {
      // Convert our LoRA adapters to the format expected by vllm
      const loraModulesArray = this.loraAdapters.map(adapter => ({
        name: adapter.name,
        path: adapter.s3Uri,
        base_model_name: adapter.baseModelName,
      }));
      
      // Add or override the loraModules property in vllmArgs
      vllmArgs = {
        ...vllmArgs,
        loraModules: loraModulesArray,
      };
    }
    
    // Get CLI args using the updated vllmArgs
    const vllmCliArgs = VllmEngineArgumentsParser.cli(vllmArgs);
    
    this.addContainerWithDefault("vLLM", {
      image: image.image,
      portMappings: [
        {
          containerPort: port,
        },
      ],
      healthCheck: {
        command: [
          "CMD-SHELL",
          `curl -f http://localhost:${port}/health || exit 1`,
        ],
        startPeriod: Duration.minutes(5),
      },
      command: vllmCliArgs,
      environment: {
        ...props.environment,
        VLLM_NEURON_FRAMEWORK: "neuronx-distributed-inference",
        NEURON_COMPILED_ARTIFACTS: "neuron-compiled-artifacts",
        NEURON_RT_NUM_CORES: tensorParallelSize.toString(),
        MODEL_NAME: props.compiledModel.modelName,
        COMPILED_ARTIFACTS_S3_URI: props.compiledModel.s3Uri,
      },
    });
  }
}

/**
 * Props for ApplicationLoadBalancedVllmNxDInferenceService.
 */
export interface ApplicationLoadBalancedVllmNxDInferenceServiceProps
  extends ApplicationLoadBalancedNeuronxServiceProps {}

/**
 * ApplicationLoadBalancedVllmNxDInferenceService is a wrapper of ApplicationLoadBalancedNeuronxServiceBase.
 * It provides a simple way to deploy vLLM on NxD Inference.
 * @example
 * const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
 *   vpc,
 *   bucket,
 *   model: Model.fromHuggingFace("example/example-7b-chat"),
 * });
 * const compiledModel = compiler.compile();
 * const taskDefinition = new VllmNxdInferenceTaskDefinition(
 *   this,
 *   "TaskDefinition",
 *   {
 *     vpc,
 *     compiledModel,
 *   },
 * );
 * new ApplicationLoadBalancedVllmNxDInferenceService(this, "Service", {
 *   taskDefinition,
 * });
 */
export class ApplicationLoadBalancedVllmNxDInferenceService extends Construct {
  readonly loadBalancer: ApplicationLoadBalancer;
  readonly listener: ApplicationListener;
  readonly targetGroup: ApplicationTargetGroup;
  readonly service: ecs.Ec2Service;
  readonly taskDefinition: ecs.Ec2TaskDefinition;
  constructor(
    scope: Construct,
    id: string,
    props: ApplicationLoadBalancedVllmNxDInferenceServiceProps,
  ) {
    super(scope, id);
    const resource = new ApplicationLoadBalancedNeuronxService(
      this,
      "Resource",
      props,
    );
    resource.targetGroup.configureHealthCheck({
      path: "/health",
    });
    this.loadBalancer = resource.loadBalancer;
    this.listener = resource.listener;
    this.targetGroup = resource.targetGroup;
    this.service = resource.service;
    this.taskDefinition = resource.taskDefinition;
  }
}
