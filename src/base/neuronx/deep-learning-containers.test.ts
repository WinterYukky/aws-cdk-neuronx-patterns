import { VllmInferenceNeuronxImage } from "./deep-learning-containers";

describe("VllmInferenceNeuronxImage", () => {
  it("Can get LATEST version", () => {
    const image = VllmInferenceNeuronxImage.LATEST;
    expect(image).not.toBeUndefined();
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: expect.any(String),
      neuronSdkVersion: expect.any(String),
      vllmVersion: expect.any(String),
    });
  });
});

describe("VllmInferenceNeuronxImage", () => {
  it("SDK 2.26.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_26_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.9.1-neuronx-py311-sdk2.26.0-ubuntu22.04",
      neuronSdkVersion: "2.26.0",
      vllmVersion: "0.9.1",
    });
  });
});
