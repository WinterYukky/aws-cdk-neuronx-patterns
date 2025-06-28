import * as ecs from 'aws-cdk-lib/aws-ecs';
import { VllmInferenceNeuronxImage } from '../../src/base/neuronx';
import { VllmNxdInferenceImage } from '../../src/vllm-nxd-inference';

describe('VllmNxdInferenceImage', () => {
  test('fromImage creates an image with registry reference', () => {
    const neuronxImage = VllmInferenceNeuronxImage.LATEST;
    
    const vllmImage = VllmNxdInferenceImage.fromImage(neuronxImage);
    
    expect(vllmImage.sdkVersion).toBe(neuronxImage.sdkVersion);
    expect(vllmImage.vllmGitBranch).toBe('main');
    expect(vllmImage.vllmGitCommitHash).toBe('');
    
    // We cannot easily test the image property since it's a ContainerImage,
    // but we can verify it's an instance of ContainerImage
    expect(vllmImage.image).toBeInstanceOf(ecs.ContainerImage);
  });
});