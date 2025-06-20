import {
  CfnWaitCondition,
  CfnWaitConditionHandle,
  CustomResource,
  Duration,
  Fn,
  Size,
  Tags,
} from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { Grant } from "aws-cdk-lib/aws-iam";
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
import {
  NeuronxBatchComputeEnvironment,
  NeuronxBatchEcsJobDefinition,
} from "../aws-batch";
import {
  INeuronxInstanceType,
  Model,
  NeuronOptimizedMachineImage,
  NeuronxInstanceType,
  PytorchTrainingNeuronxImage,
} from "../neuronx";

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
  readonly sdkVersion: string;
}

/**
 * Props of NeuronxCompiler.
 */
export interface NeuronxCompilerProps {
  /**
   * VPC in which this will launch compile worker instance.
   */
  readonly vpc: ec2.IVpc;
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
  readonly command?: string[];
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
  readonly vpcSubnets?: ec2.SubnetSelection;
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

export interface NeuronxCompiledModel {
  readonly compileTimeInstanceType: INeuronxInstanceType;
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
  readonly weightSize: Size;
}

/**
 * Neuronx compiler construct.
 * Compile the model to work with Inferentia2 and Trainium1 and upload it to an S3 bucket.
 */
export class NeuronxCompiler extends Construct {
  private compiledModel?: NeuronxCompiledModel;
  private readonly entrypoint: SingletonFunction;
  private readonly jobDefinition: NeuronxBatchEcsJobDefinition;
  private readonly jobQueue: batch.JobQueue;
  private readonly artifactS3Prefix: string;
  private readonly weightSize: Size;
  private readonly neuronxInstanceType: INeuronxInstanceType;
  private readonly model: Model;
  private readonly bucket: IBucket;
  constructor(scope: Construct, id: string, props: NeuronxCompilerProps) {
    super(scope, id);
    const weightSize = Size.gibibytes(
      props.model.options.parameters.toBillion() * 2.5,
    );
    const volumeSize =
      props.volumeSize?.toGibibytes() ??
      Math.ceil(
        weightSize.toGibibytes() +
          PytorchTrainingNeuronxImage.size.toGibibytes() +
          NeuronOptimizedMachineImage.size.toGibibytes(),
      );
    const launchTemplate = new ec2.LaunchTemplate(this, "LaunchTemplate", {
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: ec2.BlockDeviceVolume.ebs(volumeSize, {
            volumeType: ec2.EbsDeviceVolumeType.GP3,
            encrypted: true,
          }),
        },
      ],
    });

    const neuronxInstanceType =
      props.neuronxInstanceType ?? NeuronxInstanceType.INF2_48XLARGE;
    const computeEnvironment = new NeuronxBatchComputeEnvironment(
      this,
      "ComputeEnvironment",
      {
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        instanceTypes: [neuronxInstanceType.instanceType],
        useOptimalInstanceClasses: false,
        launchTemplate,
        spot: props.spot,
      },
    );

    Tags.of(computeEnvironment).add("Name", "neuronx-compile-worker");
    this.jobQueue = new batch.JobQueue(this, "JobQueue", {
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
    props.model.bucket?.grantRead(computeEnvironment.instanceRole);
    props.bucket.grantReadWrite(computeEnvironment.instanceRole);
    this.jobDefinition = new NeuronxBatchEcsJobDefinition(
      this,
      "JobDefinition",
      {
        neuronxInstanceType,
        image: props.image.image,
        // The fllowing command was executed on inf2.8xlarge
        // sh-5.2$ free -b
        // 			total					used			free					shared	buff/cache	available
        // Mem:	132265766912	866320384	130341785600	667648	1057660928	130529148928
        // https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html
        memory: Size.mebibytes(
          Math.ceil(neuronxInstanceType.memory.toMebibytes() * 0.95),
        ),
        cpu: neuronxInstanceType.vCpu,
        environment: {
          NEURON_COMPILE_CACHE_URL: `${props.bucket.s3UrlForObject("neuron-compile-cache")}`,
          ...props.environment,
        },
        command: props.command,
        secrets: props.secrets,
      },
    );

    const jobSubmitFunction = new SingletonFunction(this, "JobSubmitFunction", {
      code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
      handler: "index.onEvent",
      runtime: Runtime.NODEJS_LATEST,
      uuid: "1361f469-5c92-4c46-9e11-5d1dbf925bac",
      environment: {
        JOB_DEFINITION_ARN: this.jobDefinition.jobDefinitionArn,
        JOB_QUEUE_ARN: this.jobQueue.jobQueueArn,
      },
    });
    this.jobDefinition.grantSubmitJob(jobSubmitFunction, this.jobQueue);
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

    this.model = props.model;
    this.bucket = props.bucket;
    this.artifactS3Prefix = props.artifactS3Prefix;
    this.weightSize = weightSize;
    this.neuronxInstanceType = neuronxInstanceType;
  }
  compile() {
    // when invoke multiple times
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
      compileTimeInstanceType: this.neuronxInstanceType,
      bucket: this.bucket,
      s3Prefix,
      s3Uri: this.bucket.s3UrlForObject(s3Prefix),
      weightSize: this.weightSize,
    };
    return this.compiledModel;
  }
}
