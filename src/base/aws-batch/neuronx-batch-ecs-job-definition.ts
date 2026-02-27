import {
  Duration,
  RemovalPolicy,
  ResourceEnvironment,
  Stack,
} from "aws-cdk-lib";
import * as batch from "aws-cdk-lib/aws-batch";
import { IGrantable } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { INeuronxInstanceType } from "../neuronx";

/**
 * Props of NeuronxBatch.
 */
export interface NeuronxBatchEcsJobDefinitionProps
  extends batch.EcsEc2ContainerDefinitionProps, batch.JobDefinitionProps {
  readonly neuronxInstanceType: INeuronxInstanceType;
}

/**
 * Neuronx batch construct.
 */
export class NeuronxBatchEcsJobDefinition
  extends Construct
  implements batch.IJobDefinition
{
  readonly jobDefinitionArn: string;
  readonly jobDefinitionName: string;
  readonly parameters?: { [key: string]: any };
  readonly retryAttempts?: number;
  readonly retryStrategies: batch.RetryStrategy[];
  readonly schedulingPriority?: number;
  readonly timeout?: Duration;
  readonly stack: Stack;
  readonly env: ResourceEnvironment;
  get jobDefinitionRef(): batch.JobDefinitionReference {
    return { jobDefinitionArn: this.jobDefinitionArn };
  }
  private readonly resource: batch.EcsJobDefinition;
  constructor(
    scope: Construct,
    id: string,
    props: NeuronxBatchEcsJobDefinitionProps,
  ) {
    super(scope, id);
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
    this.resource = new batch.EcsJobDefinition(this, "Resource", {
      ...props,
      container: new batch.EcsEc2ContainerDefinition(
        this,
        "ContainerDefinition",
        {
          ...props,
          linuxParameters,
        },
      ),
    });
    this.jobDefinitionArn = this.resource.jobDefinitionArn;
    this.jobDefinitionName = this.resource.jobDefinitionName;
    this.parameters = this.resource.parameters;
    this.retryAttempts = this.resource.retryAttempts;
    this.retryStrategies = this.resource.retryStrategies;
    this.schedulingPriority = this.resource.schedulingPriority;
    this.timeout = this.resource.timeout;
    this.stack = this.resource.stack;
    this.env = this.resource.env;
  }
  applyRemovalPolicy(policy: RemovalPolicy): void {
    this.resource.applyRemovalPolicy(policy);
  }
  addRetryStrategy(strategy: batch.RetryStrategy): void {
    this.resource.addRetryStrategy(strategy);
  }
  /**
   * Grants the `batch:submitJob` permission to the identity on both this job definition and the `queue`
   */
  grantSubmitJob(identity: IGrantable, queue: batch.IJobQueue): void {
    this.resource.grantSubmitJob(identity, queue);
  }
}
