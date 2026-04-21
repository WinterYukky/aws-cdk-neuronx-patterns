import { Duration, Size } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import { IVpc, SubnetSelection } from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { IRole } from "aws-cdk-lib/aws-iam";
import { IBucket } from "aws-cdk-lib/aws-s3";
import {
  Choice,
  Condition,
  DefinitionBody,
  Pass,
  QueryLanguage,
  StateMachine,
  Wait,
  WaitTime,
} from "aws-cdk-lib/aws-stepfunctions";
import { CallAwsService } from "aws-cdk-lib/aws-stepfunctions-tasks";
import {
  CustomResourceFlow,
  LambdalessWaitCondition,
} from "aws-cdk-lambdaless-custom-resource";
import { Construct } from "constructs";
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
 * Provides the common orchestration logic (Step Functions, LambdalessWaitCondition)
 * while subclasses define how to create the Batch compute environment and job definition.
 */
export abstract class NeuronxCompilerBase
  extends Construct
  implements INeuronxCompiler
{
  private compiledModel?: NeuronxCompiledModel;
  private readonly stateMachine: StateMachine;
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

    this.stateMachine = this.createCompileWorkflow(
      jobDefinition,
      jobQueue,
      props.artifactS3Prefix,
    );
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

  private createCompileWorkflow(
    jobDefinition: batch.IJobDefinition,
    jobQueue: batch.JobQueue,
    artifactS3Prefix: string,
  ): StateMachine {
    const submitJob = CallAwsService.jsonata(this, "SubmitJob", {
      service: "batch",
      action: "submitJob",
      iamResources: [jobDefinition.jobDefinitionArn, jobQueue.jobQueueArn],
      iamAction: "batch:SubmitJob",
      parameters: {
        JobName:
          "{% 'compile-' & $now('[Y0001]-[M01]-[D01]-[H01]-[m01]-[s01]') %}",
        JobDefinition: jobDefinition.jobDefinitionArn,
        JobQueue: jobQueue.jobQueueArn,
      },
      assign: {
        JobId: "{% $states.result.JobId %}",
      },
    });

    const waitStep = Wait.jsonata(this, "WaitForJob", {
      time: WaitTime.duration(Duration.minutes(1)),
    });

    const describeJob = CallAwsService.jsonata(this, "DescribeJobs", {
      service: "batch",
      action: "describeJobs",
      iamResources: ["*"],
      iamAction: "batch:DescribeJobs",
      parameters: {
        Jobs: "{% [$JobId] %}",
      },
      assign: {
        JobStatus: "{% $states.result.Jobs[0].Status %}",
        StatusReason:
          "{% $exists($states.result.Jobs[0].StatusReason) ? $states.result.Jobs[0].StatusReason : '' %}",
      },
    });

    const jobSucceeded = Pass.jsonata(this, "JobSucceeded", {
      outputs: {
        Data: {
          s3Prefix: artifactS3Prefix,
        },
      },
    });

    const jobFailed = Pass.jsonata(this, "JobFailed", {
      outputs: {
        Status: "{% 'FAILED' %}",
        Reason: "{% 'CompileJobFailed: ' & $StatusReason %}",
      },
    });

    const checkJobStatus = Choice.jsonata(this, "CheckJobStatus")
      .when(Condition.jsonata("{% $JobStatus = 'SUCCEEDED' %}"), jobSucceeded)
      .when(Condition.jsonata("{% $JobStatus = 'FAILED' %}"), jobFailed)
      .otherwise(waitStep);

    waitStep.next(describeJob);
    describeJob.next(checkJobStatus);

    const compileChain = submitJob.next(waitStep);

    const flow = new CustomResourceFlow(this, "Flow", {
      onCreate: compileChain,
    });

    return new StateMachine(this, "CompileStateMachine", {
      queryLanguage: QueryLanguage.JSONATA,
      definitionBody: DefinitionBody.fromChainable(flow),
      timeout: Duration.hours(12),
    });
  }

  compile(): NeuronxCompiledModel {
    if (this.compiledModel) {
      return this.compiledModel;
    }
    const waitCondition = new LambdalessWaitCondition(
      this,
      `WaitCondition${this.artifactS3Prefix}`,
      {
        stateMachine: this.stateMachine,
        timeout: Duration.hours(12),
        resourceType: "Custom::NeuronxCompile",
      },
    );

    const s3Prefix = waitCondition.getAttString("s3Prefix");

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
