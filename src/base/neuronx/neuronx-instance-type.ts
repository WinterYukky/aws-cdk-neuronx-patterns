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

export class Trainium1Chips implements IAcceleratorChips {
  readonly neuronxCores: number;
  readonly acceleratorMemory: Size;
  constructor(readonly chips: number) {
    this.neuronxCores = chips * 2;
    this.acceleratorMemory = Size.gibibytes(16 * this.neuronxCores);
  }
}

export class Trainium2Chips implements IAcceleratorChips {
  readonly neuronxCores: number;
  readonly acceleratorMemory: Size;
  constructor(readonly chips: number) {
    // Each Trainium2 chip has 8 physical NeuronCore-v3.
    // With LNC=2 (default), 2 physical cores are combined into 1 logical core,
    // resulting in 4 logical NeuronCores per chip, each with 24 GiB of memory.
    this.neuronxCores = chips * 4;
    this.acceleratorMemory = Size.gibibytes(24 * this.neuronxCores);
  }
}
export interface INeuronxInstanceType {
  readonly supportedTensorParallelism: number[];
  readonly instanceType: ec2.InstanceType;
  readonly vCpu: number;
  readonly memory: Size;
  readonly acceleratorChips: IAcceleratorChips;
}

abstract class NeuronxInstanceTypeBase implements INeuronxInstanceType {
  readonly acceleratorChips: IAcceleratorChips;
  readonly instanceType: ec2.InstanceType;
  readonly vCpu: number;
  readonly memory: Size;
  abstract readonly supportedTensorParallelism: number[];
  constructor(props: {
    instanceType: ec2.InstanceType;
    vCpu: number;
    memory: Size;
    acceleratorChips: IAcceleratorChips;
  }) {
    this.instanceType = props.instanceType;
    this.vCpu = props.vCpu;
    this.memory = props.memory;
    this.acceleratorChips = props.acceleratorChips;
  }
  /**
   * Return the instance type as a string
   * @returns The instance type as a string
   */
  toString() {
    return this.instanceType.toString();
  }
}

class Inferentia2InstanceType extends NeuronxInstanceTypeBase {
  get supportedTensorParallelism(): number[] {
    return [1, 2, 4, 8, 24].filter(
      (tp) => tp <= this.acceleratorChips.neuronxCores,
    );
  }
  constructor(props: {
    instanceType: ec2.InstanceType;
    vCpu: number;
    memory: Size;
    chips: number;
  }) {
    super({
      instanceType: props.instanceType,
      vCpu: props.vCpu,
      memory: props.memory,
      acceleratorChips: new Inferentia2Chips(props.chips),
    });
  }
}
class Trainium1InstanceType extends NeuronxInstanceTypeBase {
  get supportedTensorParallelism(): number[] {
    return [1, 2, 8, 16, 32].filter(
      (tp) => tp <= this.acceleratorChips.neuronxCores,
    );
  }
  constructor(props: {
    instanceType: ec2.InstanceType;
    vCpu: number;
    memory: Size;
    chips: number;
  }) {
    super({
      instanceType: props.instanceType,
      vCpu: props.vCpu,
      memory: props.memory,
      acceleratorChips: new Trainium1Chips(props.chips),
    });
  }
}
class Trainium2InstanceType extends NeuronxInstanceTypeBase {
  get supportedTensorParallelism(): number[] {
    return [1, 2, 4, 8, 16, 32, 64].filter(
      (tp) => tp <= this.acceleratorChips.neuronxCores,
    );
  }
  constructor(props: {
    instanceType: ec2.InstanceType;
    vCpu: number;
    memory: Size;
    chips: number;
  }) {
    super({
      instanceType: props.instanceType,
      vCpu: props.vCpu,
      memory: props.memory,
      acceleratorChips: new Trainium2Chips(props.chips),
    });
  }
}

export abstract class NeuronxInstanceType {
  /**
   * inf2.xlarge
   */
  public static readonly INF2_XLARGE: INeuronxInstanceType =
    new Inferentia2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.INF2,
        ec2.InstanceSize.XLARGE,
      ),
      vCpu: 4,
      memory: Size.gibibytes(16),
      chips: 1,
    });
  /**
   * inf2.8xlarge
   */
  public static readonly INF2_8XLARGE: INeuronxInstanceType =
    new Inferentia2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.INF2,
        ec2.InstanceSize.XLARGE8,
      ),
      vCpu: 32,
      memory: Size.gibibytes(128),
      chips: 1,
    });
  /**
   * inf2.24xlarge
   */
  public static readonly INF2_24XLARGE: INeuronxInstanceType =
    new Inferentia2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.INF2,
        ec2.InstanceSize.XLARGE24,
      ),
      vCpu: 96,
      memory: Size.gibibytes(384),
      chips: 6,
    });
  /**
   * inf2.48xlarge
   */
  public static readonly INF2_48XLARGE: INeuronxInstanceType =
    new Inferentia2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.INF2,
        ec2.InstanceSize.XLARGE48,
      ),
      vCpu: 192,
      memory: Size.gibibytes(768),
      chips: 12,
    });
  /**
   * trn1.2xlarge
   */
  public static readonly TRN1_2XLARGE: INeuronxInstanceType =
    new Trainium1InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.TRN1,
        ec2.InstanceSize.XLARGE2,
      ),
      vCpu: 8,
      memory: Size.gibibytes(32),
      chips: 1,
    });
  /**
   * trn1.32xlarge
   */
  public static readonly TRN1_32XLARGE: INeuronxInstanceType =
    new Trainium1InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.TRN1,
        ec2.InstanceSize.XLARGE32,
      ),
      vCpu: 128,
      memory: Size.gibibytes(512),
      chips: 16,
    });
  /**
   * trn2.3xlarge
   */
  public static readonly TRN2_3XLARGE: INeuronxInstanceType =
    new Trainium2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.TRN2,
        ec2.InstanceSize.XLARGE3,
      ),
      vCpu: 12,
      memory: Size.gibibytes(128),
      chips: 1,
    });
  /**
   * trn2.48xlarge
   */
  public static readonly TRN2_48XLARGE: INeuronxInstanceType =
    new Trainium2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.TRN2,
        ec2.InstanceSize.XLARGE48,
      ),
      vCpu: 192,
      memory: Size.gibibytes(2048),
      chips: 16,
    });
  /**
   * trn2u.48xlarge
   */
  public static readonly TRN2U_48XLARGE: INeuronxInstanceType =
    new Trainium2InstanceType({
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.TRN2U,
        ec2.InstanceSize.XLARGE48,
      ),
      vCpu: 192,
      memory: Size.gibibytes(2048),
      chips: 16,
    });
}
