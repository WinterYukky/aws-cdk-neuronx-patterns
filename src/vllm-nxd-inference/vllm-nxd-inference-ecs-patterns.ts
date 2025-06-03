import {
  Duration,
  RemovalPolicy,
  ResourceEnvironment,
  Size,
  Stack,
} from "aws-cdk-lib";
import { IVpc, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import {
  ApplicationListener,
  ApplicationLoadBalancer,
  ApplicationTargetGroup,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { IRole } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { join } from "path";
import {
  ApplicationLoadBalancedNeuronxService,
  ApplicationLoadBalancedNeuronxServiceProps,
  INeuronxTaskDefinition,
  NeuronxTaskDefinition,
} from "../base/aws-ecs-patterns";
import {
  INeuronxImage,
  INeuronxInstanceType,
  PytorchTrainingNeuronxImage,
} from "../base/neuronx";
import {
  INeuronxContainerImage,
  NeuronxCompiledModel,
} from "../base/neuronx-compiler";
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
    if (this.sdkVersion >= "2.23.0") {
      return "neuron-2.23-vllm-v0.7.2";
    }
    if (this.sdkVersion >= "2.22.0") {
      return "neuron-2.22-vllm-v0.7.2";
    }
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
  extends ecs.Ec2TaskDefinitionProps {
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
   * VPC in which this will launch compile worker and container instance.
   */
  readonly vpc: IVpc;
  /**
   * The instance type of compile worker instance.
   */
  readonly neuronxInstanceType?: INeuronxInstanceType;
  /**
   * The root volume of worker instance.
   * @default - N bilion parameters * 5GiB EBS
   */
  readonly volumeSize?: Size;
  /**
   * The VPC Subnets this Compute Environment will launch instances in.
   *
   * @default - new subnets will be created
   */
  readonly vpcSubnets?: SubnetSelection;
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
export class VllmNxdInferenceTaskDefinition
  extends Construct
  implements INeuronxTaskDefinition
{
  /**
   * The compiled model.
   */
  readonly compiledModel: NeuronxCompiledModel;
  readonly taskDefinitionArn: string;
  readonly executionRole?: IRole | undefined;
  readonly compatibility: ecs.Compatibility;
  readonly isEc2Compatible: boolean;
  readonly isFargateCompatible: boolean;
  readonly isExternalCompatible: boolean;
  readonly networkMode: ecs.NetworkMode;
  readonly taskRole: IRole;
  readonly stack: Stack;
  readonly env: ResourceEnvironment;
  readonly neuronxInstanceType: INeuronxInstanceType;
  readonly tensorParallelSize: number;
  readonly tasksPerInstance: number;
  private readonly resource: NeuronxTaskDefinition;
  constructor(
    scope: Construct,
    id: string,
    props: VllmNxdInferenceTaskDefinitionProps,
  ) {
    const neuronxInstanceType =
      props.neuronxInstanceType ?? props.compiledModel.compileTimeInstanceType;
    const tensorParallelSize =
      props.compiledModel.vllmArgs.tensorParallelSize ?? 1;
    super(scope, id);
    const resource = new NeuronxTaskDefinition(this, "Resource", {
      ...props,
      neuronxInstanceType,
      tensorParallelSize,
    });
    const image =
      props.image ??
      new VllmNxdInferenceImage(PytorchTrainingNeuronxImage.LATEST);
    this.compiledModel = props.compiledModel;
    const port = props.compiledModel.vllmArgs.port ?? 8000;
    const vllmCliArgs = VllmEngineArgumentsParser.cli(
      props.compiledModel.vllmArgs,
    );
    resource.addContainerWithDefault("vLLM", {
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
    this.taskDefinitionArn = resource.taskDefinitionArn;
    this.executionRole = resource.executionRole;
    this.compatibility = resource.compatibility;
    this.isEc2Compatible = resource.isEc2Compatible;
    this.isFargateCompatible = resource.isFargateCompatible;
    this.isExternalCompatible = resource.isExternalCompatible;
    this.networkMode = resource.networkMode;
    this.taskRole = resource.taskRole;
    this.stack = resource.stack;
    this.env = resource.env;
    this.neuronxInstanceType = resource.neuronxInstanceType;
    this.tensorParallelSize = resource.tensorParallelSize;
    this.tasksPerInstance = resource.tasksPerInstance;
    this.resource = resource;
  }
  applyRemovalPolicy(policy: RemovalPolicy): void {
    return this.resource.applyRemovalPolicy(policy);
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
