import { join } from "path";
import { CustomResource, Duration, Size, Tags } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { ContainerImage } from "aws-cdk-lib/aws-ecs";
import { Grant } from "aws-cdk-lib/aws-iam";
import { Code, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import {
  CompileOptions,
  Model,
  OptLevel,
  Parameters,
  QuantDtype,
} from "./model";
import { NeuronxInstanceType } from "./neuronx-instance-type";
import { NeuronOptimizedMachineImage } from "./private/neuron-optimized-machine-image";
import { calcTpDegree } from "./private/util";

/**
 * Compile runtime.
 */
export interface CompileRuntime {
  /**
   * An image of the container where the compile job is executed.
   */
  readonly image: ContainerImage;
  /**
   * Neuronx version included in container image.
   */
  readonly neuronxVersion: string;
}
/**
 * Props of NeuronxCompile.
 */
export interface NeuronxCompileProps {
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
  readonly instanceType?: NeuronxInstanceType;
  /**
   * The root volume of worker instance.
   * @default - N bilion parameters * 5GiB EBS
   */
  readonly volumeSize?: Size;
  /**
   * Compile runtime.
   * @default { neuronxSdkVersion: "2.19.0", image: ContainerImage.fromRegistry("public.ecr.aws/neuron/pytorch-training-neuronx:2.1.2-neuronx-py310-sdk2.19.0-ubuntu20.04")}
   */
  readonly runtime?: CompileRuntime;
  /**
   * Neuronx compile options.
   * @default - Each properties are set default.
   */
  readonly compileOptions?: CompileOptions;
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
export class NeuronxCompile extends Construct {
  readonly compiledArtifactS3Bucket: IBucket;
  /**
   * S3 URL that compiled artifact uploaded.
   */
  readonly compiledArtifactS3Url: string;
  /**
   * S3 Prefix that compiled artifact uploaded.
   */
  readonly compiledArtifactS3Prefix: string;
  readonly tpDegree: number;
  readonly quantDtype?: QuantDtype;
  readonly nPositions: number;
  readonly optLevel: OptLevel;
  readonly parameters: Parameters;
  /**
   * S3 Prefix that compiled artifact uploaded.
   * This property is not depends on compile job finish.
   * @internal
   */
  readonly _compiledArtifactS3Prefix: string;
  constructor(scope: Construct, id: string, props: NeuronxCompileProps) {
    super(scope, id);

    this.parameters = props.model.options.parameters;
    this.compiledArtifactS3Bucket = props.bucket;
    this.nPositions = props.compileOptions?.nPositions ?? 4096;
    this.quantDtype = props.compileOptions?.quantDtype;
    this.optLevel = props.compileOptions?.optLevel ?? OptLevel.BEST_BALANCE;
    this.tpDegree =
      props.compileOptions?.tpDegree ??
      calcTpDegree(props.model.options.parameters, {
        nPositions: this.nPositions,
        quantDtype: this.quantDtype,
      });
    const instanceType =
      props.instanceType ?? this.selectInstanceTypeByTpDegree(this.tpDegree);
    const launchTemplate = new ec2.LaunchTemplate(this, "LaunchTemplate", {
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: ec2.BlockDeviceVolume.ebs(
            props.volumeSize?.toGibibytes() ??
              props.model.options.parameters.toBilion() * 5,
          ),
        },
      ],
    });
    const computeEnvironment = new batch.ManagedEc2EcsComputeEnvironment(
      this,
      "ComputeEnvironment",
      {
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        instanceTypes: [instanceType.instanceType],
        useOptimalInstanceClasses: false,
        images: [
          {
            image: new NeuronOptimizedMachineImage(this, "MachinImage"),
            // @ts-ignore
            imageType: "ECS_AL2023",
          },
        ],
        launchTemplate,
        spot: props.spot,
      },
    );
    (
      computeEnvironment.node.defaultChild as batch.CfnComputeEnvironment
    ).addPropertyOverride(
      "ComputeResources.LaunchTemplate.Version",
      launchTemplate.latestVersionNumber,
    );

    Tags.of(computeEnvironment).add("Name", "neuronx-compile-worker");
    const jobQueue = new batch.JobQueue(this, "JobQueue", {
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

    const runtime: CompileRuntime = props.runtime ?? {
      image: ContainerImage.fromAsset(join(__dirname, "../scripts/compile")),
      neuronxVersion: "2.19.1",
    };
    let compiledArtifactPathPrefix = `${props.model.modelId}/neuronx-${runtime.neuronxVersion}/tp${this.tpDegree}-np${this.nPositions}-opt${this.optLevel}`;
    if (this.quantDtype!!) {
      compiledArtifactPathPrefix = `${compiledArtifactPathPrefix}-quant${this.quantDtype}`;
    }
    props.bucket.grantReadWrite(
      computeEnvironment.instanceRole!,
      `${compiledArtifactPathPrefix}/*`,
    );
    const linuxParameters = new batch.LinuxParameters(this, "LinuxParameters");
    linuxParameters.addDevices(
      ...Array.from({
        length: instanceType.acceleratorChips.chips,
      }).map((_, index) => ({
        hostPath: `/dev/neuron${index}`,
        containerPath: `/dev/neuron${index}`,
        permissions: [
          batch.DevicePermission.READ,
          batch.DevicePermission.WRITE,
        ],
      })),
    );
    const jobDefinition = new batch.EcsJobDefinition(this, "JobDefinition", {
      container: new batch.EcsEc2ContainerDefinition(
        this,
        "ContainerDefinition",
        {
          image: runtime.image,
          // The fllowing command was executed on inf2.8xlarge
          // sh-5.2$ free -b
          // 			total					used			free					shared	buff/cache	available
          // Mem:	132265766912	866320384	130341785600	667648	1057660928	130529148928
          // https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html
          memory: Size.mebibytes(
            Math.ceil(instanceType.memory.toMebibytes() * 0.95),
          ),
          cpu: instanceType.vCpu,
          environment: {
            MODEL_ID: props.model.modelId,
            TP_DEGREE: this.tpDegree.toString(),
            N_POSITIONS: this.nPositions.toString(),
            OPT_LEVEL: this.optLevel.toString(),
            QUANT_DTYPE: this.quantDtype?.toString() ?? "",
            ARTIFACT_S3_URL: props.bucket.s3UrlForObject(
              compiledArtifactPathPrefix,
            ),
          },
          linuxParameters,
        },
      ),
    });

    const jobSubmitFunction = new SingletonFunction(this, "JobSubmitFunction", {
      code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
      handler: "index.onEvent",
      runtime: Runtime.NODEJS_20_X,
      uuid: "1361f469-5c92-4c46-9e11-5d1dbf925bac",
    });
    jobDefinition.grantSubmitJob(jobSubmitFunction, jobQueue);
    const jobMonitoringFunction = new SingletonFunction(
      this,
      "JobMonitoringFunction",
      {
        code: Code.fromAsset(join(__dirname, "private/await-compile-job")),
        handler: "index.isComplete",
        runtime: Runtime.NODEJS_20_X,
        uuid: "df16dba8-5f77-480c-a6ad-cfdf74c3de62",
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
      totalTimeout: Duration.hours(1),
    });
    const compileJob = new CustomResource(this, "Resource", {
      serviceToken: provider.serviceToken,
      resourceType: "Custom::NeuronxCompile",
      properties: {
        jobDefinitionArn: jobDefinition.jobDefinitionArn,
        jobQueueArn: jobQueue.jobQueueArn,
        artifactS3Prefix: compiledArtifactPathPrefix,
      },
    });
    this._compiledArtifactS3Prefix = compiledArtifactPathPrefix;
    this.compiledArtifactS3Prefix = compileJob.getAttString("ArtifactS3Prefix");
    this.compiledArtifactS3Url = props.bucket.s3UrlForObject(
      this.compiledArtifactS3Prefix,
    );
  }

  private selectInstanceTypeByTpDegree(tpDegree: number) {
    const instanceTypes = [
      NeuronxInstanceType.INF2_8XLARGE,
      NeuronxInstanceType.INF2_24XLARGE,
      NeuronxInstanceType.INF2_48XLARGE,
    ];
    for (const instanceType of instanceTypes) {
      if (tpDegree <= instanceType.acceleratorChips.neuronxCores) {
        return instanceType;
      }
    }
    throw new Error(
      "This model is too large, I can not support this model current version.",
    );
  }
}
