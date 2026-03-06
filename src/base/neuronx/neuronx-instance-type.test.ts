import { Size } from "aws-cdk-lib";
import {
  IAcceleratorChips,
  Inferentia2Chips,
  Trainium2Chips,
  NeuronxInstanceType,
} from "./neuronx-instance-type";

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

// https://aws.amazon.com/ec2/instance-types/trn2/
describe("Trainium2Chips", () => {
  describe("single chip", () => {
    const trainium2Chips = new Trainium2Chips(1);
    it("chips as is number", () => {
      expect(trainium2Chips.chips).toBe(1);
    });
    it("NeuronxCores is 4 per chip (LNC=2 default)", () => {
      expect(trainium2Chips.neuronxCores).toBe(4);
    });
    it("AcceleratorMemory is 24 GiB per logical core", () => {
      expect(trainium2Chips.acceleratorMemory).toStrictEqual(
        Size.gibibytes(96),
      );
    });
  });
  describe("16 chips (trn2.48xlarge)", () => {
    const trainium2Chips = new Trainium2Chips(16);
    it("chips as is number", () => {
      expect(trainium2Chips.chips).toBe(16);
    });
    it("NeuronxCores is 64 for 16 chips (LNC=2 default)", () => {
      expect(trainium2Chips.neuronxCores).toBe(64);
    });
    it("AcceleratorMemory is 1536 GiB for 16 chips", () => {
      expect(trainium2Chips.acceleratorMemory).toStrictEqual(
        Size.gibibytes(1536),
      );
    });
  });
});

// https://aws.amazon.com/ec2/instance-types/inf2/?nc1=h_ls
describe("NeuronxInstanceType", () => {
  const instanceTypes = [
    [
      NeuronxInstanceType.INF2_XLARGE,
      {
        instanceType: "inf2.xlarge",
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
        instanceType: "inf2.8xlarge",
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
        instanceType: "inf2.24xlarge",
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
        instanceType: "inf2.48xlarge",
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

// https://aws.amazon.com/ec2/instance-types/trn2/
describe("NeuronxInstanceType Trn2", () => {
  const instanceTypes = [
    [
      NeuronxInstanceType.TRN2_3XLARGE,
      {
        instanceType: "trn2.3xlarge",
        vCpu: 12,
        memory: Size.gibibytes(128),
        acceleratorChips: {
          chips: 1,
          neuronxCores: 4,
          acceleratorMemory: Size.gibibytes(96),
        } satisfies IAcceleratorChips,
      },
    ] as const,
    [
      NeuronxInstanceType.TRN2_48XLARGE,
      {
        instanceType: "trn2.48xlarge",
        vCpu: 192,
        memory: Size.gibibytes(2048),
        acceleratorChips: {
          chips: 16,
          neuronxCores: 64,
          acceleratorMemory: Size.gibibytes(1536),
        } satisfies IAcceleratorChips,
      },
    ] as const,
    [
      NeuronxInstanceType.TRN2U_48XLARGE,
      {
        instanceType: "trn2u.48xlarge",
        vCpu: 192,
        memory: Size.gibibytes(2048),
        acceleratorChips: {
          chips: 16,
          neuronxCores: 64,
          acceleratorMemory: Size.gibibytes(1536),
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
