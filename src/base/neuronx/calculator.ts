import { Size } from "aws-cdk-lib";
import { DataTypeBits, Parameters } from "./model";
import { INeuronxInstanceType } from "./neuronx-instance-type";

function calcDataSize(dataTypeBits: DataTypeBits) {
  return dataTypeBits / 8;
}
function calcWeightMemoryFootprint(
  layers: number,
  embeddingDimension: number,
  dataTypeBits: DataTypeBits,
) {
  const dataSize = calcDataSize(dataTypeBits);
  return Size.bytes(12 * layers * embeddingDimension ** 2 * dataSize);
}
function calcKvCacheMemoryFootprint(
  layers: number,
  embeddingDimension: number,
  dataTypeBits: DataTypeBits,
  maxSequenceLength: number,
  batchSize: number,
) {
  const dataSize = calcDataSize(dataTypeBits);
  return Size.bytes(
    2 * layers * embeddingDimension * dataSize * maxSequenceLength * batchSize,
  );
}

export function calcMemoryFootprint(
  embeddingDimension: number,
  layers: number,
  dataTypeBits: DataTypeBits,
  maxSequenceLength: number,
  batchSize: number,
) {
  // # OPT-66B example (BF16, Inf2)
  // # n_layer=64, n_ctx=2048, n_embd=9216, batch=16
  // weight_mem_footprint = 12 x 64 x 9216^2 x 2 = 121.5 GiB
  // KV_cache_mem_footprint = 16 x 64 x 2048 x 9216 x 2 x 2 = 72 GiB
  // mem_footprint = 121.5GiB + 72GiB = 193.5 GiB
  // num_neuron_cores = ceil_to_closest_supported_size (193.5GiB / 16GiB, Inf2)
  //                  = ceil_to_closest_supported_size (12.1) = 24
  //                  ## Currently, the Neuron runtime supports tensor-parallelism degrees 2, 8, and 32 on Trn1
  //                  ## and supports tensor-parallelism degrees 2, 4, 8, 12 and 24 on Inf2.
  const weightMemFootprint = calcWeightMemoryFootprint(
    layers,
    embeddingDimension,
    dataTypeBits,
  );
  const kvCacheMemFootprint = calcKvCacheMemoryFootprint(
    layers,
    embeddingDimension,
    dataTypeBits,
    maxSequenceLength,
    batchSize,
  );
  return Size.gibibytes(
    weightMemFootprint.toGibibytes() + kvCacheMemFootprint.toGibibytes(),
  );
}

export function calcTensorParallel(
  neuronxInstanceType: INeuronxInstanceType,
  memoryFootprint: Size,
  attentionHeads?: number,
) {
  return (
    neuronxInstanceType.supportedTensorParallelism
      // Attention heads need to be divisible by TP
      .filter((tp) => !attentionHeads || attentionHeads % tp === 0)
      // Fits into Neuron Core's memory capacity
      .filter(
        (tp) =>
          tp *
            neuronxInstanceType.acceleratorChips.acceleratorMemory.toGibibytes() >=
          memoryFootprint.toGibibytes(),
      )
      .map((tp) => {
        const workers = Math.floor(
          neuronxInstanceType.acceleratorChips.neuronxCores / tp,
        );
        return {
          tp,
          workers,
          usage:
            (tp * workers) / neuronxInstanceType.acceleratorChips.neuronxCores,
        };
      })
      .sort((a, b) => b.usage - a.usage)
  );
}

export function inferMemoryFootprintFromParameters(
  parameters: Parameters,
  maxSequenceLength: number,
  batchSize: number,
) {
  const dataSize = calcDataSize(DataTypeBits.BF16_OR_FP16);
  const base = Size.gibibytes(parameters.toBillion() * dataSize * 1.2);
  const additional = Size.gibibytes(
    ((base.toGibibytes() * (maxSequenceLength / 1000)) / 10) * batchSize,
  );
  return Size.gibibytes(base.toGibibytes() + additional.toGibibytes());
}
