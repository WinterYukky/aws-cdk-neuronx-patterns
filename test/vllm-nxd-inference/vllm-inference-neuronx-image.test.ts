import { VllmInferenceNeuronxImage } from '../../src/base/neuronx';

describe('VllmInferenceNeuronxImage', () => {
  test('LATEST points to the latest SDK version', () => {
    expect(VllmInferenceNeuronxImage.LATEST).toBe(VllmInferenceNeuronxImage.SDK_2_24_0);
  });

  test('fromSdkVersion creates correct image reference', () => {
    const image = VllmInferenceNeuronxImage.fromSdkVersion(
      '2.24.0',
      '0.7.2',
      '3.10',
      '22.04',
    );

    expect(image.imageName).toBe('public.ecr.aws/neuron/pytorch-inference-vllm-neuronx');
    expect(image.imageTag).toBe('0.7.2-neuronx-py310-sdk2.24.0-ubuntu22.04');
    expect(image.sdkVersion).toBe('2.24.0');
    expect(image.vllmVersion).toBe('0.7.2');
  });

  test('constructor sets properties correctly', () => {
    const image = new VllmInferenceNeuronxImage({
      imageName: 'test-image',
      imageTag: 'test-tag',
      sdkVersion: '1.0.0',
      vllmVersion: '0.8.0',
    });

    expect(image.imageName).toBe('test-image');
    expect(image.imageTag).toBe('test-tag');
    expect(image.sdkVersion).toBe('1.0.0');
    expect(image.vllmVersion).toBe('0.8.0');
  });

  test('SDK_2_24_0 has correct properties', () => {
    const image = VllmInferenceNeuronxImage.SDK_2_24_0;

    expect(image.imageName).toBe('public.ecr.aws/neuron/pytorch-inference-vllm-neuronx');
    expect(image.imageTag).toBe('0.7.2-neuronx-py310-sdk2.24.0-ubuntu22.04');
    expect(image.sdkVersion).toBe('2.24.0');
    expect(image.vllmVersion).toBe('0.7.2');
  });
});