import { Size } from "aws-cdk-lib";
import { IVpc, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { createHash } from "crypto";
import { join } from "path";
import * as batch from "aws-cdk-lib/aws-batch";
import {
  calcMemoryFootprint,
  calcTensorParallel,
  DataTypeBits,
  INeuronxImage,
  INeuronxInstanceType,
  inferMemoryFootprintFromParameters,
  Model,
  NeuronxInstanceType,
  PytorchTrainingNeuronxImage,
} from "../base/neuronx";
import {
  INeuronxContainerImage,
  NeuronxCompiledModel,
  NeuronxCompiler,
  Secret,
} from "../base/neuronx-compiler";
import {
  VllmEngineArguments,
  VllmEngineArgumentsParser,
} from "../base/server-engine/vllm-engine";
import { VllmNxdInferenceImageBase } from "./vllm-nxd-inference-ecs-patterns";

/**
 * Compile runtime container image for vLLM NxD Inference
 */
export class VllmNxdInferenceCompileImage extends VllmNxdInferenceImageBase {
  /**
   * The container image.
   */
  readonly image: ContainerImage;
  constructor(neruonxImage: INeuronxImage) {
    super(neruonxImage);
    this.image = ContainerImage.fromAsset(
      join(__dirname, "../../scripts/compile/vllm-nxd-inference"),
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
 * Props of VllmNxdInferenceCompiler.
 */
export interface VllmNxdInferenceCompileProps {
  /**
   * VPC in which this will launch compile worker instance.
   */
  readonly vpc: IVpc;
  /**
   * The bucket to upload compiled artifacts.
   */
  readonly bucket: IBucket;
  /**
   * The instance type of compile worker instance.
   */
  readonly neuronxInstanceType?: INeuronxInstanceType;
  /**
   * The model to be compiled.
   */
  readonly model: Model;
  /**
   * The root volume of worker instance.
   * @default - N bilion parameters * 5GiB EBS
   */
  readonly volumeSize?: Size;
  /**
   * Whether or not to use spot instances. Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time; your job will be given two minutes of notice before reclamation.
   *
   * @default false
   */
  readonly spot?: boolean;
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
  /**
   * The arguments to pass to the vllm engine.
   * @default - no specific values. use default values.
   */
  readonly vllmArgs?: VllmEngineArguments;
  /**
   * An image of the container where the compile job is executed.
   * @default - latest image
   */
  readonly image?: INeuronxContainerImage;
}

/**
 * The model compiled by Neuronx compiler.
 */
export interface VllmNxdInferenceCompiledModel extends NeuronxCompiledModel {
  /**
   * Passed to the vllm engine at compile time.
   */
  readonly vllmArgs: VllmEngineArguments;
}

/**
 * Neuronx compiler construct for vLLM on NxD Inference.
 * Compile the model to work with Neuronx instance and upload it to an S3 bucket.
 */
export class VllmNxdInferenceCompiler extends Construct {
  private readonly vllmArgs: VllmEngineArguments;
  private readonly compiler: NeuronxCompiler;
  constructor(
    scope: Construct,
    id: string,
    props: VllmNxdInferenceCompileProps,
  ) {
    super(scope, id);
    const maxModelLen = props.vllmArgs?.maxModelLen ?? 128;
    const maxNumSeqs = props.vllmArgs?.maxNumSeqs ?? 1;
    const memoryFootprint = props.model.options.config
      ? calcMemoryFootprint(
          props.model.options.config.embeddingDimension,
          props.model.options.config.layers,
          DataTypeBits.BF16_OR_FP16,
          maxModelLen,
          maxNumSeqs,
        )
      : inferMemoryFootprintFromParameters(
          props.model.options.parameters,
          maxModelLen,
          maxNumSeqs,
        );
    const neuronxInstanceTypes = props.neuronxInstanceType
      ? [props.neuronxInstanceType]
      : [
          NeuronxInstanceType.INF2_8XLARGE,
          NeuronxInstanceType.INF2_24XLARGE,
          NeuronxInstanceType.INF2_48XLARGE,
        ];
    const availableInstancePatterns = neuronxInstanceTypes
      .flatMap((neuronxInstanceType) =>
        calcTensorParallel(
          neuronxInstanceType,
          memoryFootprint,
          props.model.options.config?.attentionHeads,
        ).map((v) => ({
          neuronxInstanceType,
          ...v,
        })),
      )
      .filter(
        (instanceType) =>
          !props.vllmArgs?.tensorParallelSize ||
          instanceType.tp === props.vllmArgs.tensorParallelSize,
      );
    if (availableInstancePatterns.length === 0) {
      throw new Error(
        `No available instance type. You can use tensorParallelSize are ${availableInstancePatterns.map((p) => p.tp).join(", ")}.`,
      );
    }
    const tensorParallelSize = availableInstancePatterns[0].tp;
    const image =
      props.image ??
      new VllmNxdInferenceCompileImage(PytorchTrainingNeuronxImage.LATEST);
    const vllmArgs = {
      ...props.vllmArgs,
      model: props.model.modelId,
      servedModelName: [props.model.modelName],
      maxModelLen,
      maxNumSeqs,
      tensorParallelSize,
    } satisfies VllmEngineArguments;

    // change dirname every engine args patterns
    const hash = (str: string) =>
      createHash("sha256").update(str).digest("hex");
    const artifactS3Prefix = `sdk-${image.sdkVersion}/${hash(JSON.stringify(vllmArgs))}`;
    const vllmCliArgs = VllmEngineArgumentsParser.cli(vllmArgs);
    // Prepare environment and secrets
    const environment: Record<string, string> = {
      ...props.environment,
      VLLM_NEURON_FRAMEWORK: "neuronx-distributed-inference",
      NEURON_COMPILED_ARTIFACTS: "neuron-compiled-artifacts",
      NEURON_RT_NUM_CORES: tensorParallelSize.toString(),
      MODEL_ID: props.model.modelId,
      MODEL_NAME: props.model.modelName,
      COMPILED_ARTIFACTS_S3_URI:
        props.bucket.s3UrlForObject(artifactS3Prefix),
    };
    
    // Handle hfToken if provided
    const secrets: { [key: string]: Secret } = {};
    if (props.vllmArgs?.hfToken) {
      secrets["HF_TOKEN"] = batch.Secret.fromSecretsManager(props.vllmArgs.hfToken);
    }

    const compiler = new NeuronxCompiler(this, "Resource", {
      ...props,
      neuronxInstanceType: availableInstancePatterns[0].neuronxInstanceType,
      artifactS3Prefix,
      image: image,
      command: vllmCliArgs,
      environment,
      secrets: Object.keys(secrets).length > 0 ? secrets : undefined,
    });
    this.vllmArgs = vllmArgs;
    this.compiler = compiler;
  }
  /**
   * Compile the model and return the compiled model.
   * @returns The compiled model.
   */
  compile(): VllmNxdInferenceCompiledModel {
    return {
      ...this.compiler.compile(),
      vllmArgs: this.vllmArgs,
    } satisfies VllmNxdInferenceCompiledModel;
  }
}
