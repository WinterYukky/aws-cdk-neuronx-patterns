import {
  PytorchInferenceNeuronxImage,
  VllmInferenceNeuronxImage,
} from "./deep-learning-containers";

describe("PytorchInferenceNeuronxImage", () => {
  it("Can get LATEST version", () => {
    const image = PytorchInferenceNeuronxImage.LATEST;
    expect(image).not.toBeUndefined();
    expect(image.imageTag).toEqual(expect.any(String));
    expect(image.neuronSdkVersion).toEqual(expect.any(String));
  });

  it("SDK 2.28.0 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_28_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.9.0-neuronx-py312-sdk2.28.0-ubuntu24.04",
      neuronSdkVersion: "2.28.0",
    });
  });

  it("SDK 2.27.1 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_27_1;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.9.0-neuronx-py312-sdk2.27.1-ubuntu24.04",
      neuronSdkVersion: "2.27.1",
    });
  });

  it("SDK 2.26.1 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_26_1;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.8.0-neuronx-py311-sdk2.26.1-ubuntu22.04",
      neuronSdkVersion: "2.26.1",
    });
  });

  it("SDK 2.25.0 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_25_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.7.0-neuronx-py310-sdk2.25.0-ubuntu22.04",
      neuronSdkVersion: "2.25.0",
    });
  });

  it("SDK 2.23.0 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_23_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.6.0-neuronx-py310-sdk2.23.0-ubuntu22.04",
      neuronSdkVersion: "2.23.0",
    });
  });

  it("SDK 2.22.0 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_22_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.5.1-neuronx-py310-sdk2.22.0-ubuntu22.04",
      neuronSdkVersion: "2.22.0",
    });
  });

  it("SDK 2.20.2 with PyTorch 2.1.2 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_20_2_PYTORCH_2_1_2;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "2.1.2-neuronx-py310-sdk2.20.2-ubuntu20.04",
      neuronSdkVersion: "2.20.2",
    });
  });

  it("SDK 2.20.2 with PyTorch 1.13.1 is defined", () => {
    const image = PytorchInferenceNeuronxImage.SDK_2_20_2_PYTORCH_1_13_1;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-neuronx",
      imageTag: "1.13.1-neuronx-py310-sdk2.20.2-ubuntu20.04",
      neuronSdkVersion: "2.20.2",
    });
  });
});

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
