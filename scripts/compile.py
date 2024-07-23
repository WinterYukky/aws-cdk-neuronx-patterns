import os
from transformers_neuronx import NeuronAutoModelForCausalLM, NeuronConfig, QuantizationConfig

model_path = "./model"
batch_size = 1
tp_degree = int(os.environ['TP_DEGREE'])
amp = "bf16"
quant_dtype = os.getenv('QUANT_DTYPE')
n_positions = int(os.environ['N_POSITIONS'])
opt_level = int(os.getenv('OPT_LEVEL', "2"))

# compile the model
print("loading the model")
neuron_config = NeuronConfig(
    quant=QuantizationConfig(quant_dtype=quant_dtype, dequant_dtype='bf16') if quant_dtype is not None and quant_dtype != '' else None,
)
os.environ['NEURON_CC_FLAGS'] = f"--enable-saturate-infinity --enable-mixed-precision-accumulation --optlevel {opt_level}"
neuron_model = NeuronAutoModelForCausalLM.from_pretrained(
    model_path, 
    batch_size=batch_size, # Batch size must be determined prior to inference time.
    tp_degree=tp_degree,   # Tensor Parallelism degree. Controls the number of NeuronCores to execute on
    amp=amp,               # This automatically casts the weights to the specified dtype.
    n_positions=n_positions,      # Sequence length. This should be atleast as large as the sum of expected input and output tokens. 
    neuron_config=neuron_config
)

print("compiling the model")
neuron_model.to_neuron()

print("saving the compiled model")
neuron_model.save('compiled') # can be copied and used on a different neuron instance
