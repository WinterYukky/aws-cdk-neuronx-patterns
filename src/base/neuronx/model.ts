import { Size, Token } from "aws-cdk-lib";
import { IBucket } from "aws-cdk-lib/aws-s3";

export enum DataTypeBits {
  BF16_OR_FP16 = 16,
  FP8_OR_INT8 = 8,
}

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
 * Represents the amount of parameters.
 */
export class Parameters {
  /**
   * Create a Parameters representing an amount million.
   * @param parameters number of parameters millionX
   * @returns parameters
   */
  static million(parameters: number) {
    return new Parameters(parameters * 1000000);
  }
  /**
   * Create a Parameters representing an amount billion.
   * @param parameters number of parameters billionX
   * @returns parameters
   */
  static billion(parameters: number) {
    return new Parameters(parameters * 1000000000);
  }
  private constructor(
    /**
     * number of paremters.
     */
    private readonly parameters: number,
  ) {}
  /**
   * Return this number of parameters as million.
   * @returns This number of parameters as million.
   */
  toMillion() {
    return this.parameters / 1000000;
  }
  /**
   * Return this number of parameters as billion.
   * @returns This number of parameters as billion.
   */
  toBillion() {
    return this.parameters / 1000000000;
  }
  weightSize() {
    return Size.gibibytes(this.toBillion() * 2.5);
  }
}

export interface ModelConfig {
  readonly layers: number;
  readonly embeddingDimension: number;
  readonly attentionHeads: number;
}

/**
 * Compile target model basic infromation
 */
export interface ModelOptions {
  readonly parameters: Parameters;
  readonly config?: ModelConfig;
  readonly modelName?: string;
}

/**
 * Compile target model.
 */
export class Model {
  /**
   * model informations at HuggingFace
   * @param modelId model id on the HuggingFace
   * @param options model basic information
   * @returns model instance
   */
  static fromHuggingFace(modelId: string, options?: ModelOptions) {
    const parameters = options?.parameters ?? Model.maybeParams(modelId);
    if (!parameters) {
      throw new Error(
        "The number of parameters cannot be inferred from the model ID. Set optional parameters.",
      );
    }
    return new Model(modelId, options?.modelName ?? modelId, {
      ...options,
      parameters,
    });
  }
  /**
   * model informations at S3 Bucket
   * @param bucket Model stored S3 Bucket
   * @param prefix Model stored objects prefix
   * @param options model basic information
   * @returns model instance
   */
  static fromBucket(bucket: IBucket, prefix: string, options?: ModelOptions) {
    if (Token.isUnresolved(prefix) && !options?.modelName) {
      throw new Error("ModelName is required when prefix is unresolved");
    }
    const modelName = options?.modelName ?? prefix.split("/").slice(-1)[0];
    const parameters = options?.parameters ?? Model.maybeParams(modelName);
    if (!parameters) {
      throw new Error(
        "The number of parameters cannot be inferred from the model ID. Set optional parameters.",
      );
    }
    return new Model(
      bucket.s3UrlForObject(prefix),
      modelName,
      { ...options, parameters },
      bucket,
      prefix,
    );
  }
  private static maybeParams(source: string) {
    try {
      const billion = source.match(/-(\d+)[bB]/);
      if (billion?.[1]) {
        return Parameters.billion(parseInt(billion[1]));
      }
      const million = source.match(/-(\d+)[mM]/);
      if (million?.[1]) {
        return Parameters.million(parseInt(million[1]));
      }
    } catch {
      // NOP
    }
    return undefined;
  }
  private constructor(
    readonly modelId: string,
    readonly modelName: string,
    readonly options: ModelOptions,
    readonly bucket?: IBucket,
    readonly prefix?: string,
  ) {}
}
