import { Size, Tags } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import {
  NeuronOptimizedMachineImage,
  PytorchTrainingNeuronxImage,
} from "../neuronx";
import {
  NeuronxCompilerBase,
  NeuronxCompilerBaseProps,
  ComputeEnvironmentResult,
} from "./neuronx-compiler-base";

/**
 * Props of NeuronxCrossCompiler.
 */
export interface NeuronxCrossCompilerProps extends NeuronxCompilerBaseProps {
  /**
   * The EC2 instance type to use for cross-compilation.
   * This should be a non-Neuron instance type with sufficient memory and CPU
   * for model compilation.
   *
   * @default ec2.InstanceType.of(ec2.InstanceClass.C7I, ec2.InstanceSize.XLARGE4)
   */
  readonly compileInstanceType?: ec2.InstanceType;
}

/**
 * Neuronx cross-compiler construct.
 * Compile the model on a non-Neuron instance and upload the artifacts to an S3 bucket.
 * This avoids the need for expensive Neuron instances during the compilation phase.
 *
 * The compilation uses `vllm serve` which performs model tracing and neuronx-cc compilation
 * entirely on CPU. The resulting artifacts are compatible with Neuron instances for inference.
 */
export class NeuronxCrossCompiler extends NeuronxCompilerBase {
  constructor(scope: Construct, id: string, props: NeuronxCrossCompilerProps) {
    super(scope, id, props);
  }

  protected createComputeEnvironment(
    props: NeuronxCompilerBaseProps,
  ): ComputeEnvironmentResult {
    const volumeSize =
      props.volumeSize?.toGibibytes() ??
      Math.ceil(
        this.weightSize.toGibibytes() +
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

    const compileInstanceType =
      (props as NeuronxCrossCompilerProps).compileInstanceType ??
      ec2.InstanceType.of(ec2.InstanceClass.C7I, ec2.InstanceSize.XLARGE4);

    const computeEnvironment = new batch.ManagedEc2EcsComputeEnvironment(
      this,
      "ComputeEnvironment",
      {
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        instanceTypes: [compileInstanceType],
        useOptimalInstanceClasses: false,
        launchTemplate,
        spot: props.spot,
      },
    );
    if (launchTemplate instanceof ec2.LaunchTemplate) {
      (
        computeEnvironment.node.defaultChild as batch.CfnComputeEnvironment
      ).addPropertyOverride(
        "ComputeResources.LaunchTemplate.Version",
        launchTemplate.latestVersionNumber,
      );
    }

    Tags.of(computeEnvironment).add("Name", "neuronx-cross-compile-worker");

    return {
      computeEnvironment,
      instanceRole: computeEnvironment.instanceRole!,
    };
  }

  protected createJobDefinition(
    props: NeuronxCompilerBaseProps,
  ): batch.IJobDefinition {
    const neuronxInstanceType = props.neuronxInstanceType;
    const targetPlatform = neuronxInstanceType.instanceType
      .toString()
      .split(".")[0];

    const jobDefinition = new batch.EcsJobDefinition(this, "JobDefinition", {
      container: new batch.EcsEc2ContainerDefinition(
        this,
        "ContainerDefinition",
        {
          image: props.image.image,
          memory: Size.mebibytes(
            Math.ceil(neuronxInstanceType.memory.toMebibytes() * 0.95),
          ),
          cpu: neuronxInstanceType.vCpu,
          environment: {
            NEURON_COMPILE_CACHE_URL: `${props.bucket.s3UrlForObject("neuron-compile-cache")}`,
            NEURON_PLATFORM_TARGET_OVERRIDE: targetPlatform,
            ...props.environment,
          },
          command: props.command,
          secrets: props.secrets,
        },
      ),
    });

    return jobDefinition;
  }
}
