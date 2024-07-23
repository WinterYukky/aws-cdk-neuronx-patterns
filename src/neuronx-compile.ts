import { readFileSync } from "fs";
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
import { NeuronxInstanceType } from "./neuronx-instance-type";
import { NeuronOptimizedMachineImage } from "./private/neuron-optimized-machine-image";

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
   * @default 4092
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
  private constructor(
    readonly modelId: string,
    readonly options: ModelOptions,
  ) {}
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
   * The instance type of compile worker instance.
   */
  readonly instanceType?: NeuronxInstanceType;
  /**
   * The bucket to upload compiled artifacts.
   */
  readonly bucket: IBucket;
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
  /**
   * S3 URL that compiled artifact uploaded.
   */
  readonly compiledArtifactS3Url: string;
  constructor(scope: Construct, id: string, props: NeuronxCompileProps) {
    super(scope, id);

    const nPositions = props.compileOptions?.nPositions ?? 4092;
    const quantDtype = props.compileOptions?.quantDtype;
    const optLevel = props.compileOptions?.optLevel ?? OptLevel.BEST_BALANCE;
    const tpDegree =
      props.compileOptions?.tpDegree ??
      this.calcTpDegree(props.model.options.parameters, {
        nPositions,
        quantDtype,
      });
    const instanceType =
      props.instanceType ?? this.selectInstanceTypeByTpDegree(tpDegree);
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

    const runtime: CompileRuntime & { neuronxTransformersVersion?: string } =
      props.runtime ?? {
        image: ContainerImage.fromRegistry(
          "public.ecr.aws/neuron/pytorch-training-neuronx:2.1.2-neuronx-py310-sdk2.19.0-ubuntu20.04",
        ),
        neuronxVersion: "2.19.0",
        neuronxTransformersVersion: "0.11.351" as const,
      };
    let compiledArtifactPathPrefix = `${props.model.modelId}/neuronx-${runtime.neuronxVersion}/tp${tpDegree}-np${nPositions}-opt${optLevel}`;
    if (quantDtype!!) {
      compiledArtifactPathPrefix = `${compiledArtifactPathPrefix}-quant${quantDtype}`;
    }
    props.bucket.grantReadWrite(
      computeEnvironment.instanceRole!,
      `${compiledArtifactPathPrefix}/*`,
    );

    const compileScript = readFileSync(
      join(__dirname, "../scripts/compile.py"),
    ).toString();
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
          command: [
            `cat <<EOF > compile.py\n${compileScript}\nEOF\n`,
            [
              runtime.neuronxTransformersVersion
                ? "pip install -U --extra-index-url https://pip.repos.neuron.amazonaws.com transformers-neuronx==$NEURONX_TRANSFORMERS_VERSION"
                : undefined,
              "curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash",
              "apt-get install git-lfs",
              "git lfs install",
              `git clone https://huggingface.co/${props.model.modelId} model`,
              "rm -rf model/.git",
              "python ./compile.py",
              `aws s3 sync --no-progress ./model ${props.bucket.s3UrlForObject(`${compiledArtifactPathPrefix}/model`)}`,
              `aws s3 sync --no-progress ./compiled ${props.bucket.s3UrlForObject(`${compiledArtifactPathPrefix}/compiled`)}`,
            ]
              .filter((v) => !!v)
              .join(" && "),
          ],
          environment: {
            MODEL_ID: props.model.modelId,
            TP_DEGREE: tpDegree.toString(),
            N_POSITIONS: nPositions.toString(),
            OPT_LEVEL: optLevel.toString(),
            QUANT_DTYPE: quantDtype?.toString() ?? "",
            ARTIFACT_S3_URL: props.bucket.s3UrlForObject(
              compiledArtifactPathPrefix,
            ),
            NEURONX_TRANSFORMERS_VERSION:
              runtime.neuronxTransformersVersion ?? "",
          },
        },
      ),
    });
    this.connectAcceleratorChips(jobDefinition, instanceType);

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
    const compileJob = new CustomResource(this, "CompileJob", {
      serviceToken: provider.serviceToken,
      resourceType: "Custom::CompileJob",
      properties: {
        jobDefinitionArn: jobDefinition.jobDefinitionArn,
        jobQueueArn: jobQueue.jobQueueArn,
        artifactS3Url: props.bucket.s3UrlForObject(compiledArtifactPathPrefix),
      },
    });
    this.compiledArtifactS3Url = compileJob.getAttString("ArtifactS3Url");
  }

  private connectAcceleratorChips(
    jobDefinition: batch.EcsJobDefinition,
    instanceType: NeuronxInstanceType,
  ) {
    type PascalCase<T extends object> = {
      [P in keyof T as P extends string ? Capitalize<P> : never]: T[P];
    };
    const devices = Array.from({
      length: instanceType.acceleratorChips.chips,
    }).map(
      (_, index) =>
        ({
          HostPath: `/dev/neuron${index}`,
          ContainerPath: `/dev/neuron${index}`,
          Permissions: ["read", "write"],
        }) satisfies PascalCase<batch.CfnJobDefinition.DeviceProperty>,
    );
    const cfnJobDefinition = jobDefinition.node
      .defaultChild as batch.CfnJobDefinition;
    cfnJobDefinition.addPropertyOverride(
      "ContainerProperties.LinuxParameters.Devices",
      devices,
    );
  }

  private calcTpDegree(parameters: Parameters, compileOptions: CompileOptions) {
    // case of float16
    const bytesPerParamete = 16 / 8;
    // memory = bytes per parameter * number of parameters
    let memory = Size.gibibytes(bytesPerParamete * parameters.toBilion());
    switch (compileOptions.quantDtype) {
      case QuantDtype.S8:
        memory = Size.gibibytes(memory.toGibibytes() / 2);
        break;
    }
    const neronxCoreMemory = Size.gibibytes(16);
    const minimum = Math.ceil(
      memory.toGibibytes() / neronxCoreMemory.toGibibytes(),
    );

    const tpDegrees = [1, 2, 4, 8, 24];
    for (const tpDegree of tpDegrees) {
      if (minimum <= tpDegree) {
        return tpDegree;
      }
    }
    throw new Error(
      "This model is too large, I can not support this model current version.",
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
