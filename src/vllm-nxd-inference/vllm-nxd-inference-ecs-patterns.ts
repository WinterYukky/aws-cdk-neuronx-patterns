import { Duration } from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import {
  ApplicationListener,
  ApplicationLoadBalancer,
  ApplicationTargetGroup,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { Construct } from "constructs";
import {
  ApplicationLoadBalancedNeuronxService,
  ApplicationLoadBalancedNeuronxServiceProps,
  NeuronxTaskDefinition,
  NeuronxTaskDefinitionPropsBase,
} from "../base/aws-ecs-patterns";
import {
  IVllmInferenceNeuronxImage,
  VllmInferenceNeuronxImage,
} from "../base/neuronx";
import { INeuronxContainerImage } from "../base/neuronx-compiler";
import { VllmEngineArgumentsParser } from "../base/server-engine/vllm-engine";
import { VllmNxdInferenceCompiledModel } from "./vllm-nxd-inference-compiler";

export interface VllmNxdInferenceImageOptions {
  readonly vllmGitBranch?: string;
  readonly vllmGitCommitHash?: string;
}
/**
 * Base class for VllmNxdInferenceImage.
 */
export abstract class VllmNxdInferenceEcsImageBase
  implements INeuronxContainerImage
{
  /**
   * The container image.
   */
  abstract readonly image: ecs.ContainerImage;
  /**
   * The neuronx SDK version.
   */
  readonly neuronSdkVersion: string;
  constructor(neuronxImage: IVllmInferenceNeuronxImage) {
    this.neuronSdkVersion = neuronxImage.neuronSdkVersion;
  }
}

/**
 * Inference ECS container image for vLLM on NxD Inference.
 * This image uses the official AWS Neuron Deep Learning Containers which come with vLLM pre-installed.
 *
 * @example new VllmNxdInferenceEcsImage(VllmInferenceNeuronxImage.LATEST)
 */
export class VllmNxdInferenceEcsImage extends VllmNxdInferenceEcsImageBase {
  readonly image: ecs.ContainerImage;

  /**
   * Create a VllmNxdInferenceImage from a custom neuronx image.
   * This will build a container image using a Dockerfile that installs vLLM from source.
   *
   * @example
   * new VllmNxdInferenceEcsImage(VllmInferenceNeuronxImage.LATEST)
   */
  constructor(vllmInferenceNeuronxImage?: IVllmInferenceNeuronxImage) {
    vllmInferenceNeuronxImage ??= VllmInferenceNeuronxImage.LATEST;
    super(vllmInferenceNeuronxImage);
    this.image = ecs.ContainerImage.fromRegistry(
      `${vllmInferenceNeuronxImage.imageName}:${vllmInferenceNeuronxImage.imageTag}`,
    );
  }
}

/**
 * Task definition for VllmNxdInference.
 */
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
  readonly image?: VllmNxdInferenceEcsImageBase;
  /**
   * The environment variables to pass to the container.
   * This is only applicable when using container runtime.
   *
   * @default - No environment variables.
   */
  readonly environment?: {
    [key: string]: string;
  };
}

/**
 * Task definition for VllmNxdInference.
 */
export class VllmNxdInferenceTaskDefinition extends NeuronxTaskDefinition {
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
    const image = props.image ?? new VllmNxdInferenceEcsImage();
    const port = props.compiledModel.vllmArgs.port ?? 8000;
    const vllmCliArgs = VllmEngineArgumentsParser.cli(
      props.compiledModel.vllmArgs,
    );
    // Prepare environment variables
    const environment: Record<string, string> = {
      ...props.environment,
      VLLM_NEURON_FRAMEWORK: "neuronx-distributed-inference",
      NEURON_COMPILED_ARTIFACTS: "neuron-compiled-artifacts",
      NEURON_RT_NUM_CORES: tensorParallelSize.toString(),
      XLA_HANDLE_SPECIAL_SCALAR: "1",
      MODEL_NAME: props.compiledModel.modelName,
    };

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
      workingDirectory: `/opt/ml/model/${props.compiledModel.s3Prefix}`,
      entryPoint: ["vllm", "serve"],
      command: vllmCliArgs,
      environment,
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
