import { Size } from "aws-cdk-lib";

export interface INeuronxImage {
  readonly imageName: string;
  readonly imageTag: string;
  readonly neuronSdkVersion: string;
}

abstract class NeuronxImage {}

function getLatestVersion<T extends INeuronxImage = INeuronxImage>(
  neuronxImageClass: abstract new () => any,
) {
  return Object.entries(neuronxImageClass)
    .filter(([k]) => k.startsWith("SDK_"))
    .sort(([k1], [k2]) => (k1 < k2 ? 1 : -1))
    .map(([_, v]) => v)[0] as T;
}

abstract class PytorchNeuronxImage extends NeuronxImage {
  static readonly size = Size.gibibytes(30);
  /** Neuron SDK 2.28.0 */
  static readonly SDK_2_28_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.28.0",
    "3.12",
    "2.9.0",
    "24.04",
  );
  /** Neuron SDK 2.27.1 */
  static readonly SDK_2_27_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.27.1",
    "3.12",
    "2.9.0",
    "24.04",
  );
  /** Neuron SDK 2.26.1 */
  static readonly SDK_2_26_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.26.1",
    "3.11",
    "2.8.0",
    "22.04",
  );
  /** Neuron SDK 2.25.0 */
  static readonly SDK_2_25_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.25.0",
    "3.10",
    "2.7.0",
    "22.04",
  );
  /** Neuron SDK 2.24.0 */
  static readonly SDK_2_24_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.24.0",
    "3.10",
    "2.7.0",
    "22.04",
  );
  /** Neuron SDK 2.23.0 */
  static readonly SDK_2_23_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.23.0",
    "3.10",
    "2.6.0",
    "22.04",
  );
  /** Neuron SDK 2.22.0 */
  static readonly SDK_2_22_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.22.0",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.21.1 */
  static readonly SDK_2_21_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.21.1",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.21.0 */
  static readonly SDK_2_21_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.21.0",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.20.2 */
  static readonly SDK_2_20_2 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.20.2",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.20.1 */
  static readonly SDK_2_20_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.20.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.20.0 */
  static readonly SDK_2_20_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.20.0",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.19.1 */
  static readonly SDK_2_19_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.19.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.19.0 */
  static readonly SDK_2_19_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.19.0",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.2 */
  static readonly SDK_2_18_2 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.18.2",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.1 */
  static readonly SDK_2_18_1 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.18.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.0 */
  static readonly SDK_2_18_0 = PytorchNeuronxImage.fromNeuronSdkVersion(
    "2.18.0",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Latest Neuron SDK */
  static readonly LATEST = getLatestVersion(this);

  static fromNeuronSdkVersion(
    neuronSdkVersion: string,
    pythonVersion: string,
    pytorchVersion: string,
    ubuntuVersion: string,
  ): INeuronxImage {
    return {
      neuronSdkVersion,
      imageName: this.imageName,
      imageTag: `${pytorchVersion}-neuronx-py${pythonVersion.replace(".", "")}-sdk${neuronSdkVersion}-ubuntu${ubuntuVersion}`,
    };
  }
  protected static readonly imageName: string;
}

export abstract class PytorchTrainingNeuronxImage extends PytorchNeuronxImage {
  static readonly imageName = "public.ecr.aws/neuron/pytorch-training-neuronx";
}

export interface IVllmInferenceNeuronxImage extends INeuronxImage {
  readonly vllmVersion: string;
}
export class VllmInferenceNeuronxImage extends NeuronxImage {
  /** Neuron SDK 2.28.0 with vLLM 0.13.0 */
  static readonly SDK_2_28_0 = VllmInferenceNeuronxImage.fromNeuronSdkVersion(
    "2.28.0",
    "0.13.0",
    "3.12",
    "24.04",
  );
  /** Neuron SDK 2.27.1 with vLLM 0.13.0 */
  static readonly SDK_2_27_1_VLLM_0_13_0 =
    VllmInferenceNeuronxImage.fromNeuronSdkVersion(
      "2.27.1",
      "0.13.0",
      "3.12",
      "24.04",
    );
  /** Neuron SDK 2.27.1 with vLLM 0.11.0 */
  static readonly SDK_2_27_1_VLLM_0_11_0 =
    VllmInferenceNeuronxImage.fromNeuronSdkVersion(
      "2.27.1",
      "0.11.0",
      "3.12",
      "24.04",
    );
  /** Neuron SDK 2.26.1 with vLLM 0.9.1 */
  static readonly SDK_2_26_1 = VllmInferenceNeuronxImage.fromNeuronSdkVersion(
    "2.26.1",
    "0.9.1",
    "3.11",
    "22.04",
  );
  /** Neuron SDK 2.26.0 with vLLM 0.9.1 */
  static readonly SDK_2_26_0 = VllmInferenceNeuronxImage.fromNeuronSdkVersion(
    "2.26.0",
    "0.9.1",
    "3.11",
    "22.04",
  );
  /** Neuron SDK 2.25.0 with vLLM 0.9.1 */
  static readonly SDK_2_25_0 = VllmInferenceNeuronxImage.fromNeuronSdkVersion(
    "2.25.0",
    "0.9.1",
    "3.10",
    "22.04",
  );
  /** Neuron SDK 2.24.1 with vLLM 0.7.2 */
  static readonly SDK_2_24_1 = VllmInferenceNeuronxImage.fromNeuronSdkVersion(
    "2.24.1",
    "0.7.2",
    "3.10",
    "22.04",
  );
  /** Latest Neuron SDK */
  static readonly LATEST = getLatestVersion<IVllmInferenceNeuronxImage>(this);

  static fromNeuronSdkVersion(
    neuronSdkVersion: string,
    vllmVersion: string,
    pythonVersion: string,
    ubuntuVersion: string,
  ): IVllmInferenceNeuronxImage {
    return {
      neuronSdkVersion,
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: `${vllmVersion}-neuronx-py${pythonVersion.replace(".", "")}-sdk${neuronSdkVersion}-ubuntu${ubuntuVersion}`,
      vllmVersion,
    };
  }
}
