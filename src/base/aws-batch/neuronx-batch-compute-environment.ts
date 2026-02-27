import { RemovalPolicy, ResourceEnvironment, Stack } from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import { LaunchTemplate } from "aws-cdk-lib/aws-ec2";
import { IRole } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { NeuronOptimizedMachineImage } from "../neuronx";

/**
 * Props of NeuronxBatch.
 */
export interface NeuronxBatchComputeEnvironmentProps
  extends batch.ManagedEc2EcsComputeEnvironmentProps {}

/**
 * Neuronx batch construct.
 */
export class NeuronxBatchComputeEnvironment
  extends Construct
  implements batch.IComputeEnvironment
{
  readonly computeEnvironmentName: string;
  readonly computeEnvironmentArn: string;
  readonly serviceRole?: IRole | undefined;
  readonly enabled: boolean;
  readonly stack: Stack;
  readonly env: ResourceEnvironment;
  readonly instanceRole: IRole;
  get computeEnvironmentRef(): batch.ComputeEnvironmentReference {
    return { computeEnvironmentArn: this.computeEnvironmentArn };
  }
  private readonly resource: batch.ManagedEc2EcsComputeEnvironment;
  constructor(
    scope: Construct,
    id: string,
    props: NeuronxBatchComputeEnvironmentProps,
  ) {
    super(scope, id);

    const images = props.images ?? [
      {
        image: new NeuronOptimizedMachineImage(
          this,
          "NeuronOptimizedMachineImage",
        ),
        imageType: batch.EcsMachineImageType.ECS_AL2023,
      },
    ];
    this.resource = new batch.ManagedEc2EcsComputeEnvironment(
      this,
      "Resource",
      {
        ...props,
        images,
      },
    );
    if (
      props.launchTemplate &&
      props.launchTemplate instanceof LaunchTemplate
    ) {
      (
        this.resource.node.defaultChild as batch.CfnComputeEnvironment
      ).addPropertyOverride(
        "ComputeResources.LaunchTemplate.Version",
        props.launchTemplate.latestVersionNumber,
      );
    }

    this.computeEnvironmentArn = this.resource.computeEnvironmentArn;
    this.computeEnvironmentName = this.resource.computeEnvironmentName;
    this.enabled = this.resource.enabled;
    this.env = this.resource.env;
    this.serviceRole = this.resource.serviceRole;
    this.stack = this.resource.stack;
    this.instanceRole = this.resource.instanceRole!;
  }
  applyRemovalPolicy(policy: RemovalPolicy): void {
    this.resource.applyRemovalPolicy(policy);
  }
}
