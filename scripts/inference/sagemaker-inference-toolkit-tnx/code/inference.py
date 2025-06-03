import json
import os
from typing import Tuple
import torch
from transformers import AutoTokenizer, PreTrainedTokenizer, PreTrainedTokenizerFast
from transformers_neuronx import NeuronAutoModelForCausalLM
from transformers_neuronx.config import NeuronConfig, QuantizationConfig

model_path = os.environ['MODEL']
compiled_artifact_path = os.environ['COMPILED_ARTIFACT']
batch_size = 1
tp_degree = int(os.environ['TP_DEGREE'])
amp = "bf16"
quant_dtype = os.getenv('QUANT_DTYPE')
n_positions = int(os.environ['N_POSITIONS'])
opt_level = int(os.getenv('OPT_LEVEL', "2"))
sequence_length = int(os.getenv('SEQUENCE_LENGTH', n_positions))
top_k = int(os.getenv('TOP_K', 50))

def model_fn(model_dir, context=None):
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    neuron_config = NeuronConfig(
        quant=QuantizationConfig(quant_dtype=quant_dtype, dequant_dtype='bf16') if quant_dtype is not None and quant_dtype != '' else None,
    )
    os.environ['NEURON_CC_FLAGS'] = f"--enable-saturate-infinity --enable-mixed-precision-accumulation --optlevel {opt_level}"
    model = NeuronAutoModelForCausalLM.from_pretrained(
        model_path,  # Should reference the split checkpoint produced by "save_pretrained_split"
        batch_size=batch_size,           # Batch size must be determined prior to inference time.
        tp_degree=tp_degree,            # Controls the number of NeuronCores to execute on. Change to 32 for trn1.32xlarge
        amp=amp,              # This automatically casts the weights to the specified dtype.
        n_positions=n_positions,
        neuron_config=neuron_config,
    )
    model.load(compiled_artifact_path)
    model.to_neuron()
    print('Load complete!')
    return model, tokenizer


def input_fn(data, content_type, context=None):
    if content_type != 'application/json':
        raise TypeError('content_type is only allowed application/json')
    return json.loads(data)


def predict_fn(data: dict, model_and_tokenizer: Tuple[NeuronAutoModelForCausalLM, PreTrainedTokenizer | PreTrainedTokenizerFast], context=None):
    model, tokenizer = model_and_tokenizer
    with torch.inference_mode():
        raw_prompt = tokenizer.apply_chat_template(conversation=data["messages"], tokenize=False, add_generation_prompt=True)
        if 'role' in data and data["role"] != '':
            raw_prompt = raw_prompt.replace("assistant", data["role"])
        input_ids = tokenizer.encode(raw_prompt, add_special_tokens=False, return_tensors="pt")
        generated_sequences = model.sample(input_ids, sequence_length=sequence_length, top_k=top_k)
        generated_sequences = [tokenizer.decode(seq) for seq in generated_sequences]
        prompt = [tokenizer.decode(seq) for seq in input_ids][0]
        response = generated_sequences[0].replace(prompt, "").replace(tokenizer.eos_token, "")
        return response.strip()


def output_fn(data, content_type, context=None):
    if content_type != 'application/json':
        raise TypeError('content_type is only allowed application/json')
    return json.dumps({'generated_text' : data})