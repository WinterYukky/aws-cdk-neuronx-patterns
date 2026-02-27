import { Duration } from "aws-cdk-lib";
import {
  AutoScalingGroup,
  BlockDeviceVolume,
  EbsDeviceVolumeType,
} from "aws-cdk-lib/aws-autoscaling";
import { Port, UserData } from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import {
  ApplicationLoadBalancedEc2Service,
  ApplicationLoadBalancedEc2ServiceProps,
} from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from "constructs";
import {
  INeuronxInstanceType,
  NeuronOptimizedMachineImage,
  PytorchTrainingNeuronxImage,
} from "../neuronx";
import { NeuronxCompiledModel } from "../neuronx-compiler";

export interface NeuronxTaskDefinitionPropsBase
  extends ecs.Ec2TaskDefinitionProps {
  /**
   * The instance type of compile worker instance.
   */
  readonly neuronxInstanceType?: INeuronxInstanceType;
  /**
   * The number of tensor parallel size.
   * @default - 1
   */
  readonly tensorParallelSize?: number;
}

export interface NeuronxTaskDefinitionProps extends NeuronxTaskDefinitionPropsBase {
  /**
   * The model to be compiled.
   */
  readonly compiledModel: NeuronxCompiledModel;
}

export interface INeuronxTaskDefinition extends ecs.IEc2TaskDefinition {
  readonly neuronxInstanceType: INeuronxInstanceType;
  readonly tensorParallelSize: number;
  readonly tasksPerInstance: number;
  readonly compiledModel: NeuronxCompiledModel;
}
export class NeuronxTaskDefinition
  extends ecs.Ec2TaskDefinition
  implements INeuronxTaskDefinition
{
  readonly neuronxInstanceType: INeuronxInstanceType;
  readonly tensorParallelSize: number;
  readonly tasksPerInstance: number;
  readonly compiledModel: NeuronxCompiledModel;
  protected readonly linuxParameters: ecs.LinuxParameters;
  constructor(scope: Construct, id: string, props: NeuronxTaskDefinitionProps) {
    const neuronxInstanceType =
      props.neuronxInstanceType ?? props.compiledModel.compileTimeInstanceType;
    const tensorParallelSize = props.tensorParallelSize ?? 1;
    const tasksPerInstance = Math.floor(
      neuronxInstanceType.acceleratorChips.neuronxCores / tensorParallelSize,
    );
    const placementConstraints =
      tasksPerInstance >= 2
        ? [
            ecs.PlacementConstraint.memberOf(
              `runningTasksCount<${tasksPerInstance}`,
            ),
          ]
        : [];
    super(scope, id, {
      ...props,
      placementConstraints: [
        ...(props.placementConstraints ?? []),
        ...placementConstraints,
      ],
    });
    this.linuxParameters = new ecs.LinuxParameters(this, "LinuxParameters");
    this.linuxParameters.addDevices(
      ...Array.from({
        length: neuronxInstanceType?.acceleratorChips.chips ?? 1,
      }).map<ecs.Device>((_, index) => ({
        hostPath: `/dev/neuron${index}`,
        containerPath: `/dev/neuron${index}`,
        permissions: [ecs.DevicePermission.READ, ecs.DevicePermission.WRITE],
      })),
    );
    if (this.executionRole) {
      props.compiledModel.bucket.grantRead(this.executionRole);
    }
    props.compiledModel.bucket.grantRead(this.taskRole);
    this.compiledModel = props.compiledModel;
    this.neuronxInstanceType = neuronxInstanceType;
    this.tensorParallelSize = tensorParallelSize;
    this.tasksPerInstance = tasksPerInstance;
  }

  addContainerWithDefault(
    id: string,
    props: ecs.ContainerDefinitionOptions,
  ): ecs.ContainerDefinition {
    const container = super.addContainer(id, {
      logging: ecs.LogDriver.awsLogs({
        streamPrefix: id,
      }),
      linuxParameters: this.linuxParameters,
      memoryReservationMiB: Math.ceil(
        (this.neuronxInstanceType.memory.toMebibytes() * 0.8) /
          this.tasksPerInstance,
      ),
      ...props,
    });
    container.addMountPoints({
      sourceVolume: "model",
      containerPath: "/opt/ml/model",
      readOnly: false,
    });
    return container;
  }
}

