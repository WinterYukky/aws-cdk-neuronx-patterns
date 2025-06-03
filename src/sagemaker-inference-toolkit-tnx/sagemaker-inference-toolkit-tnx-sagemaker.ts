import * as sagemaker from "@aws-cdk/aws-sagemaker-alpha";
import { Duration, Size, Token } from "aws-cdk-lib";
import { Grant, IGrantable } from "aws-cdk-lib/aws-iam";
import { IBucket } from "aws-cdk-lib/aws-s3";
import {
  BucketDeployment,
  ISource,
  Source,
} from "aws-cdk-lib/aws-s3-deployment";
import { CfnEndpointConfig, CfnModel } from "aws-cdk-lib/aws-sagemaker";
import { Construct, IDependable } from "constructs";
import { join } from "path";
import {
  calcMemoryFootprint,
  calcTensorParallel,
  DataTypeBits,
  INeuronxInstanceType,
  inferMemoryFootprintFromParameters,
  ModelConfig,
  NeuronxInstanceType,
  OptLevel,
  Parameters,
  QuantDtype,
} from "../base/neuronx";
import {
  SageMakerInferenceToolkitTnxCompileOptions,
  SageMakerInferenceToolkitTnxCompiler,
} from "./sagemaker-inference-toolkit-tnx-compiler";

/**
 * Precompiled model options.
 */
export interface CompiledModelOptions {
  /**
   * Neuronx compile options.
   * @default - Each properties are set default.
   */
  readonly compileOptions?: SageMakerInferenceToolkitTnxCompileOptions;
  /**
   * Code used for inference
   * @default - using the predefined code
   */
  readonly code?: ISource;
  /**
   * Model ID or saved path
   * @default "./model"
   */
  readonly modelIdOrPath?: string;
  /**
   * The path where compiled artifacts (i.e. xxx.neff) are stored
   * @default "./compiled"
   */
  readonly compiledArtifactPath?: string;
}

export interface BucketCompiledModelOptions extends CompiledModelOptions {
  /**
   * The number of parameters of model.
   */
  readonly parameters: Parameters;
  readonly config?: ModelConfig;
}

/**
 * @deprecated
 */
export class SageMakerInferenceToolkitTnxSageMakerInferenceModelData {
  static fromBucket(
    bucket: IBucket,
    prefix: string,
    options: BucketCompiledModelOptions,
  ) {
    const nPositions = options.compileOptions?.nPositions ?? 4096;
    const quantDtype = options.compileOptions?.quantDtype;
    const optLevel = OptLevel.BEST_BALANCE;
    const batchSize = options.compileOptions?.batchSize ?? 1;
    const memoryFootprint = options.config
      ? calcMemoryFootprint(
          options.config.embeddingDimension,
          options.config.layers,
          DataTypeBits.BF16_OR_FP16,
          nPositions,
          batchSize,
        )
      : inferMemoryFootprintFromParameters(
          options.parameters,
          nPositions,
          batchSize,
        );
    const neuronxInstanceTypes = [
      NeuronxInstanceType.INF2_8XLARGE,
      NeuronxInstanceType.INF2_24XLARGE,
      NeuronxInstanceType.INF2_48XLARGE,
    ];
    const availableInstancePatterns = neuronxInstanceTypes
      .flatMap((neuronxInstanceType) =>
        calcTensorParallel(
          neuronxInstanceType,
          memoryFootprint,
          options.config?.attentionHeads,
        ).map((v) => ({
          neuronxInstanceType,
          ...v,
        })),
      )
      .filter(
        (pattern) =>
          !options.compileOptions?.tpDegree ||
          pattern.tp === options.compileOptions.tpDegree,
      );
    if (availableInstancePatterns.length === 0) {
      throw new Error(
        `No available instance type. You can use tpDegree are ${availableInstancePatterns.map((p) => p.tp).join(", ")}.`,
      );
    }
    const tpDegree =
      options.compileOptions?.tpDegree ?? availableInstancePatterns[0].tp;
    return new SageMakerInferenceToolkitTnxSageMakerInferenceModelData({
      bucket,
      compiledArtifactS3Prefix: prefix,
      nPositions,
      quantDtype,
      optLevel,
      tpDegree,
      code: options.code,
      modelIdOrPath: options.modelIdOrPath,
      parameters: options.parameters,
    });
  }
  static fromNeuronxCompiler(
    compiler: SageMakerInferenceToolkitTnxCompiler,
    code?: ISource,
  ) {
    const compiledModel = compiler.compile();
    return new SageMakerInferenceToolkitTnxSageMakerInferenceModelData({
      ...compiledModel,
      optLevel: compiledModel.optLevel ?? OptLevel.BEST_BALANCE,
      compiledArtifactS3Prefix: compiledModel.s3Prefix,
      parameters: compiler.model.options.parameters,
      code,
      dependables: [compiler.node.defaultChild!],
    });
  }
  readonly bucket: IBucket;
  readonly compiledArtifactS3Prefix: string;
  readonly code: ISource;
  readonly tpDegree: number;
  readonly quantDtype?: QuantDtype;
  readonly nPositions: number;
  readonly optLevel: OptLevel;
  readonly modelIdOrPath?: string;
  readonly compiledArtifactPath?: string;
  readonly parameters: Parameters;
  private readonly dependables: IDependable[];

