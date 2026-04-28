from neuronx_distributed_inference.models.dbrx.modeling_dbrx import DbrxForCausalLM, DbrxInferenceConfig
from neuronx_distributed_inference.models.llama.modeling_llama import NeuronLlamaForCausalLM, LlamaInferenceConfig
from neuronx_distributed_inference.models.mllama.modeling_mllama import NeuronMllamaForCausalLM, MllamaInferenceConfig
from neuronx_distributed_inference.models.mixtral.modeling_mixtral import NeuronMixtralForCausalLM, MixtralInferenceConfig
from neuronx_distributed_inference.utils.hf_adapter import load_pretrained_config
import transformers
from transformers import AutoConfig


NEURON_MODEL_FOR_CAUSAL_LM_MAPPING = {
    "code_llama": NeuronLlamaForCausalLM,
    "dbrx":       DbrxForCausalLM,
    "llama":      NeuronLlamaForCausalLM,
    "mllama":     NeuronMllamaForCausalLM,
    "mistral":    NeuronLlamaForCausalLM,
    "mixtral":    NeuronMixtralForCausalLM,
}

CONFIG_MAPPING = {
    transformers.DbrxConfig:    "dbrx",
    transformers.LlamaConfig:   "llama",
    transformers.MllamaConfig:  "mllama",
    transformers.MistralConfig: "mistral",
    transformers.MixtralConfig: "mixtral",
}


class NeuronAutoModelForCausalLM:
    @classmethod
    def _get_model_class(cls, pretrained_model_name_or_path):
        config = AutoConfig.from_pretrained(pretrained_model_name_or_path)
        if type(config) in CONFIG_MAPPING:
            model_type = CONFIG_MAPPING[type(config)]
        elif hasattr(config, "model_type"): # Fallback for custom/derived config objects
            model_type = config.model_type
        else:
            raise AssertionError(f"Models based on '{type(config)}' are not supported by Neuron")

        if model_type not in NEURON_MODEL_FOR_CAUSAL_LM_MAPPING:
            raise AssertionError(f"The configuration model type '{model_type}' is not supported by Neuron")

        return NEURON_MODEL_FOR_CAUSAL_LM_MAPPING[model_type]

    @classmethod
    def from_pretrained(cls, pretrained_model_name_or_path, *model_args, **kwargs):
        model_class = NeuronAutoModelForCausalLM._get_model_class(pretrained_model_name_or_path)
        return model_class.from_pretrained(pretrained_model_name_or_path, *model_args, **kwargs)

    @classmethod
    def save_quantized_state_dict(cls, pretrained_model_name_or_path, *model_args, **kwargs):
        # Quantize the model and save the quantized checkpoint to config.neuron_config.quantized_checkpoints_path.
        model_class = NeuronAutoModelForCausalLM._get_model_class(pretrained_model_name_or_path)
        return model_class.save_quantized_state_dict(pretrained_model_name_or_path, *model_args, **kwargs)


INFERENCE_CONFIG_FOR_CAUSAL_LM_MAPPING = {
    "code_llama": LlamaInferenceConfig,
    "dbrx":       DbrxInferenceConfig,
    "llama":      LlamaInferenceConfig,
    "mllama":     MllamaInferenceConfig,
    "mistral":    LlamaInferenceConfig,
    "mixtral":    MixtralInferenceConfig,
}

class AutoInferenceConfig:
    @classmethod
    def _get_config_class(cls, pretrained_model_name_or_path):
        config = AutoConfig.from_pretrained(pretrained_model_name_or_path)
        if type(config) in CONFIG_MAPPING:
            model_type = CONFIG_MAPPING[type(config)]
        elif hasattr(config, "model_type"): # Fallback for custom/derived config objects
            model_type = config.model_type
        else:
            raise AssertionError(f"Models based on '{type(config)}' are not supported by Neuron")

        if model_type not in INFERENCE_CONFIG_FOR_CAUSAL_LM_MAPPING:
            raise AssertionError(f"The configuration model type '{model_type}' is not supported by Neuron")

        return INFERENCE_CONFIG_FOR_CAUSAL_LM_MAPPING[model_type]

    @classmethod
    def from_pretrained(cls, pretrained_model_name_or_path, *config_args, **kwargs):
        InferenceConfig = AutoInferenceConfig._get_config_class(pretrained_model_name_or_path)
        return InferenceConfig(load_config=load_pretrained_config(pretrained_model_name_or_path), *config_args, **kwargs)