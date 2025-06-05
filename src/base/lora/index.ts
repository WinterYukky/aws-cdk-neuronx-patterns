import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3assets from "aws-cdk-lib/aws-s3-assets";
import { Construct } from "constructs";

/**
 * Interface for LoRA adapter sources
 */
export interface ILoraAdapterSource {
  /**
   * Grant read access to this LoRA adapter source
   * @param grantee The IAM principal to grant access to
   */
  grantRead(grantee: iam.IGrantable): iam.Grant;
  
  /**
   * Get the S3 URI for this LoRA adapter source
   * @returns S3 URI string
   */
  getS3Uri(): string;
}

/**
 * LoRA adapter source from a local directory
 */
export class LocalLoraAdapterSource implements ILoraAdapterSource {
  private readonly asset: s3assets.Asset;
  
  /**
   * Create a LoRA adapter source from a local directory
   * @param scope The construct scope
   * @param id The construct ID
   * @param path Path to the local LoRA adapter directory or file
   * @param options Optional asset options
   */
  constructor(scope: Construct, id: string, path: string, options?: s3assets.AssetOptions) {
    this.asset = new s3assets.Asset(scope, id, { path, ...options });
  }
  
  public grantRead(grantee: iam.IGrantable): iam.Grant {
    this.asset.grantRead(grantee);
    return iam.Grant.drop(this, 'Read');
  }
  
  public getS3Uri(): string {
    return this.asset.s3ObjectUrl;
  }
}

/**
 * LoRA adapter source from an S3 bucket
 */
export class S3LoraAdapterSource implements ILoraAdapterSource {
  /**
   * Create a LoRA adapter source from an S3 object
   * @param bucket The S3 bucket containing the LoRA adapter
   * @param key The S3 key to the LoRA adapter
   */
  constructor(private readonly bucket: s3.IBucket, private readonly key: string) {}
  
  public grantRead(grantee: iam.IGrantable): iam.Grant {
    return this.bucket.grantRead(grantee, this.key);
  }
  
  public getS3Uri(): string {
    return `s3://${this.bucket.bucketName}/${this.key}`;
  }
}

/**
 * Properties for VllmLoraModule
 */
export interface VllmLoraModuleProps {
  /**
   * Name of the LoRA adapter
   * @default Construct ID
   */
  readonly loraName?: string;
  
  /**
   * Source of the LoRA adapter
   */
  readonly source: ILoraAdapterSource;
  
  /**
   * Base model name for this adapter
   * @default undefined
   */
  readonly baseModelName?: string;
}

/**
 * Represents a vLLM LoRA module
 */
export class VllmLoraModule extends Construct {
  /**
   * Name of the LoRA adapter
   */
  public readonly loraName: string;
  
  /**
   * Source of the LoRA adapter
   */
  public readonly source: ILoraAdapterSource;
  
  /**
   * Base model name (optional)
   */
  public readonly baseModelName?: string;
  
  /**
   * Create a vLLM LoRA module
   * @param scope The construct scope
   * @param id The construct ID
   * @param props The module properties
   */
  constructor(scope: Construct, id: string, props: VllmLoraModuleProps) {
    super(scope, id);
    this.loraName = props.loraName ?? id;
    this.source = props.source;
    this.baseModelName = props.baseModelName;
  }
  
  /**
   * Convert to JSON object in the format expected by vLLM
   */
  public toJSON(): { [key: string]: any } {
    return {
      name: this.loraName,
      path: this.source.getS3Uri(),
      base_model_name: this.baseModelName
    };
  }
  
  /**
   * Convert to string representation
   */
  public toString(): string {
    return JSON.stringify(this);
  }
}