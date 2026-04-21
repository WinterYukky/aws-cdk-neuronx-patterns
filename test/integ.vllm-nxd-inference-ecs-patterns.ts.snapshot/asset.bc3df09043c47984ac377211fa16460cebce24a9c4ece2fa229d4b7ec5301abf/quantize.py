import argparse
import json
import os

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--override-neuron-config', type=str, default='{}')
    args, _ = parser.parse_known_args()
    
    override_neuron_config = json.loads(args.override_neuron_config)
    quantized = override_neuron_config.get("quantized", False)
    quantized_checkpoints_path = override_neuron_config.get("quantized_checkpoints_path", "quantized.ckph")
    model_path = os.environ['MODEL_NAME']

    if quantized and not os.path.isfile(quantized_checkpoints_path):
        from modeling_auto import NeuronAutoModelForCausalLM, AutoInferenceConfig
        from neuronx_distributed_inference.models.config import NeuronConfig
        neuron_config = NeuronConfig(
            **override_neuron_config
        )
        config = AutoInferenceConfig.from_pretrained(model_path, neuron_config)
        NeuronAutoModelForCausalLM.save_quantized_state_dict(model_path, config)

if __name__ == "__main__":
    main()