export interface ApplicationLoadBalancedNeuronxServiceProps extends ApplicationLoadBalancedEc2ServiceProps {}
export class ApplicationLoadBalancedNeuronxService extends ApplicationLoadBalancedEc2Service {
  constructor(
    scope: Construct,
    id: string,
    props: ApplicationLoadBalancedNeuronxServiceProps,
  ) {
    const neuronxTaskDefinition = props.taskDefinition;
    if (
      !neuronxTaskDefinition ||
      !(neuronxTaskDefinition instanceof NeuronxTaskDefinition)
    ) {
      throw new Error("taskDefinition must extend NeuronxTaskDefinition");
    }
    super(scope, id, {
      healthCheckGracePeriod:
        props.healthCheckGracePeriod ?? Duration.minutes(15),
      ...props,
    });

    const cluster = this.getDefaultCluster(this, props.vpc);

    // install and mount mountpoint for s3
    const userData = UserData.forLinux();
    userData.addCommands(`
#!/bin/bash -e

# Install Mountpoint
MP_RPM=$(mktemp --suffix=.rpm)
curl https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm > $MP_RPM

# cloud-init installs conflict with SSM agent: https://github.com/amazonlinux/amazon-linux-2023/issues/397
attempt=0
max_attempts=5
until dnf install -y $MP_RPM; do
    attempt=$((attempt + 1))
    if [ $attempt -ge $max_attempts ]; then
        echo "Failed to install mount-s3 after $max_attempts attempts. Exiting."
        exit 1
    fi
    echo "dnf install mount-s3 failed (attempt $attempt/$max_attempts), retrying in 3 seconds..."
    sleep 3
done

rm $MP_RPM

# Setup the fstab file and create the mount
mkdir --parents /mnt/${neuronxTaskDefinition.compiledModel.bucket.bucketName}
mount-s3 ${neuronxTaskDefinition.compiledModel.bucket.bucketName} /mnt/${neuronxTaskDefinition.compiledModel.bucket.bucketName} --allow-other --file-mode=644 --dir-mode=755`);

    neuronxTaskDefinition.addVolume({
      name: "model",
      host: {
        sourcePath: `/mnt/${neuronxTaskDefinition.compiledModel.bucket.bucketName}`,
      },
    });

    const volumeSize = Math.ceil(
      PytorchTrainingNeuronxImage.size.toGibibytes() +
        NeuronOptimizedMachineImage.size.toGibibytes(),
    );
    const desiredCapacity = Math.ceil(
      (props.desiredCount ?? 1) / neuronxTaskDefinition.tasksPerInstance,
    );
    const autoScalingGroup = new AutoScalingGroup(this, "AutoScalingGroup", {
      vpc: cluster.vpc,
      instanceType: neuronxTaskDefinition.neuronxInstanceType.instanceType,
      machineImage: new NeuronOptimizedMachineImage(
        this,
        "NeuronOptimizedMachineImage",
      ),
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: BlockDeviceVolume.ebs(volumeSize, {
            volumeType: EbsDeviceVolumeType.GP3,
            encrypted: true,
          }),
        },
      ],
      userData,
      desiredCapacity,
      maxCapacity:
        neuronxTaskDefinition.tasksPerInstance === 1
          ? desiredCapacity + 1
          : undefined,
    });
    autoScalingGroup.connections.allowFrom(
      this.loadBalancer,
      Port.tcpRange(32768, 60999),
    );
    neuronxTaskDefinition.compiledModel.bucket.grantRead(autoScalingGroup);
    const provider = new ecs.AsgCapacityProvider(this, "AsgCapacityProvider", {
      autoScalingGroup,
      enableManagedTerminationProtection: false,
    });
    cluster.addAsgCapacityProvider(provider);
  }
}
