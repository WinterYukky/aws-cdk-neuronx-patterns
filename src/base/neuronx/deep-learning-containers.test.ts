import {
  PytorchTrainingNeuronxImage,
  VllmInferenceNeuronxImage,
} from "./deep-learning-containers";

describe("PytorchTrainingNeuronxImage", () => {
  it("Can get LATEST version", () => {
    const image = PytorchTrainingNeuronxImage.LATEST;
    expect(image).not.toBeUndefined();
    expect(image.imageTag).toEqual(expect.any(String));
    expect(image.neuronSdkVersion).toEqual(expect.any(String));
  });

  it("SDK 2.28.0 is defined", () => {
    const image = PytorchTrainingNeuronxImage.SDK_2_28_0;
    expect(image.imageTag).toBe("2.9.0-neuronx-py312-sdk2.28.0-ubuntu24.04");
    expect(image.neuronSdkVersion).toBe("2.28.0");
  });

  it("SDK 2.27.1 is defined", () => {
    const image = PytorchTrainingNeuronxImage.SDK_2_27_1;
    expect(image.imageTag).toBe("2.9.0-neuronx-py312-sdk2.27.1-ubuntu24.04");
    expect(image.neuronSdkVersion).toBe("2.27.1");
  });

  it("SDK 2.26.1 is defined", () => {
    const image = PytorchTrainingNeuronxImage.SDK_2_26_1;
    expect(image.imageTag).toBe("2.8.0-neuronx-py311-sdk2.26.1-ubuntu22.04");
    expect(image.neuronSdkVersion).toBe("2.26.1");
  });

  it("SDK 2.25.0 is defined", () => {
    const image = PytorchTrainingNeuronxImage.SDK_2_25_0;
    expect(image.imageTag).toBe("2.7.0-neuronx-py310-sdk2.25.0-ubuntu22.04");
    expect(image.neuronSdkVersion).toBe("2.25.0");
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

  it("SDK 2.28.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_28_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.13.0-neuronx-py312-sdk2.28.0-ubuntu24.04",
      neuronSdkVersion: "2.28.0",
      vllmVersion: "0.13.0",
    });
  });

  it("SDK 2.27.1 with vLLM 0.13.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_27_1_VLLM_0_13_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.13.0-neuronx-py312-sdk2.27.1-ubuntu24.04",
      neuronSdkVersion: "2.27.1",
      vllmVersion: "0.13.0",
    });
  });

  it("SDK 2.27.1 with vLLM 0.11.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_27_1_VLLM_0_11_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.11.0-neuronx-py312-sdk2.27.1-ubuntu24.04",
      neuronSdkVersion: "2.27.1",
      vllmVersion: "0.11.0",
    });
  });

  it("SDK 2.26.1 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_26_1;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.9.1-neuronx-py311-sdk2.26.1-ubuntu22.04",
      neuronSdkVersion: "2.26.1",
      vllmVersion: "0.9.1",
    });
  });

  it("SDK 2.26.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_26_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.9.1-neuronx-py311-sdk2.26.0-ubuntu22.04",
      neuronSdkVersion: "2.26.0",
      vllmVersion: "0.9.1",
    });
  });

  it("SDK 2.25.0 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_25_0;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.9.1-neuronx-py310-sdk2.25.0-ubuntu22.04",
      neuronSdkVersion: "2.25.0",
      vllmVersion: "0.9.1",
    });
  });

  it("SDK 2.24.1 is defined", () => {
    const image = VllmInferenceNeuronxImage.SDK_2_24_1;
    expect(image).toStrictEqual({
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: "0.7.2-neuronx-py310-sdk2.24.1-ubuntu22.04",
      neuronSdkVersion: "2.24.1",
      vllmVersion: "0.7.2",
    });
  });
});
