import { Size, Tags } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { IRole } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import {
  NeuronxBatchComputeEnvironment,
  NeuronxBatchEcsJobDefinition,
} from "../aws-batch";
import {
  NeuronOptimizedMachineImage,
  NeuronxInstanceType,
  PytorchTrainingNeuronxImage,
} from "../neuronx";
import {
  INeuronxContainerImage,
  NeuronxCompiledModel,
  NeuronxCompilerBase,
  NeuronxCompilerBaseProps,
} from "./neuronx-compiler-base";

/**
 * Props of NeuronxCompiler.
 */
export interface NeuronxCompilerProps extends NeuronxCompilerBaseProps {}

/**
 * Neuronx compiler construct.
 * Compile the model to work with Inferentia2 and Trainium1 and upload it to an S3 bucket.
 */
export class NeuronxCompiler extends NeuronxCompilerBase {
  constructor(scope: Construct, id: string, props: NeuronxCompilerProps) {
    super(scope, id, props);
  }

  protected createComputeEnvironment(
    props: NeuronxCompilerBaseProps,
  ): { computeEnvironment: batch.IComputeEnvironment; instanceRole: IRole } {
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

    return {
      computeEnvironment,
      instanceRole: computeEnvironment.instanceRole,
    };
  }

  protected createJobDefinition(
    props: NeuronxCompilerBaseProps,
  ): NeuronxBatchEcsJobDefinition {
    const neuronxInstanceType =
      props.neuronxInstanceType ?? NeuronxInstanceType.INF2_48XLARGE;
    return new NeuronxBatchEcsJobDefinition(this, "JobDefinition", {
      neuronxInstanceType,
      image: props.image.image,
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
    });
  }
}

export { INeuronxContainerImage, NeuronxCompiledModel };
