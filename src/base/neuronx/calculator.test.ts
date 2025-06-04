import { Size } from "aws-cdk-lib";
import { calcMemoryFootprint, calcTensorParallel } from "./calculator";
import { DataTypeBits } from "./model";
import { NeuronxInstanceType } from "./neuronx-instance-type";

describe("When the attention head is divisible", () => {
  test("Inf2", () => {
    const tensorParallel = calcTensorParallel(
      NeuronxInstanceType.INF2_48XLARGE,
      Size.gibibytes(16),
      32,
    );
    expect(tensorParallel).toEqual([
      {
        tp: 1,
        workers: 24,
        usage: 1,
      },
      {
        tp: 2,
        workers: 12,
        usage: 1,
      },
      {
        tp: 4,
        workers: 6,
        usage: 1,
      },
      {
        tp: 8,
        workers: 3,
        usage: 1,
      },
    ]);
  });
  test("Trn1", () => {
    const tensorParallel = calcTensorParallel(
      NeuronxInstanceType.TRN1_32XLARGE,
      Size.gibibytes(16),
      48,
    );
    expect(tensorParallel).toEqual([
      {
        tp: 1,
        workers: 32,
        usage: 1,
      },
      {
        tp: 2,
        workers: 16,
        usage: 1,
      },
      {
        tp: 8,
        workers: 4,
        usage: 1,
      },
      {
        tp: 16,
        workers: 2,
        usage: 1,
      },
    ]);
  });
});
describe("The one with low usage is shown last", () => {
  test("Inf2", () => {
    const tensorParallel = calcTensorParallel(
      NeuronxInstanceType.INF2_24XLARGE,
      Size.gibibytes(16),
      32,
    );
    expect(tensorParallel).toEqual([
      {
        tp: 1,
        workers: 12,
        usage: 1,
      },
      {
        tp: 2,
        workers: 6,
        usage: 1,
      },
      {
        tp: 4,
        workers: 3,
        usage: 1,
      },
      {
        tp: 8,
        workers: 1,
        usage: 0.6666666666666666,
      },
    ]);
  });
  test("Trn1", () => {
    const tensorParallel = calcTensorParallel(
      NeuronxInstanceType.TRN1_32XLARGE,
      Size.gibibytes(16),
      32,
    );
    expect(tensorParallel).toEqual([
      {
        tp: 1,
        workers: 32,
        usage: 1,
      },
      {
        tp: 2,
        workers: 16,
        usage: 1,
      },
      {
        tp: 8,
        workers: 4,
        usage: 1,
      },
      {
        tp: 16,
        workers: 2,
        usage: 1,
      },
      {
        tp: 32,
        workers: 1,
        usage: 1,
      },
    ]);
  });
});

describe("When the memory footprint is calculated", () => {
  test("Million size models are calculatable", () => {
    const memoryFootprint = calcMemoryFootprint(
      576,
      30,
      DataTypeBits.BF16_OR_FP16,
      128,
      1,
    );
    expect(memoryFootprint.toGibibytes()).toEqual(1);
  });
  test("Billion size models are calculatable", () => {
    const memoryFootprint = calcMemoryFootprint(
      6144,
      48,
      DataTypeBits.BF16_OR_FP16,
      1024,
      1,
    );
    expect(memoryFootprint.toGibibytes()).toEqual(42);
  });
});
