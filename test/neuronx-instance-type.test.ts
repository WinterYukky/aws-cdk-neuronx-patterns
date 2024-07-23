import { Size } from "aws-cdk-lib";
import {
  IAcceleratorChips,
  Inferentia2Chips,
  NeuronxInstanceType,
} from "../src";

describe("Inferentia2Chips", () => {
  const inferentia2Chips = new Inferentia2Chips(12);
  it("chips as is number", () => {
    expect(inferentia2Chips.chips).toBe(12);
  });
  it("NeuronxCores is twice of chips", () => {
    expect(inferentia2Chips.neuronxCores).toBe(24);
  });
  it("AcceleratorMemory is 16 times more than Neuron core", () => {
    expect(inferentia2Chips.acceleratorMemory).toStrictEqual(
      Size.gibibytes(384),
    );
  });
});

// https://aws.amazon.com/ec2/instance-types/inf2/?nc1=h_ls
describe("NeuronxInstanceType", () => {
  const instanceTypes = [
    [
      NeuronxInstanceType.INF2_XLARGE,
      {
        instanceType: "ml.inf2.xlarge",
        vCpu: 4,
        memory: Size.gibibytes(16),
        acceleratorChips: {
          chips: 1,
          neuronxCores: 2,
          acceleratorMemory: Size.gibibytes(32),
        } satisfies IAcceleratorChips,
      },
    ] as const,
    [
      NeuronxInstanceType.INF2_8XLARGE,
      {
        instanceType: "ml.inf2.8xlarge",
        vCpu: 32,
        memory: Size.gibibytes(128),
        acceleratorChips: {
          chips: 1,
          neuronxCores: 2,
          acceleratorMemory: Size.gibibytes(32),
        } satisfies IAcceleratorChips,
      },
    ] as const,
    [
      NeuronxInstanceType.INF2_24XLARGE,
      {
        instanceType: "ml.inf2.24xlarge",
        vCpu: 96,
        memory: Size.gibibytes(384),
        acceleratorChips: {
          chips: 6,
          neuronxCores: 12,
          acceleratorMemory: Size.gibibytes(192),
        } satisfies IAcceleratorChips,
      },
    ] as const,
    [
      NeuronxInstanceType.INF2_48XLARGE,
      {
        instanceType: "ml.inf2.48xlarge",
        vCpu: 192,
        memory: Size.gibibytes(768),
        acceleratorChips: {
          chips: 12,
          neuronxCores: 24,
          acceleratorMemory: Size.gibibytes(384),
        } satisfies IAcceleratorChips,
      },
    ] as const,
  ];
  it.each(instanceTypes)("InstanceType of %s", (instanceType, expected) => {
    expect(instanceType.toString()).toBe(expected.instanceType);
    expect(instanceType.vCpu).toBe(expected.vCpu);
    expect(instanceType.memory).toStrictEqual(expected.memory);
    expect(instanceType.acceleratorChips.chips).toBe(
      expected.acceleratorChips.chips,
    );
    expect(instanceType.acceleratorChips.neuronxCores).toBe(
      expected.acceleratorChips.neuronxCores,
    );
    expect(instanceType.acceleratorChips.acceleratorMemory).toStrictEqual(
      expected.acceleratorChips.acceleratorMemory,
    );
  });
});
