import { Duration } from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
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
    const image =
      props.image ??
      new VllmNxdInferenceImage(PytorchTrainingNeuronxImage.LATEST);
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
      MODEL_NAME: props.compiledModel.modelName,
      COMPILED_ARTIFACTS_S3_URI: props.compiledModel.s3Uri,
    };

    // Handle secrets for HF Token if available
    const secrets: Record<string, ecs.Secret> = {};
    if (props.compiledModel.vllmArgs.hfToken) {
      secrets["HF_TOKEN"] = ecs.Secret.fromSecretsManager(props.compiledModel.vllmArgs.hfToken);
    }

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
      environment,
      secrets,
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
