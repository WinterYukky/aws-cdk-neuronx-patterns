import { IBucket } from "aws-cdk-lib/aws-s3";

/**
 * Quant data type.
 */
export enum QuantDtype {
  /**
   * int8 weight storage.
   */
  S8 = "s8",
}

/**
 * Optimization level.
 */
export enum OptLevel {
  /**
   * enables the core performance optimizations in the compiler, while also minimizing compile time.
   */
  MINIMIZING_COMPILE_TIME = 1,
  /**
   * provides the best balance between model performance and compile time.
   */
  BEST_BALANCE = 2,
  /**
   * may provide additional model execution performance but may incur longer compile times and higher host memory usage during model compilation.
   */
  MODEL_EXECUTION_PERFORMANCE = 3,
}

/**
 * Compile options.
 */
export interface CompileOptions {
  /**
   * @default - calc from parameters and quantDtype
   */
  readonly tpDegree?: number;
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
 * Represents the amount of parameters.
 */
export class Parameters {
  /**
   * Create a Parameters representing an amount bilion.
   * @param parameters number of parameters bilionX
   * @returns parameters
   */
  static billion(parameters: number) {
    return new Parameters(parameters);
  }
  private constructor(private readonly billion: number) {}
  /**
   * Return this number of parameters as bilion.
   * @returns This number of parameters as bilion.
   */
  toBilion() {
    return this.billion;
  }
}

/**
 * Compile target model basic infromation
 */
export interface ModelOptions {
  readonly parameters: Parameters;
}
/**
 * Compile target model.
 */
export class Model {
  /**
   * model informations at HuggingFace
   * @param modelId model id on the HuggingFace
   * @param options model basic infromation
   * @returns model instance
   */
  static fromHuggingFace(modelId: string, options: ModelOptions) {
    return new Model(modelId, options);
  }
  /**
   * model informations at S3 Bucket
   * @param bucket Model stored S3 Bucket
   * @param prefix Model stored objects prefix
   * @param options model basic infromation
   * @returns model instance
   */
  static fromBucket(bucket: IBucket, prefix: string, options: ModelOptions) {
    return new Model(bucket.s3UrlForObject(prefix), options, bucket, prefix);
  }
  private constructor(
    readonly modelId: string,
    readonly options: ModelOptions,
    readonly bucket?: IBucket,
    readonly prefix?: string,
  ) {}
}