  private constructor(options: {
    readonly bucket: IBucket;
    readonly compiledArtifactS3Prefix: string;
    readonly tpDegree: number;
    readonly quantDtype?: QuantDtype;
    readonly nPositions: number;
    readonly optLevel: OptLevel;
    readonly code?: ISource;
    readonly modelIdOrPath?: string;
    readonly compiledArtifactPath?: string;
    readonly parameters: Parameters;
    readonly dependables?: IDependable[];
  }) {
    this.bucket = options.bucket;
    this.compiledArtifactS3Prefix = options.compiledArtifactS3Prefix;
    this.code =
      options.code ??
      Source.asset(
        join(
          __dirname,
          "../../scripts/inference/sagemaker-inference-toolkit-tnx/code",
        ),
      );
    this.tpDegree = options.tpDegree;
    this.quantDtype = options.quantDtype;
    this.nPositions = options.nPositions;
    this.optLevel = options.optLevel;
    this.modelIdOrPath = options.modelIdOrPath;
    this.compiledArtifactPath = options.compiledArtifactPath;
    this.parameters = options.parameters;
    this.dependables = options.dependables ?? [];
  }

  bind(scope: Construct, model: sagemaker.IModel) {
    const deploy = new BucketDeployment(scope, "CodeDeployment", {
      destinationBucket: this.bucket,
      sources: [this.code],
      destinationKeyPrefix: join(this.compiledArtifactS3Prefix, "code"),
    });
    deploy.node.addDependency(...this.dependables);
    model.node.addDependency(deploy);
  }
}

export interface SageMakerInferenceToolkitTnxSageMakerRealtimeInferenceEndpointProps {
  /**
   * Model data for SageMaker inference.
   * The model data requires at least compiled artifacts.
   */
  readonly modelData: SageMakerInferenceToolkitTnxSageMakerInferenceModelData;
  /**
   * An image of the container where the inference job is executed.
   */
  readonly image?: sagemaker.ContainerImage;
  /**
   * A map of environment variables to pass into the container.
   * @default - Only the predefined environment variables required to use Neuronx have been set.
   */
  readonly environment?: { [key: string]: string };
  /**
   * The instance type of compile worker instance.
   * @default - It is determined automatically according to the number of model parameters and compilation options.
   */
  readonly instanceType?: INeuronxInstanceType;
  /**
   * The size, of the ML storage volume attached to individual inference instance associated with the production variant.
   * Currently only Amazon EBS gp2 storage volumes are supported.
   * @see https://aws.amazon.com/jp/releasenotes/host-instance-storage-volumes-table
   * @default - 3 GB per billion parameter (Max 512 GB)
   */
  readonly volumeSize?: Size;
  /**
   * The timeout value, to download and extract the model that you want to host from Amazon S3
   * to the individual inference instance associated with this production variant.
   * @default - 60 seconds, when `volumeSize` larger than 30GB then 1GB x 15 seconds (max 60 minutes)
   */
  readonly modelDataDownloadTimeout?: Duration;
  /**
   * The timeout value, for your inference container to pass health check by SageMaker Hosting.
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests
   * @default - 60 seconds, when set the `modelDataDownloadTimeout` then use same value (max 60 minutes)
   */
  readonly containerStartupHealthCheckTimeout?: Duration;
}

/**
 * @deprecated
 */
