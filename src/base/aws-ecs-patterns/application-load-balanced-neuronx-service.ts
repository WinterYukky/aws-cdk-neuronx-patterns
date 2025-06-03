import { Duration, Size } from "aws-cdk-lib";
import {
  BlockDeviceVolume,
  EbsDeviceVolumeType,
} from "aws-cdk-lib/aws-autoscaling";
import { IVpc, Port, SubnetSelection } from "aws-cdk-lib/aws-ec2";
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

export interface NeuronxTaskDefinitionProps extends ecs.Ec2TaskDefinitionProps {
  /**
   * VPC in which this will launch compile worker and container instance.
   */
  readonly vpc: IVpc;
  /**
   * The instance type of compile worker instance.
   */
  readonly neuronxInstanceType?: INeuronxInstanceType;
  /**
   * The number of tensor parallel size.
   * @default - 1
   */
  readonly tensorParallelSize?: number;
  /**
   * The model to be compiled.
   */
  readonly compiledModel: NeuronxCompiledModel;
  /**
   * The root volume of worker instance.
   * @default - N bilion parameters * 5GiB EBS
   */
  readonly volumeSize?: Size;
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
    const tasksPerInstance =
      neuronxInstanceType.acceleratorChips.neuronxCores / tensorParallelSize;
    super(scope, id, {
      ...props,
      placementConstraints: [
        ...(props.placementConstraints ?? []),
        ecs.PlacementConstraint.memberOf(
          `runningTasksCount<${tasksPerInstance}`,
        ),
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
    return super.addContainer(id, {
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
  }
}

export interface ApplicationLoadBalancedNeuronxServiceProps
  extends ApplicationLoadBalancedEc2ServiceProps {
  readonly neuronTaskDefinition: INeuronxTaskDefinition;
}
export class ApplicationLoadBalancedNeuronxService extends ApplicationLoadBalancedEc2Service {
  constructor(
    scope: Construct,
    id: string,
    props: ApplicationLoadBalancedNeuronxServiceProps,
  ) {
    super(scope, id, {
      healthCheckGracePeriod:
        props.healthCheckGracePeriod ?? Duration.minutes(5),
      ...props,
    });
    const cluster = this.getDefaultCluster(this, props.vpc);
    const volumeSize = Math.ceil(
      props.neuronTaskDefinition.tasksPerInstance *
        props.neuronTaskDefinition.compiledModel.weightSize.toGibibytes() +
        PytorchTrainingNeuronxImage.size.toGibibytes() +
        NeuronOptimizedMachineImage.size.toGibibytes(),
    );
    cluster.addCapacity("InstanceCapacity", {
      ...props,
      instanceType: props.neuronTaskDefinition.neuronxInstanceType.instanceType,
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
      minCapacity: Math.ceil(
        (props.desiredCount ?? 1) / props.neuronTaskDefinition.tasksPerInstance,
      ),
    });
    cluster.connections.allowFrom(
      this.loadBalancer,
      Port.tcpRange(32768, 60999),
    );
  }
}
