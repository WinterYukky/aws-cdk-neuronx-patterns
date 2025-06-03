import { Size } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { INeuronxInstanceType, NeuronOptimizedMachineImage } from "../neuronx";

/**
 * Props of NeuronxBatch.
 */
export interface NeuronxBatchProps
  extends batch.EcsEc2ContainerDefinitionProps {
  /**
   * VPC in which this will launch worker instance.
   */
  readonly vpc: ec2.IVpc;
  /**
   * The instance type of worker instance.
   */
  readonly neuronxInstanceType: INeuronxInstanceType;
  /**
   * The root volume of worker instance.
   * @default - N bilion parameters * 5GiB EBS
   */
  readonly volumeSize: Size;
  /**
   * Whether or not to use spot instances.
   * Spot instances are less expensive EC2 instances that can be reclaimed by EC2 at any time;
   * your job will be given two minutes of notice before reclamation.
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
 * Neuronx batch construct.
 */
export class NeuronxBatch extends Construct {
  readonly computeEnvironment: batch.ManagedEc2EcsComputeEnvironment;
  readonly jobDefinition: batch.EcsJobDefinition;
  constructor(scope: Construct, id: string, props: NeuronxBatchProps) {
    super(scope, id);
    const launchTemplate = new ec2.LaunchTemplate(this, "LaunchTemplate", {
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: ec2.BlockDeviceVolume.ebs(props.volumeSize.toGibibytes()),
        },
      ],
    });
    this.computeEnvironment = new batch.ManagedEc2EcsComputeEnvironment(
      this,
      "ComputeEnvironment",
      {
        vpc: props.vpc,
        vpcSubnets: props.vpcSubnets,
        instanceTypes: [props.neuronxInstanceType.instanceType],
        useOptimalInstanceClasses: false,
        images: [
          {
            image: new NeuronOptimizedMachineImage(this, "MachinImage"),
            imageType: batch.EcsMachineImageType.ECS_AL2023,
          },
        ],
        launchTemplate,
        spot: props.spot,
      },
    );
    (
      this.computeEnvironment.node.defaultChild as batch.CfnComputeEnvironment
    ).addPropertyOverride(
      "ComputeResources.LaunchTemplate.Version",
      launchTemplate.latestVersionNumber,
    );
    const linuxParameters =
      props.linuxParameters ??
      new batch.LinuxParameters(this, "LinuxParameters");
    linuxParameters.addDevices(
      ...Array.from({
        length: props.neuronxInstanceType.acceleratorChips.chips,
      }).map((_, index) => ({
        hostPath: `/dev/neuron${index}`,
        containerPath: `/dev/neuron${index}`,
        permissions: [
          batch.DevicePermission.READ,
          batch.DevicePermission.WRITE,
        ],
      })),
    );
    this.jobDefinition = new batch.EcsJobDefinition(this, "JobDefinition", {
      container: new batch.EcsEc2ContainerDefinition(
        this,
        "ContainerDefinition",
        {
          ...props,
          linuxParameters,
        },
      ),
    });
  }
}
