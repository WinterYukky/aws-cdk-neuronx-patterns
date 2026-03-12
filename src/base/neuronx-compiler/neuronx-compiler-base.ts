import {
  CfnWaitCondition,
  CfnWaitConditionHandle,
  CustomResource,
  Duration,
  Fn,
  Size,
} from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import { IVpc, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { Grant, IRole } from "aws-cdk-lib/aws-iam";
import {
  Code,
  Function,
  Runtime,
  SingletonFunction,
} from "aws-cdk-lib/aws-lambda";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { join } from "path";
import { INeuronxInstanceType, Model } from "../neuronx";

/**
 * Compile runtime.
 */
export interface INeuronxContainerImage {
  /**
   * An image of the container where the compile job is executed.
   */
  readonly image: ContainerImage;
  /**
   * Neuronx version included in container image.
   */
  readonly neuronSdkVersion: string;
}

/**
 * The model compiled by Neuronx compiler.
 */
export interface NeuronxCompiledModel {
  /**
   * The recommended Neuron instance type for running inference with this compiled model.
   */
  readonly recommendedInstanceType: INeuronxInstanceType;
  /**
   * The bucket to upload compiled artifacts.
   */
  readonly bucket: IBucket;
  /**
   * S3 URL that compiled artifact uploaded.
   */
  readonly s3Uri: string;
  /**
   * S3 prefix that compiled artifact uploaded.
   */
  readonly s3Prefix: string;
  /**
   * The model name.
   */
  readonly modelName: string;
  /**
   * The weight size of the model.
   */
  readonly weightSize: Size;
}

/**
 * Interface for Neuronx compilers.
 */
export interface INeuronxCompiler {
  compile(): NeuronxCompiledModel;
}

/**
 * Common props for NeuronxCompilerBase.
 */
export interface NeuronxCompilerBaseProps {
  /**
   * VPC in which this will launch compile worker instance.
   */
  readonly vpc: IVpc;
  /**
   * The bucket to upload compiled artifacts.
   */
  readonly bucket: IBucket;
  /**
   * Secrets to pass to the container.
   */
  readonly secrets?: { [key: string]: batch.Secret };
  /**
   * S3 Prefix that compiled artifact uploaded.
   * This property is not depends on compile job finish.
   */
  readonly artifactS3Prefix: string;
  /**
   * The instance type of compile worker instance.
   */
  readonly neuronxInstanceType: INeuronxInstanceType;
  /**
   * The model to be compiled.
   */
  readonly model: Model;
  /**
   * An image of the container where the compile job is executed.
   */
  readonly image: INeuronxContainerImage;
  /**
   * The command to run in the container.
   */
  readonly command?: string[];
  /**
   * The root volume of worker instance.
   * @default - N billion parameters * 5GiB EBS
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
}

/**
 * Result of creating a compute environment.
 */
export interface ComputeEnvironmentResult {
  /**
   * The compute environment.
   */
  readonly computeEnvironment: batch.IComputeEnvironment;
  /**
   * The instance role associated with the compute environment.
   */
  readonly instanceRole: IRole;
}

/**
 * Abstract base class for Neuronx compilers.
 * Provides the common orchestration logic (Lambda, CustomResource, WaitCondition)
 * while subclasses define how to create the Batch compute environment and job definition.
 */
export abstract class NeuronxCompilerBase
  extends Construct
  implements INeuronxCompiler
{
  private compiledModel?: NeuronxCompiledModel;
  private readonly entrypoint: SingletonFunction;
  protected readonly artifactS3Prefix: string;
  protected readonly weightSize: Size;
  protected readonly neuronxInstanceType: INeuronxInstanceType;
  protected readonly model: Model;
  protected readonly bucket: IBucket;

  constructor(scope: Construct, id: string, props: NeuronxCompilerBaseProps) {
    super(scope, id);

    this.model = props.model;
    this.bucket = props.bucket;
    this.artifactS3Prefix = props.artifactS3Prefix;
    this.weightSize = Size.gibibytes(
      props.model.options.parameters.toBillion() * 2.5,
    );
    this.neuronxInstanceType = props.neuronxInstanceType;

    const { computeEnvironment, instanceRole } =
      this.createComputeEnvironment(props);
    const jobDefinition = this.createJobDefinition(props);
    const jobQueue = this.createJobQueue(computeEnvironment);

    props.model.bucket?.grantRead(instanceRole);
    props.bucket.grantReadWrite(instanceRole);

    const jobSubmitFunction = new SingletonFunction(this, "JobSubmitFunction", {
      code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
      handler: "index.onEvent",
      runtime: Runtime.NODEJS_LATEST,
      uuid: "1361f469-5c92-4c46-9e11-5d1dbf925bac",
      environment: {
        JOB_DEFINITION_ARN: jobDefinition.jobDefinitionArn,
        JOB_QUEUE_ARN: jobQueue.jobQueueArn,
      },
    });
    Grant.addToPrincipal({
      resourceArns: [jobDefinition.jobDefinitionArn, jobQueue.jobQueueArn],
      grantee: jobSubmitFunction,
      actions: ["batch:SubmitJob"],
    });
    const jobMonitoringFunction = new SingletonFunction(
      this,
      "JobMonitoringFunction",
      {
        code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
        handler: "index.isComplete",
        runtime: Runtime.NODEJS_LATEST,
        uuid: "df16dba8-5f77-480c-a6ad-cfdf74c3de62",
        environment: {
          ARTIFACT_S3_PREFIX: props.artifactS3Prefix,
        },
      },
    );
    Grant.addToPrincipal({
      resourceArns: ["*"],
      grantee: jobMonitoringFunction,
      actions: ["batch:DescribeJobs"],
    });
    const provider = new Provider(this, "CompileJobProvider", {
      onEventHandler: jobSubmitFunction,
      isCompleteHandler: jobMonitoringFunction,
      queryInterval: Duration.minutes(1),
      totalTimeout: Duration.hours(12),
    });
    this.entrypoint = new SingletonFunction(this, "JobEntrypointFunction", {
      code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
      handler: "index.entrypoint",
      environment: {
        PROVIDER_ARN: provider.serviceToken,
      },
      timeout: Duration.minutes(15),
      runtime: Runtime.NODEJS_LATEST,
      uuid: "f6e66997-5042-4df1-8781-bd68b3ac5313",
    });
    Function.fromFunctionArn(
      this,
      "ProviderFunction",
      provider.serviceToken,
    ).grantInvoke(this.entrypoint);
  }

  /**
   * Create the Batch compute environment.
   * Subclasses must implement this to provide the appropriate compute environment.
   */
  protected abstract createComputeEnvironment(
    props: NeuronxCompilerBaseProps,
  ): ComputeEnvironmentResult;

  /**
   * Create the Batch job definition.
   * Subclasses must implement this to provide the appropriate job definition.
   */
  protected abstract createJobDefinition(
    props: NeuronxCompilerBaseProps,
  ): batch.IJobDefinition;

  private createJobQueue(
    computeEnvironment: batch.IComputeEnvironment,
  ): batch.JobQueue {
    return new batch.JobQueue(this, "JobQueue", {
      computeEnvironments: [
        {
          computeEnvironment,
          order: 1,
        },
      ],
      jobStateTimeLimitActions: [
        {
          state: batch.JobStateTimeLimitActionsState.RUNNABLE,
          reason: batch.JobStateTimeLimitActionsReason.JOB_RESOURCE_REQUIREMENT,
          maxTime: Duration.minutes(10),
          action: batch.JobStateTimeLimitActionsAction.CANCEL,
        },
      ],
    });
  }

  compile(): NeuronxCompiledModel {
    if (this.compiledModel) {
      return this.compiledModel;
    }
    const waitConditionHandle = new CfnWaitConditionHandle(
      this,
      `WaitConditionHandle${this.artifactS3Prefix}`,
    );
    const compileJob = new CustomResource(this, "NeuronxCompile", {
      serviceToken: this.entrypoint.functionArn,
      resourceType: "Custom::NeuronxCompile",
      properties: {
        waitConditionCallbackURL: waitConditionHandle.ref,
      },
    });
    const wait = new CfnWaitCondition(
      this,
      `WaitCondition${this.artifactS3Prefix}`,
      {
        count: 1,
        timeout: Duration.hours(12).toSeconds().toString(),
        handle: waitConditionHandle.ref,
      },
    );
    wait.node.addDependency(compileJob);
    const s3Prefix = Fn.select(3, Fn.split('"', wait.attrData.toString()));

    this.compiledModel = {
      modelName: this.model.modelName,
      recommendedInstanceType: this.neuronxInstanceType,
      bucket: this.bucket,
      s3Prefix,
      s3Uri: this.bucket.s3UrlForObject(s3Prefix),
      weightSize: this.weightSize,
    };
    return this.compiledModel;
  }
}
