import { ContainerImageBuild } from "@cdklabs/deploy-time-build";
import { Size } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { join } from "path";
import {
  calcMemoryFootprint,
  calcTensorParallel,
  DataTypeBits,
  INeuronxImage,
  INeuronxInstanceType,
  inferMemoryFootprintFromParameters,
  Model,
  NeuronxInstanceType,
  OptLevel,
  PytorchTrainingNeuronxImage,
  QuantDtype,
} from "../base/neuronx";
import {
  INeuronxContainerImage,
  NeuronxCompiledModel,
  NeuronxCompiler,
} from "../base/neuronx-compiler";

/**
 * Compile options.
 */
export interface SageMakerInferenceToolkitTnxCompileOptions {
  /**
   * Number of tensor parallel groups.
   * @default - calc from parameters and quantDtype
   */
  readonly tpDegree?: number;
  /**
   * Maximum number of sequences per iteration.
   * @default 1
   */
  readonly batchSize?: number;
  /**
   * @default - No quant
   */
  readonly quantDtype?: QuantDtype;
  /**
   * @default 4096
   */
  readonly nPositions?: number;
  /**
   * @default OptLevel.BEST_BALANCE
   */
  readonly optLevel?: OptLevel;
}

/**
 * The model compiled by Neuronx compiler.
 */
export interface SageMakerInferenceToolkitTnxCompiledModel extends NeuronxCompiledModel {
  readonly quantDtype?: QuantDtype;
  readonly optLevel?: OptLevel;
  readonly tpDegree: number;
  readonly nPositions: number;
}

/**
 * Compile image for SageMakerInferenceToolkitTnxCompile.
 * @example
 * new SageMakerInferenceToolkitTnxCompileImage(scope, 'CompileImage', PytorchTrainingNeuronxImage.LATEST);
 */
export class SageMakerInferenceToolkitTnxCompileImage implements INeuronxContainerImage {
  readonly image: ContainerImage;
  readonly neuronSdkVersion: string;
  constructor(scope: Construct, id: string, neruonxImage: INeuronxImage) {
    const build = new ContainerImageBuild(scope, id, {
      directory: join(__dirname, "../../scripts/compile/sagemaker-inference-toolkit-tnx"),
      buildArgs: {
        IMAGE_NAME: neruonxImage.imageName,
        IMAGE_TAG: neruonxImage.imageTag,
      },
    });
    this.image = build.toEcsDockerImageCode();
    this.neuronSdkVersion = neruonxImage.neuronSdkVersion;
  }
}

/**
 * Props of NeuronxCompile.
 */
export interface SageMakerInferenceToolkitTnxCompilerProps {
  /**
   * VPC in which this will launch compile worker instance.
   */
  readonly vpc: ec2.IVpc;
  /**
   * The bucket to upload compiled artifacts.
   */
  readonly bucket: IBucket;
  /**
   * The model to be compiled.
   */
  readonly model: Model;
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
   * Compile runtime image.
   * @default - latest image
   */
  readonly image?: SageMakerInferenceToolkitTnxCompileImage;
  /**
   * Neuronx compile options.
   * @default - Each properties are set default.
   */
  readonly compileOptions?: SageMakerInferenceToolkitTnxCompileOptions;
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
  readonly vpcSubnets?: ec2.SubnetSelection;
}

/**
 * Neuronx compile construct. Compile the model to work with Inferentia2 and Trainium1 and upload it to an S3 bucket.
 */
export class SageMakerInferenceToolkitTnxCompiler extends Construct {
  readonly quantDtype?: QuantDtype;
  readonly optLevel?: OptLevel;
  readonly tpDegree: number;
  readonly nPositions: number;
  model: Model;
  private readonly compiler: NeuronxCompiler;
  constructor(
    scope: Construct,
    id: string,
    props: SageMakerInferenceToolkitTnxCompilerProps,
  ) {
    super(scope, id);
    const optLevel = props.compileOptions?.optLevel ?? OptLevel.BEST_BALANCE;
    const batchSize = props.compileOptions?.batchSize ?? 1;
    const nPositions = props.compileOptions?.nPositions ?? 4096;
    const quantDtype = props.compileOptions?.quantDtype;
    const memoryFootprint = props.model.options.config
      ? calcMemoryFootprint(
          props.model.options.config.embeddingDimension,
          props.model.options.config.layers,
          DataTypeBits.BF16_OR_FP16,
          nPositions,
          batchSize,
        )
      : inferMemoryFootprintFromParameters(
          props.model.options.parameters,
          nPositions,
          batchSize,
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
        (pattern) =>
          !props.compileOptions?.tpDegree ||
          pattern.tp === props.compileOptions.tpDegree,
      );
    if (availableInstancePatterns.length === 0) {
      throw new Error(
        `No available instance type. You can use tpDegree are ${availableInstancePatterns.map((p) => p.tp).join(", ")}.`,
      );
    }
    const tpDegree = availableInstancePatterns[0].tp;
    const image =
      props.image ??
      new SageMakerInferenceToolkitTnxCompileImage(
        this,
        "CompileImage",
        PytorchTrainingNeuronxImage.LATEST,
      );
    let compiledArtifactPathPrefix = `${props.model.modelId}/neuronx-${image.neuronSdkVersion}/tp${tpDegree}-np${nPositions}-opt${optLevel}`;
    if (quantDtype!!) {
      compiledArtifactPathPrefix = `${compiledArtifactPathPrefix}-quant${quantDtype}`;
    }
    const compiler = new NeuronxCompiler(this, "Resource", {
      ...props,
      neuronxInstanceType: availableInstancePatterns[0].neuronxInstanceType,
      artifactS3Prefix: "test",
      image: image,
      environment: {
        MODEL_ID: props.model.modelId,
        TP_DEGREE: tpDegree.toString(),
        N_POSITIONS: nPositions.toString(),
        OPT_LEVEL: optLevel.toString(),
        QUANT_DTYPE: quantDtype?.toString() ?? "",
        ARTIFACT_S3_URL: props.bucket.s3UrlForObject(
          compiledArtifactPathPrefix,
        ),
      },
    });
    this.tpDegree = tpDegree;
    this.nPositions = nPositions;
    this.quantDtype = quantDtype;
    this.optLevel = optLevel;
    this.model = props.model;
    this.compiler = compiler;
  }
  compile(): SageMakerInferenceToolkitTnxCompiledModel {
    return {
      ...this.compiler.compile(),
      tpDegree: this.tpDegree,
      optLevel: this.optLevel,
      nPositions: this.nPositions,
      quantDtype: this.quantDtype,
    };
  }
}