export class SageMakerInferenceToolkitTnxSageMakerRealtimeInferenceEndpoint extends Construct {
  /**
   * The ARN of the endpoint.
   * @attribute
   */
  readonly endpointArn: string;
  /**
   * The name of the endpoint.
   * @attribute
   */
  readonly endpointName: string;
  private readonly endpoint: sagemaker.Endpoint;
  constructor(
    scope: Construct,
    id: string,
    props: SageMakerInferenceToolkitTnxSageMakerRealtimeInferenceEndpointProps,
  ) {
    super(scope, id);
    const image =
      props.image ??
      sagemaker.ContainerImage.fromAsset(
        join(
          __dirname,
          "../../scripts/inference/sagemaker-inference-toolkit-tnx",
        ),
      );
    const instanceType =
      props.instanceType ??
      this.selectInstanceTypeByTpDegree(props.modelData.tpDegree);
    const model = new sagemaker.Model(this, "Model", {
      containers: [
        {
          image,
          environment: {
            NEURON_RT_NUM_CORES: props.modelData.tpDegree.toString(),
            TS_DEFAULT_RESPONSE_TIMEOUT: (60 * 60).toString(),
            TS_DEFAULT_WORKERS_PER_MODEL: Math.floor(
              instanceType.acceleratorChips.neuronxCores /
                props.modelData.tpDegree,
            ).toString(),
            MODEL: props.modelData.modelIdOrPath ?? "./model",
            COMPILED_ARTIFACT:
              props.modelData.compiledArtifactPath ?? "./compiled",
            TP_DEGREE: props.modelData.tpDegree.toString(),
            N_POSITIONS: props.modelData.nPositions.toString(),
            OPT_LEVEL: props.modelData.optLevel.toString(),
            QUANT_DTYPE: props.modelData.quantDtype?.toString() ?? "",
            ...props.environment,
          },
        },
      ],
    });
    const cfnModel = model.node.findChild("Model") as CfnModel;
    cfnModel.addPropertyOverride(
      "PrimaryContainer.ModelDataSource.S3DataSource.S3Uri",
      props.modelData.bucket.s3UrlForObject(
        Token.isUnresolved(props.modelData.compiledArtifactS3Prefix) ||
          props.modelData.compiledArtifactS3Prefix.endsWith("/")
          ? props.modelData.compiledArtifactS3Prefix
          : `${props.modelData.compiledArtifactS3Prefix}/`,
      ),
    );
    cfnModel.addPropertyOverride(
      "PrimaryContainer.ModelDataSource.S3DataSource.S3DataTypeBits",
      "S3Prefix",
    );
    cfnModel.addPropertyOverride(
      "PrimaryContainer.ModelDataSource.S3DataSource.CompressionType",
      "None",
    );
    props.modelData.bucket.grantRead(model);
    props.modelData.bind(this, model);
    const endpointConfig = new sagemaker.EndpointConfig(
      this,
      "EndpointConfig",
      {
        instanceProductionVariants: [
          {
            model,
            variantName: "PrimaryVariant",
            instanceType: sagemaker.InstanceType.of(
              `ml.${instanceType.toString()}`,
            ),
          },
        ],
      },
    );
    const cfnEndpointConfig = endpointConfig.node.findChild(
      "EndpointConfig",
    ) as CfnEndpointConfig;
    const volumeSize =
      props.volumeSize ??
      Size.gibibytes(
        Math.ceil(
          props.modelData.parameters.toBillion() * 3 > 512
            ? 512
            : props.modelData.parameters.toBillion() * 3,
        ),
      );
    cfnEndpointConfig.addPropertyOverride(
      "ProductionVariants.0.VolumeSizeInGB",
      instanceType.toString().startsWith("ml.trn1")
        ? undefined
        : volumeSize.toGibibytes(),
    );
    const modelDataDownloadTimeout =
      props.modelDataDownloadTimeout ??
      inferenceModelDataDownloadTime(volumeSize);
    cfnEndpointConfig.addPropertyOverride(
      "ProductionVariants.0.ModelDataDownloadTimeoutInSeconds",
      modelDataDownloadTimeout.toSeconds(),
    );
    cfnEndpointConfig.addPropertyOverride(
      "ProductionVariants.0.ContainerStartupHealthCheckTimeoutInSeconds",
      (
        props.containerStartupHealthCheckTimeout ?? modelDataDownloadTimeout
      ).toSeconds(),
    );
    const endpoint = new sagemaker.Endpoint(this, "Endpoint", {
      endpointConfig,
    });
    this.endpointArn = endpoint.endpointArn;
    this.endpointName = endpoint.endpointName;
    this.endpoint = endpoint;
  }
  grantInvoke(grantee: IGrantable): Grant {
    return this.endpoint.grantInvoke(grantee);
  }

  private selectInstanceTypeByTpDegree(tpDegree: number) {
    const instanceTypes = [
      NeuronxInstanceType.INF2_8XLARGE,
      NeuronxInstanceType.INF2_24XLARGE,
      NeuronxInstanceType.INF2_48XLARGE,
      NeuronxInstanceType.TRN1_32XLARGE,
    ];
    for (const instanceType of instanceTypes) {
      if (
        instanceType.supportedTensorParallelism.find((tp) => tp >= tpDegree)
      ) {
        return instanceType;
      }
    }
    throw new Error(
      "This model is too large, I can not support this model current version.",
    );
  }
}

function inferenceModelDataDownloadTime(volumeSize: Size) {
  const seconds = volumeSize.toGibibytes() * 15;
  return Duration.seconds(seconds < 3600 ? seconds : 3600);
}
