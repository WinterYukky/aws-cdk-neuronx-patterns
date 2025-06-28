import { Size } from "aws-cdk-lib";

export interface INeuronxImage {
  readonly imageName: string;
  readonly imageTag: string;
  readonly sdkVersion: string;
}

abstract class NeuronxImage {
  /** Latest Neuron SDK */
  static readonly LATEST = Object.entries(this)
    .filter(([k]) => k.startsWith("SDK_"))
    .sort(([k1], [k2]) => (k1 < k2 ? 1 : -1))
    .map(([_, v]) => v)[0] as INeuronxImage;
}

abstract class PytorchNeuronxImage extends NeuronxImage {
  static readonly size = Size.gibibytes(30);
  /** Neuron SDK 2.24.0 */
  static readonly SDK_2_24_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.24.0",
    "3.10",
    "2.7.0",
    "22.04",
  );
  /** Neuron SDK 2.23.0 */
  static readonly SDK_2_23_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.23.0",
    "3.10",
    "2.6.0",
    "22.04",
  );
  /** Neuron SDK 2.22.0 */
  static readonly SDK_2_22_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.22.0",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.21.1 */
  static readonly SDK_2_21_1 = PytorchNeuronxImage.fromSdkVersion(
    "2.21.1",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.21.0 */
  static readonly SDK_2_21_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.21.0",
    "3.10",
    "2.5.1",
    "22.04",
  );
  /** Neuron SDK 2.20.2 */
  static readonly SDK_2_20_2 = PytorchNeuronxImage.fromSdkVersion(
    "2.20.2",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.20.1 */
  static readonly SDK_2_20_1 = PytorchNeuronxImage.fromSdkVersion(
    "2.20.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.20.0 */
  static readonly SDK_2_20_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.20.0",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.19.1 */
  static readonly SDK_2_19_1 = PytorchNeuronxImage.fromSdkVersion(
    "2.19.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.19.0 */
  static readonly SDK_2_19_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.19.0",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.2 */
  static readonly SDK_2_18_2 = PytorchNeuronxImage.fromSdkVersion(
    "2.18.2",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.1 */
  static readonly SDK_2_18_1 = PytorchNeuronxImage.fromSdkVersion(
    "2.18.1",
    "3.10",
    "2.1.2",
    "20.04",
  );
  /** Neuron SDK 2.18.0 */
  static readonly SDK_2_18_0 = PytorchNeuronxImage.fromSdkVersion(
    "2.18.0",
    "3.10",
    "2.1.2",
    "20.04",
  );

  static fromSdkVersion(
    neuronxVersion: string,
    pythonVersion: string,
    pytorchVersion: string,
    ubuntuVersion: string,
  ): INeuronxImage {
    return {
      sdkVersion: neuronxVersion,
      imageName: this.imageName,
      imageTag: `${pytorchVersion}-neuronx-py${pythonVersion.replace(".", "")}-sdk${neuronxVersion}-ubuntu${ubuntuVersion}`,
    };
  }
  protected static readonly imageName: string;
}

export class PytorchTrainingNeuronxImage extends PytorchNeuronxImage {
  static readonly imageName = "public.ecr.aws/neuron/pytorch-training-neuronx";
}

export class VllmInferenceNeuronxImage extends NeuronxImage {
  /**
   * Neuron SDK 2.24.0 with vLLM 0.7.2
   */
  static readonly SDK_2_24_0 = VllmInferenceNeuronxImage.fromSdkVersion(
    "2.24.0",
    "0.7.2",
    "3.10",
    "22.04",
  );

  /** Latest Neuron SDK */
  static readonly LATEST = VllmInferenceNeuronxImage.SDK_2_24_0;

  static fromSdkVersion(
    sdkVersion: string,
    vllmVersion: string,
    pythonVersion: string,
    ubuntuVersion: string,
  ): INeuronxImage {
    return {
      sdkVersion,
      imageName: "public.ecr.aws/neuron/pytorch-inference-vllm-neuronx",
      imageTag: `${vllmVersion}-neuronx-py${pythonVersion.replace(".", "")}-sdk${sdkVersion}-ubuntu${ubuntuVersion}`,
    };
  }
}
