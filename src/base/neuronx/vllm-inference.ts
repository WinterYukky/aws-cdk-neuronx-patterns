import { INeuronxImage } from './deep-learning-containers';

/**
 * vLLM Inference Images for Neuron from AWS Neuron Deep Learning Containers.
 * @see https://github.com/aws-neuron/deep-learning-containers
 */
export class VllmInferenceNeuronxImage implements INeuronxImage {
  /**
   * Latest Neuron SDK 2.24.0 with vLLM 0.7.2
   * Supported on trn1, trn2, inf2
   */
  static readonly SDK_2_24_0 = VllmInferenceNeuronxImage.fromSdkVersion(
    '2.24.0',
    '0.7.2',
    '3.10',
    '22.04',
  );

  /**
   * Latest version of the vLLM Inference Image
   */
  static readonly LATEST = VllmInferenceNeuronxImage.SDK_2_24_0;

  /**
   * The name of the ECR image.
   */
  readonly imageName: string;

  /**
   * The tag of the ECR image.
   */
  readonly imageTag: string;

  /**
   * The SDK version.
   */
  readonly sdkVersion: string;

  /**
   * The vLLM version.
   */
  readonly vllmVersion: string;

  constructor(props: {
    readonly imageName: string;
    readonly imageTag: string;
    readonly sdkVersion: string;
    readonly vllmVersion: string;
  }) {
    this.imageName = props.imageName;
    this.imageTag = props.imageTag;
    this.sdkVersion = props.sdkVersion;
    this.vllmVersion = props.vllmVersion;
  }

  /**
   * Create a vLLM inference image from SDK version.
   */
  static fromSdkVersion(
    sdkVersion: string,
    vllmVersion: string,
    pythonVersion: string,
    ubuntuVersion: string,
  ): VllmInferenceNeuronxImage {
    return new VllmInferenceNeuronxImage({
      sdkVersion,
      vllmVersion,
      imageName: 'public.ecr.aws/neuron/pytorch-inference-vllm-neuronx',
      imageTag: `${vllmVersion}-neuronx-py${pythonVersion.replace('.', '')}-sdk${sdkVersion}-ubuntu${ubuntuVersion}`,
    });
  }
}