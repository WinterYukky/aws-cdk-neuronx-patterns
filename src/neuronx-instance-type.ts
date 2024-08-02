import { Size } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";

/**
 *
 */
export interface IAcceleratorChips {
  readonly chips: number;
  readonly neuronxCores: number;
  readonly acceleratorMemory: Size;
}

export class Inferentia2Chips implements IAcceleratorChips {
  readonly neuronxCores: number;
  readonly acceleratorMemory: Size;
  constructor(readonly chips: number) {
    this.neuronxCores = chips * 2;
    this.acceleratorMemory = Size.gibibytes(16 * this.neuronxCores);
  }
}

export class TrainiumChips implements IAcceleratorChips {
  readonly neuronxCores: number;
  readonly acceleratorMemory: Size;
  constructor(readonly chips: number) {
    this.neuronxCores = chips * 2;
    this.acceleratorMemory = Size.gibibytes(16 * this.neuronxCores);
  }
}

export class NeuronxInstanceType {
  /**
   * ml.inf2.xlarge
   */
  public static readonly INF2_XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.INF2, ec2.InstanceSize.XLARGE),
    4,
    Size.gibibytes(16),
    new Inferentia2Chips(1),
  );
  /**
   * ml.inf2.8xlarge
   */
  public static readonly INF2_8XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.INF2, ec2.InstanceSize.XLARGE8),
    32,
    Size.gibibytes(128),
    new Inferentia2Chips(1),
  );
  /**
   * ml.inf2.24xlarge
   */
  public static readonly INF2_24XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.INF2, ec2.InstanceSize.XLARGE24),
    96,
    Size.gibibytes(384),
    new Inferentia2Chips(6),
  );
  /**
   * ml.inf2.48xlarge
   */
  public static readonly INF2_48XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.INF2, ec2.InstanceSize.XLARGE48),
    192,
    Size.gibibytes(768),
    new Inferentia2Chips(12),
  );
  /**
   * ml.trn1.2xlarge
   */
  public static readonly TRN1_2XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.TRN1, ec2.InstanceSize.XLARGE2),
    8,
    Size.gibibytes(32),
    new TrainiumChips(1),
  );
  /**
   * ml.trn1.32xlarge
   */
  public static readonly TRN1_32XLARGE = new NeuronxInstanceType(
    ec2.InstanceType.of(ec2.InstanceClass.TRN1, ec2.InstanceSize.XLARGE32),
    128,
    Size.gibibytes(512),
    new TrainiumChips(16),
  );
  private constructor(
    readonly instanceType: ec2.InstanceType,
    readonly vCpu: number,
    readonly memory: Size,
    readonly acceleratorChips: IAcceleratorChips,
  ) {}
  /**
   * Return the instance type as a string
   * @returns The instance type as a string
   */
  toString() {
    return `ml.${this.instanceType.toString()}`;
  }
}
