/**
 * Log level options for Uvicorn
 */
export enum UvicornLogLevel {
  DEBUG = "debug",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  CRITICAL = "critical",
  TRACE = "trace",
}

/**
 * Available model weight loading formats
 */
export enum LoadFormat {
  AUTO = "auto",
  PT = "pt",
  SAFETENSORS = "safetensors",
  NPCACHE = "npcache",
  DUMMY = "dummy",
  TENSORIZER = "tensorizer",
  SHARDED_STATE = "sharded_state",
  GGUF = "gguf",
  BITSANDBYTES = "bitsandbytes",
  MISTRAL = "mistral",
  RUNAI_STREAMER = "runai_streamer",
  FASTSAFETENSORS = "fastsafetensors",
}

/**
 * Data types for model weights and activations
 */
export enum DataType {
  /**
   * “auto” will use FP16 precision for FP32 and FP16 models, and BF16 precision for BF16 models.
   */
  AUTO = "auto",
  /**
   * “half” for FP16. Recommended for AWQ quantization.
   */
  HALF = "half",
  /**
   * “float16” is the same as “half”.
   */
  FLOAT16 = "float16",
  /**
   * “bfloat16” for a balance between precision and range.
   */
  BFLOAT16 = "bfloat16",
  /**
   * “float” is shorthand for FP32 precision.
   */
  FLOAT = "float",
  /**
   * “float32” for FP32 precision.
   */
  FLOAT32 = "float32",
}

/**
 * The folder path to the generation config.
 */
export enum GenerationConfig {
  AUTO = "auto",
  VLLM = "vllm",
}

/**
 * Available guided decoding backends
 */
export enum GuidedDecodingBackend {
  AUTO = "auto",
  OUTLINES = "outlines",
  LM_FORMAT_ENFORCER = "lm-format-enforcer",
  XGRAMMAR = "xgrammar",
}

/**
 * Available reasoning parsers
 */
export enum ReasoningParser {
  DEEPSEEK_R1 = "deepseek_r1",
  GRANITE = "granite",
}

/**
 * Model implementation options
 */
export enum ModelImpl {
  /**
   * “auto” will try to use the vLLM implementation if it exists and fall back to the Transformers
   * implementation if no vLLM implementation is available.
   */
  AUTO = "auto",
  /**
   * “vllm” will use the vLLM model implementation.
   */
  VLLM = "vllm",
  /**
   * “transformers” will use the Transformers model implementation.
   */
  TRANSFORMERS = "transformers",
}

/**
 * Distributed execution backend options
 */
export enum DistributedExecutorBackend {
  RAY = "ray",
  MP = "mp",
  UNI = "uni",
  EXTERNAL_LAUNCHER = "external_launcher",
}

/**
 * Cache block size options in number of tokens
 */
export enum BlockSize {
  SIZE_8 = 8,
  SIZE_16 = 16,
  SIZE_32 = 32,
  SIZE_64 = 64,
  SIZE_128 = 128,
}

/**
 * KV cache data type options
 */
export enum KvCacheDtype {
  AUTO = "auto",
  FP8 = "fp8",
  FP8_E4M3 = "fp8_e4m3",
  FP8_E5M2 = "fp8_e5m2",
}

/**
 * Hash algorithm options for prefix caching
 */
export enum PrefixCachingHashAlgo {
  /**
   * “builtin” is Python’s built-in hash.
   */
  BUILTIN = "builtin",
  /**
   * “sha256” is collision resistant but with certain overheads.
   */
  SHA256 = "sha256",
}

/**
 * Quantization methods
 */
export enum Quantization {
  AQLM = "aqlm",
  AWQ = "awq",
  DEEPSPEEDFP = "deepspeedfp",
  TPU_INT8 = "tpu_int8",
  FP8 = "fp8",
  PTPC_FP8 = "ptpc_fp8",
  FBGEMM_FP8 = "fbgemm_fp8",
  MODELOPT = "modelopt",
  NVFP4 = "nvfp4",
  MARLIN = "marlin",
  GGUF = "gguf",
  GPTQ_MARLIN_24 = "gptq_marlin_24",
  GPTQ_MARLIN = "gptq_marlin",
  AWQ_MARLIN = "awq_marlin",
  GPTQ = "gptq",
  COMPRESSED_TENSORS = "compressed-tensors",
  BITSANDBYTES = "bitsandbytes",
  QQQ = "qqq",
  HQQ = "hqq",
  EXPERTS_INT8 = "experts_int8",
  NEURON_QUANT = "neuron_quant",
  IPEX = "ipex",
  QUARK = "quark",
  MOE_WNA16 = "moe_wna16",
  TORCHAO = "torchao",
  NONE = "None",
}

/**
 * Tokenizer mode options
 */
export enum TokenizerMode {
  /**
   * “auto” will use the fast tokenizer if available.
   */
  AUTO = "auto",
  /**
   * “slow” will always use the slow tokenizer.
   */
  SLOW = "slow",
  /**
   * “mistral” will always use the mistral_common tokenizer.
   */
  MISTRAL = "mistral",
  /**
   * “custom” will use –tokenizer to select the preregistered tokenizer.
   */
  CUSTOM = "custom",
}

/**
 * Model config format options
 */
export enum ConfigFormat {
  /**
   * “auto” will try to load the config in hf format if available else it will try to load in mistral format
   */
  AUTO = "auto",
  HF = "hf",
  MISTRAL = "mistral",
}

/**
 * Tokenizer pool type options
 */
export enum TokenizerPoolType {
  RAY = "ray",
}

/**
 * Device type options for vLLM execution
 */
export enum Device {
  AUTO = "auto",
  CUDA = "cuda",
  NEURON = "neuron",
  CPU = "cpu",
  TPU = "tpu",
  XPU = "xpu",
  HPU = "hpu",
}

/**
 * LoRA data type options
 */
export enum LoraDtype {
  AUTO = "auto",
  FLOAT16 = "float16",
  BFLOAT16 = "bfloat16",
}

/**
 * Format options for rendering message content within a chat template
 */
export enum ChatTemplateContentFormat {
  AUTO = "auto",
  STRING = "string",
  OPENAI = "openai",
}

/**
 * Tool call parser options
 */
export enum ToolCallParser {
  GRANITE_20B_FC = "granite-20b-fc",
  GRANITE = "granite",
  HERMES = "hermes",
  INTERNLM = "internlm",
  JAMBA = "jamba",
  LLAMA3_JSON = "llama3_json",
  MISTRAL = "mistral",
  PHI4_MINI_JSON = "phi4_mini_json",
  PYTHONIC = "pythonic",
}

/**
 * Task options for model usage
 */
export enum VllmTask {
  AUTO = "auto",
  GENERATE = "generate",
  EMBEDDING = "embedding",
  EMBED = "embed",
  CLASSIFY = "classify",
  SCORE = "score",
  REWARD = "reward",
  TRANSCRIPTION = "transcription",
}

/**
 * Preemption mode.
 */
export enum PreemptionMode {
  RECOMPUTE = "recompute",
  SWAP = "swap",
}

/**
 * Scheduling policy options
 */
export enum SchedulingPolicy {
  FCFS = "fcfs",
  PRIORITY = "priority",
}

/**
 * VllmNamedArguments
 */
export interface VllmNamedArguments {
  /**
   * Host name.
   */
  readonly host?: string;

  /**
   * Port number.
   * @default 8000
   */
  readonly port?: number;

  /**
   * Log level for uvicorn.
   * @default UvicornLogLevel.INFO
   */
  readonly uvicornLogLevel?: UvicornLogLevel;

  /**
   * Disable uvicorn access log.
   * @default false
   */
  readonly disableUvicornAccessLog?: boolean;

  /**
   * Allow credentials.
   * @default false
   */
  readonly allowCredentials?: boolean;

  /**
   * Allowed origins.
   * @default ['*']
   */
  readonly allowedOrigins?: string[];

  /**
   * Allowed methods.
   * @default ['*']
   */
  readonly allowedMethods?: string[];

  /**
   * Allowed headers.
   * @default ['*']
   */
  readonly allowedHeaders?: string[];

  /**
   * If provided, the server will require this key to be presented in the header.
   */
  readonly apiKey?: string;

  /**
   * LoRA module configurations.
   * @example {"name": "name", "path": "lora_path", "base_model_name": "id"}
   */
  readonly loraModules?: { [key: string]: any };

  /**
   * Prompt adapter configurations in the format name=path. Multiple adapters can be specified.
   */
  readonly promptAdapters?: string[];

  /**
   * The file path to the chat template, or the template in single-line form for the specified model.
   */
  readonly chatTemplate?: string;

  /**
   * The format to render message content within a chat template.
   * - “string” will render the content as a string.
   *   - Example: `"Hello World"`
   * - “openai” will render the content as a list of dictionaries, similar to OpenAI schema.
   *   - Example: `[{"type": "text", "text": "Hello world!"}]`
   * @default ChatTemplateContentFormat.AUTO
   */
  readonly chatTemplateContentFormat?: ChatTemplateContentFormat;

  /**
   * The role name to return if `request.add_generation_prompt=true`.
   * @default "assistant"
   */
  readonly responseRole?: string;

  /**
   * The file path to the SSL key file.
   */
  readonly sslKeyfile?: string;

  /**
   * The file path to the SSL cert file.
   */
  readonly sslCertfile?: string;

  /**
   * The CA certificates file.
   */
  readonly sslCaCerts?: string;

  /**
   * Refresh SSL Context when SSL certificate files change.
   * @default false
   */
  readonly enableSslRefresh?: boolean;

  /**
   * Whether client certificate is required (see stdlib ssl module's).
   * @default 0
   */
  readonly sslCertReqs?: number;

  /**
   * FastAPI root_path when app is behind a path based routing proxy.
   */
  readonly rootPath?: string;

  /**
   * Additional ASGI middleware to apply to the app.
   * We accept multiple –middleware arguments. The value should be an import path.
   * If a function is provided, vLLM will add it to the server using `@app.middleware('http')`.
   * If a class is provided, vLLM will add it to the server using `app.add_middleware()`.
   * @default []
   */
  readonly middleware?: string[];

  /**
   * When `--max-logprobs` is specified,
   * represents single tokens as strings of the form 'token_id:{token_id}' so that tokens that are not JSON-encodable can be identified..
   * @default false
   */
  readonly returnTokensAsTokenIds?: boolean;

  /**
   * If specified, will run the OpenAI frontend server in the same process as the model serving engine.
   * @default false
   */
  readonly disableFrontendMultiprocessing?: boolean;

  /**
   * If specified, API server will add X-Request-Id header to responses.
   *
   * Caution: this hurts performance at high QPS.
   * @default false
   */
  readonly enableRequestIdHeaders?: boolean;

  /**
   * Enable auto tool choice for supported models.
   * Use `--tool-call-parser` to specify which parser to use.
   * @default false
   */
  readonly enableAutoToolChoice?: boolean;

  /**
   * Select the tool call parser depending on the model that you’re using.
   * This is used to parse the model-generated tool call into OpenAI API format.
   *
   * Required for `--enable-auto-tool-choice`.
   */
  readonly toolCallParser?: ToolCallParser;

  /**
   * Specify the tool parser plugin.
   * @default ""
   */
  readonly toolParserPlugin?: string;

  /**
   * Name or path of the huggingface model to use.
   * @default "facebook/opt-125m"
   */
  readonly model?: string;

  /**
   * The task to use the model for.
   * Each vLLM instance only supports one task, even if the same model can be used for multiple tasks.
   * When the model only supports one task, "auto" can be used to select it; otherwise,
   * you must specify explicitly which task to use.
   * @default VllmTask.AUTO
   */
  readonly task?: VllmTask;

  /**
   * Name or path of the huggingface tokenizer to use.
   * If unspecified, model name or path will be used.
   */
  readonly tokenizer?: string;

  /**
   * Name or path of the huggingface config to use.
   * If unspecified, model name or path will be used.
   */
  readonly hfConfigPath?: string;

  /**
   * Skip initialization of tokenizer and detokenizer.
   * Expects valid prompt_token_ids and None for prompt from the input.
   * The generated output will contain token ids.
   * @default false
   */
  readonly skipTokenizerInit?: boolean;

  /**
   * The specific model version to use. It can be a branch name, a tag name, or a commit id.
   * If unspecified, will use the default version.
   */
  readonly revision?: string;

  /**
   * The specific revision to use for the model code on Hugging Face Hub.
   * It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.
   */
  readonly codeRevision?: string;

  /**
   * Revision of the huggingface tokenizer to use.
   * It can be a branch name, a tag name, or a commit id. If unspecified, will use the default version.
   */
  readonly tokenizerRevision?: string;

  /**
   * The tokenizer mode.
   * @default TokenizerMode.AUTO
   */
  readonly tokenizerMode?: TokenizerMode;

  /**
   * Trust remote code from huggingface.
   * @default false
   */
  readonly trustRemoteCode?: boolean;

  /**
   * Allowing API requests to read local images or videos from directories specified by the server file system.
   * This is a security risk. Should only be enabled in trusted environments.
   */
  readonly allowedLocalMediaPath?: string;

  /**
   * The format of the model config to load.
   * @default ConfigFormat.AUTO
   */
  readonly configFormat?: ConfigFormat;

  /**
   * Data type for model weights and activations.
   * @default DataType.AUTO
   */
  readonly dtype?: DataType;

  /**
   * Model context length.
   */
  readonly maxModelLen?: number;

  /**
   * Optional regex pattern specifying valid logits processor qualified names that can be passed
   * with the logits_processors extra completion argument. Defaults to None, which allows no processors.
   */
  readonly logitsProcessorPattern?: string;

  /**
   * Which implementation of the model to use.
   * @default ModelImpl.AUTO
   */
  readonly modelImpl?: ModelImpl;

  /**
   * Disables sliding window, capping to sliding window size.
   * @default false
   */
  readonly disableSlidingWindow?: boolean;

  /**
   * Block manager v1 has been removed and SelfAttnBlockSpaceManager (i.e. block manager v2) is now the default.
   * @default true
   * @deprecated Setting this flag to True or False has no effect on vLLM behavior.
   */
  readonly useV2BlockManager?: boolean;

  /**
   * Random seed for operations.
   */
  readonly seed?: number;

  /**
   * Max number of log probs to return logprobs is specified in SamplingParams.
   * @default 20
   */
  readonly maxLogprobs?: number;

  /**
   * Disable logging statistics.
   * @default false
   */
  readonly disableLogStats?: boolean;

  /**
   * Method used to quantize the weights.
   * If None, we first check the quantization_config attribute in the model config file.
   * If that is None, we assume the model weights are not quantized and use dtype to determine the data type of the weights.
   */
  readonly quantization?: Quantization;

  /**
   * RoPE scaling configuration in JSON format.
   * @example {"rope_type":"dynamic","factor":2.0}
   */
  readonly ropeScaling?: { [key: string]: any };

  /**
   * RoPE theta. Use with rope_scaling.
   * In some cases, changing the RoPE theta improves the performance of the scaled model.
   */
  readonly ropeTheta?: number;

  /**
   * The token to use as HTTP bearer authorization for remote files.
   * If provided, the Secret will be passed as HF_TOKEN environment variable.
   * 
   * To use the token generated when running huggingface-cli login (stored in ~/.huggingface),
   * set the `--hf-token` flag directly in the command line arguments.
   */
  readonly hfToken?: import("aws-cdk-lib/aws-secretsmanager").ISecret;

  /**
   * Extra arguments for the HuggingFace config.
   * This should be a object that will be parsed into a dictionary.
   */
  readonly hfOverrides?: { [key: string]: any };

  /**
   * Always use eager-mode PyTorch.
   * If False, will use eager mode and CUDA graph in hybrid for maximal performance and flexibility.
   * @default false
   */
  readonly enforceEager?: boolean;

  /**
   * Maximum sequence length covered by CUDA graphs.
   * When a sequence has context length larger than this, we fall back to eager mode.
   * Additionally for encoder-decoder models, if the sequence length of the encoder input is larger than this,
   * we fall back to the eager mode.
   * @default 8192
   */
  readonly maxSeqLenToCapture?: number;

  /**
   * Overrides for the multimodal input mapping/processing, e.g., image processor.
   * @example {"num_crops": 4}
   */
  readonly mmProcessorKwargs?: { [key: string]: any };

  /**
   * If true, then disables caching of the multi-modal preprocessor/mapper. (not recommended)
   * @default false
   */
  readonly disableMmPreprocessorCache?: boolean;

  /**
   * The pattern(s) to ignore when loading the model.Default to original/**\/* to avoid
   * repeated loading of llama’s checkpoints.
   * @default []
   */
  readonly ignorePatterns?: string[];

  /**
   * The model name(s) used in the API.
   * If multiple names are provided, the server will respond to any of the provided names.
   * The model name in the model field of a response will be the first name in this list.
   * If not specified, the model name will be the same as the `--model` argument.
   * Noted that this name(s) will also be used in model_name tag content of prometheus metrics,
   * if multiple names provided, metrics tag will take the first one.
   */
  readonly servedModelName?: string[];

  /**
   * Name or path of the QLoRA adapter.
   */
  readonly qloraAdapterNameOrPath?: string;

  /**
   * Enable deprecated Prometheus metrics that have been hidden since the specified version.
   * For example, if a previously deprecated metric has been hidden since the v0.7.0 release,
   * you use –show-hidden-metrics-for-version=0.7 as a temporary escape hatch while you migrate to new metrics.
   * The metric is likely to be removed completely in an upcoming release.
   */
  readonly showHiddenMetricsForVersion?: string;

  /**
   * Target URL to which OpenTelemetry traces will be sent.
   */
  readonly otlpTracesEndpoint?: string;

  /**
   * Valid choices are model,worker,all.
   * It makes sense to set this only if --otlp-traces-endpoint is set.
   * If set, it will collect detailed traces for the specified modules.
   * This involves use of possibly costly and or blocking operations and hence might have a performance impact.
   */
  readonly collectDetailedTraces?: string;

  /**
   * Disable async output processing. This may result in lower performance.
   * @default false
   */
  readonly disableAsyncOutputProc?: boolean;

  /**
   * The scheduler class to use.
   * @default "vllm.core.scheduler.Scheduler"
   */
  readonly schedulerCls?: string;

  /**
   * Override or set neuron device configuration.
   * @example {"cast_logits_dtype": "bloat16"}
   */
  readonly overrideNeuronConfig?: { [key: string]: any };

  /**
   * Override or set the pooling method for pooling models.
   * @example {"pooling_type": "mean", "normalize": false}
   */
  readonly overridePoolerConfig?: { [key: string]: any };

  /**
   * torch.compile configuration for the model.
   * When it is a number (0, 1, 2, 3), it will be interpreted as the optimization level.
   *
   * NOTE: level 0 is the default level without any optimization.
   * level 1 and 2 are for internal testing only. level 3 is the recommended level for production.
   * To specify the full compilation config, use a JSON string,
   * e.g. `{"level": 3, "cudagraph_capture_sizes": [1, 2, 4, 8]}` Following the convention of traditional compilers,
   * using -O without space is also supported. -O3 is equivalent to -O 3.
   */
  readonly compilationConfig?: { [key: string]: any };

  /**
   * Configurations for distributed KV cache transfer in object.
   */
  readonly kvTransferConfig?: { [key: string]: any };

  /**
   * The worker class to use for distributed execution.
   * @default "auto"
   */
  readonly workerCls?: string;

  /**
   * The worker extension class.
   * @default ""
   */
  readonly workerExtensionCls?: string;

  /**
   * The folder path to the generation config. Defaults to ‘auto’,
   * the generation config will be loaded from model path. If set to ‘vllm’,
   * no generation config is loaded, vLLM defaults will be used.
   * If set to a folder path, the generation config will be loaded from the specified folder path.
   * If max_new_tokens is specified in generation config,
   * then it sets a server-wide limit on the number of output tokens for all requests.
   * @default "auto"
   */
  readonly generationConfig?: string;

  /**
   * Overrides or sets generation config.
   * If used with –generation-config=auto, the override parameters will be merged with the default config from the model.
   * If generation-config is None, only the override parameters are used.
   * @example {"temperature": 0.5}
   */
  readonly overrideGenerationConfig?: { [key: string]: any };

  /**
   * Enable sleep mode for the engine. (only cuda platform is supported)
   * @default false
   */
  readonly enableSleepMode?: boolean;

  /**
   * Additional config for specified platform.
   * Different platforms may support different configs.
   * Make sure the configs are valid for the platform you are using.
   * The input format is like ‘{“config_key”:”config_value”}’
   */
  readonly additionalConfig?: { [key: string]: any };

  /**
   * Enable reasoning_content for the model.
   * @default false
   */
  readonly enableReasoning?: boolean;

  /**
   * Disable cascade attention for V1.
   * @default false
   */
  readonly disableCascadeAttn?: boolean;

  /**
   * Disable logging requests.
   * @default false
   */
  readonly disableLogRequests?: boolean;

  /**
   * Max number of prompt characters or prompt ID numbers in log.
   */
  readonly maxLogLen?: number;

  /**
   * Disable FastAPI's OpenAPI schema, Swagger UI, and ReDoc endpoint.
   * @default false
   */
  readonly disableFastApiDocs?: boolean;

  /**
   * Enable prompt_tokens_details in usage.
   * @default false
   */
  readonly enablePromptTokensDetails?: boolean;

  /**
   * Enable tracking server_load_metrics in the app state.
   * @default false
   */
  readonly enableServerLoadTracking?: boolean;
}

/**
 * Configuration for loading the model weights.
 */
export interface VllmLoadConfig {
  /**
   * The format of the model weights to load:
   * - “auto” will try to load the weights in the safetensors format and fall back to the pytorch bin format if safetensors format is not available.
   * - “pt” will load the weights in the pytorch bin format.
   * - “safetensors” will load the weights in the safetensors format.
   * - “npcache” will load the weights in pytorch format and store a numpy cache to speed up the loading.
   * - “dummy” will initialize the weights with random values, which is mainly for profiling.
   * - “tensorizer” will use CoreWeave’s tensorizer library for fast weight loading. See the Tensorize vLLM Model script in the Examples section for more information.
   * - “runai_streamer” will load the Safetensors weights using Run:ai Model Streamer.
   * - “bitsandbytes” will load the weights using bitsandbytes quantization.
   * - “sharded_state” will load weights from pre-sharded checkpoint files, supporting efficient loading of tensor-parallel models.
   * - “gguf” will load weights from GGUF format files (details specified in ggml-org/ggml).
   * - “mistral” will load weights from consolidated safetensors files used by Mistral models.
   * @default LoadFormat.AUTO
   */
  readonly loadFormat?: LoadFormat;

  /**
   * Directory to download and load the weights, default to the default cache directory of Hugging Face.
   */
  readonly downloadDir?: string;

  /**
   * Extra config for model loader. This will be passed to the model loader corresponding to the chosen load_format.
   * This should be a object that will be parsed into a dictionary.
   * @default {}
   */
  readonly modelLoaderExtraConfig?: { [key: string]: any };

  /**
   * Whether to enable tqdm for showing progress bar when loading model weights.
   * @default true
   */
  readonly useTqdmOnLoad?: boolean;
}

/**
 * Dataclass which contains the decoding strategy of the engine.
 */
export interface VllmDecodingConfig {
  /**
   * Which engine will be used for guided decoding (JSON schema / regex etc) by default.
   * With “auto”, we will make opinionated choices based on request contents and what the backend libraries currently support,
   * so the behavior is subject to change in each release.
   * @default GuidedDecodingBackend.AUTO
   */
  readonly guidedDecodingBackend?: GuidedDecodingBackend;

  /**
   * Select the reasoning parser depending on the model that you’re using.
   * This is used to parse the reasoning content into OpenAI API format. Required for –enable-reasoning.
   */
  readonly reasoningParser?: ReasoningParser;
}

/**
 * Configuration for the distributed execution.
 */
export interface VllmParallelConfig {
  /**
   * Backend to use for distributed model workers, either “ray” or “mp” (multiprocessing).
   * If the product of pipeline_parallel_size and tensor_parallel_size is less than or equal to the number of GPUs available,
   * “mp” will be used to keep processing on a single host. Otherwise, this will default to “ray” if Ray is installed and fail otherwise.
   * Note that tpu and hpu only support Ray for distributed inference.
   */
  readonly distributedExecutorBackend?: DistributedExecutorBackend;

  /**
   * Number of pipeline parallel groups.
   * @default 1
   */
  readonly pipelineParallelSize?: number;

  /**
   * Number of tensor parallel groups.
   * @default 1
   */
  readonly tensorParallelSize?: number;

  /**
   * Number of data parallel groups.
   * MoE layers will be sharded according to the product of the tensor parallel size and data parallel size.
   * @default 1
   */
  readonly dataParallelSize?: number;

  /**
   * Use expert parallelism instead of tensor parallelism for MoE layers.
   * @default false
   */
  readonly enableExpertParallel?: boolean;

  /**
   * Maximum number of parallal loading workers when loading model sequentially in multiple batches.
   * To avoid RAM OOM when using tensor parallel and large models.
   */
  readonly maxParallelLoadingWorkers?: number;

  /**
   * Whether to profile Ray workers with nsight.
   * @see https://docs.ray.io/en/latest/ray-observability/user-guides/profiling.html#profiling-nsight-profiler
   * @default false
   */
  readonly rayWorkersUseNsight?: boolean;

  /**
   * Disable the custom all-reduce kernel and fall back to NCCL.
   * @default false
   */
  readonly disableCustomAllReduce?: boolean;
}

/**
 * Configuration for the KV cache.
 */
export interface VllmCacheConfig {
  /**
   * Size of a contiguous cache block in number of tokens.
   * This is ignored on neuron devices and set to –max-model-len. On CUDA devices, only block sizes up to 32 are supported.
   * On HPU devices, block size defaults to 128.
   */
  readonly blockSize?: BlockSize;

  /**
   * The fraction of GPU memory to be used for the model executor, which can range from 0 to 1.
   * For example, a value of 0.5 would imply 50% GPU memory utilization.
   * If unspecified, will use the default value of 0.9. This is a per-instance limit,
   * and only applies to the current vLLM instance.
   * It does not matter if you have another vLLM instance running on the same GPU. For example,
   * if you have two vLLM instances running on the same GPU, you can set the GPU memory utilization to 0.5 for each instance.
   * @default 0.9
   */
  readonly gpuMemoryUtilization?: number;

  /**
   * Size of the CPU swap space per GPU (in GiB).
   * @default 4
   */
  readonly swapSpace?: number;

  /**
   * Data type for kv cache storage. If “auto”, will use model data type.
   * CUDA 11.8+ supports fp8 (=fp8_e4m3) and fp8_e5m2. ROCm (AMD GPU) supports fp8 (=fp8_e4m3).
   * @default KvCacheDtype.AUTO
   */
  readonly kvCacheDtype?: KvCacheDtype;

  /**
   * Number of GPU blocks to use. This overrides the profiled num_gpu_blocks if specified.
   * Does nothing if None. Used for testing preemption.
   */
  readonly numGpuBlocksOverride?: number;

  /**
   * Whether to enable prefix caching. Disabled by default for V0. Enabled by default for V1.
   */
  readonly enablePrefixCaching?: boolean;

  /**
   * Set the hash algorithm for prefix caching.
   * @default PrefixCachingHashAlgo.BUILTIN
   */
  readonly prefixCachingHashAlgo?: PrefixCachingHashAlgo;

  /**
   * The space in GiB to offload to CPU, per GPU.
   * Default is 0, which means no offloading. Intuitively,
   * this argument can be seen as a virtual way to increase the GPU memory size.
   * For example, if you have one 24 GB GPU and set this to 10, virtually you can think of it as a 34 GB GPU.
   * Then you can load a 13B model with BF16 weight, which requires at least 26GB GPU memory.
   *
   * Note that this requires fast CPU-GPU interconnect,
   * as part of the model is loaded from CPU memory to GPU memory on the fly in each model forward pass.
   * @default 0
   */
  readonly cpuOffloadGb?: number;

  /**
   * This enables dynamic calculation of k_scale and v_scale when kv_cache_dtype is fp8.
   * If False, the scales will be loaded from the model checkpoint if available. Otherwise, the scales will default to 1.0.
   * @default false
   */
  readonly calculateKvScales?: boolean;
}

/**
 * Controls the behavior of multimodal models.
 */
export interface VllmMultiModalConfig {
  /**
   * The maximum number of input items allowed per prompt for each modality.
   * This should be a object that will be parsed into a dictionary. Defaults to 1 (V0) or 999 (V1) for each modality.
   * @default {}
   */
  readonly limitMmPerPrompt?: { [key: string]: any };
}

/**
 * Configuration for LoRA.
 */
export interface VllmLoraConfig {
  /**
   * If True, enable handling of LoRA adapters.
   * @default false
   */
  readonly enableLora?: boolean;

  /**
   * If True, enable bias for LoRA adapters.
   * @default false
   */
  readonly enableLoraBias?: boolean;

  /**
   * Max number of LoRAs in a single batch.
   * @default 1
   */
  readonly maxLoras?: number;

  /**
   * Max LoRA rank.
   * @default 16
   */
  readonly maxLoraRank?: number;

  /**
   * Maximum size of extra vocabulary that can be present in a LoRA adapter (added to the base model vocabulary).
   * @default 256
   */
  readonly loraExtraVocabSize?: number;

  /**
   * Data type for LoRA. If auto, will default to base model dtype.
   * @default LoraDtype.AUTO
   */
  readonly loraDtype?: LoraDtype;

  /**
   * Specify multiple scaling factors (which can be different from base model scaling factorsee eg. Long LoRA)
   * to allow for multiple LoRA adapters trained with those scaling factors to be used at the same time.
   * If not specified, only adapters trained with the base model scaling factor are allowed.
   */
  readonly longLoraScalingFactors?: number;

  /**
   * Maximum number of LoRAs to store in CPU memory. Must be >= than max_loras.
   */
  readonly maxCpuLoras?: number;

  /**
   * By default, only half of the LoRA computation is sharded with tensor parallelism.
   * Enabling this will use the fully sharded layers.
   * At high sequence length, max rank or tensor parallel size, this is likely faster.
   * @default false
   */
  readonly fullyShardedLoras?: boolean;
}

/**
 * Configuration for PromptAdapters.
 */
export interface VllmPromptAdapterConfig {
  /**
   * If True, enable handling of PromptAdapters.
   * @default false
   */
  readonly enablePromptAdapter?: boolean;

  /**
   * Max number of PromptAdapters in a batch.
   * @default 1
   */
  readonly maxPromptAdapters?: number;

  /**
   * Max number of PromptAdapters tokens.
   * @default 0
   */
  readonly maxPromptAdapterToken?: number;
}

export interface VllmDeviceConfig {
  /**
   * Device type for vLLM execution.
   * @default Device.AUTO
   */
  readonly device?: Device;
}

/**
 * Configuration for speculative decoding.
 */
export interface VllmSpeculativeConfig {
  /**
   * The configurations for speculative decoding. Should be a object.
   */
  readonly speculativeConfig?: { [key: string]: any };
}

export interface VllmSchedulerConfig {
  /**
   * Maximum number of tokens to be processed in a single iteration.
   *
   * This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.
   */
  readonly maxNumBatchedTokens?: number;

  /**
   * Maximum number of sequences to be processed in a single iteration.
   *
   * This config has no static default. If left unspecified by the user, it will be set in EngineArgs.create_engine_config based on the usage context.
   */
  readonly maxNumSeqs?: number;

  /**
   * For chunked prefill, the maximum number of sequences that can be partially prefilled concurrently.
   * @default 1
   */
  readonly maxNumPartialPrefills?: number;

  /**
   * For chunked prefill, the maximum number of prompts longer than long_prefill_token_threshold that will be prefilled concurrently.
   * Setting this less than max_num_partial_prefills will allow shorter prompts to jump the queue in front of longer prompts in some cases, improving latency.
   * @default 1
   */
  readonly maxLongPartialPrefills?: number;

  /**
   * For chunked prefill, a request is considered long if the prompt is longer than this number of tokens.
   * @default 0
   */
  readonly longPrefillTokenThreshold?: number;

  /**
   * The number of slots to allocate per sequence per step,
   * beyond the known token ids. This is used in speculative decoding to store KV activations of tokens
   * which may or may not be accepted.
   *
   * NOTE: This will be replaced by speculative config in the future; it is present to enable correctness tests until then.
   * @default 0
   */
  readonly numLookaheadSlots?: number;

  /**
   * Apply a delay (of delay factor multiplied by previous prompt latency) before scheduling next prompt.
   * @default 0.0
   */
  readonly schedulerDelayFactor?: number;

  /**
   * Whether to perform preemption by swapping or recomputation.
   * If not specified, we determine the mode as follows:
   * We use recomputation by default since it incurs lower overhead than swapping.
   * However, when the sequence group has multiple sequences (e.g., beam search),
   * recomputation is not currently supported. In such a case, we use swapping instead.
   */
  readonly preemptionMode?: PreemptionMode;

  /**
   * Maximum number of forward steps per scheduler call.
   * @default 1
   */
  readonly numSchedulerSteps?: number;

  /**
   * If False, then multi-step will stream outputs at the end of all steps
   * @default true
   */
  readonly multiStepStreamOutputs?: boolean;

  /**
   * The scheduling policy to use:
   * - “fcfs” means first come first served, i.e. requests are handled in order of arrival.
   * - “priority” means requests are handled based on given priority (lower value means earlier handling) and time of arrival deciding any ties).
   * @default SchedulingPolicy.FCFS
   */
  readonly schedulingPolicy?: SchedulingPolicy;

  /**
   * If True, prefill requests can be chunked based on the remaining max_num_batched_tokens.
   */
  readonly enableChunkedPrefill?: boolean;

  /**
   * If set to true and chunked prefill is enabled, we do not want to partially schedule a multimodal item.
   * Only used in V1 This ensures that if a request has a mixed prompt (like text tokens TTTT followed by image tokens IIIIIIIIII)
   * where only some image tokens can be scheduled (like TTTTIIIII, leaving IIIII),
   * it will be scheduled as TTTT in one step and IIIIIIIIII in the next.
   * @default false
   */
  readonly disableChunkedMmInput?: boolean;
}

/**
 * Interface for vLLM server command line arguments
 */
export interface VllmEngineArguments
  extends VllmNamedArguments,
    VllmLoadConfig,
    VllmDecodingConfig,
    VllmParallelConfig,
    VllmCacheConfig,
    VllmMultiModalConfig,
    VllmLoraConfig,
    VllmPromptAdapterConfig,
    VllmDeviceConfig,
    VllmSpeculativeConfig,
    VllmSchedulerConfig {}

const jsonValueProperties: (keyof VllmEngineArguments)[] = [
  "allowedOrigins",
  "allowedHeaders",
  "allowedMethods",
];

export abstract class VllmEngineArgumentsParser {
  /**
   * Convert vLLM engine arguments (camel case) to config (kebab case)
   * @param args vLLM engine arguments
   * @returns vLLM engine config
   * @see https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html#configuration-file
   */
  static config(args: VllmEngineArguments) {
    return Object.entries(args)
      .filter(([key]) => key !== "model")
      .reduce<{ [key in string]: any }>((prev, [key, value]) => {
        const k = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
        // Skip Secret objects as they will be handled through environment variables
        if (key === "hfToken" && value) {
          return prev;
        }
        if (
          jsonValueProperties.includes(key as keyof VllmEngineArguments) ||
          (!Array.isArray(value) && typeof value === "object")
        ) {
          value = JSON.stringify(value);
        }
        prev[k] = value;
        return prev;
      }, {});
  }
  static cli(args: VllmEngineArguments) {
    return Object.entries(args)
      .filter(([key]) => key !== "model")
      .flatMap(([k, value]) => {
        const key = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
        // Skip Secret objects as they will be handled through environment variables
        if (key === "hfToken" && value) {
          return [];
        }
        if (typeof value === "boolean") {
          return value ? [`--${key}`] : [];
        }
        if (Array.isArray(value)) {
          return [`--${key}`, ...value.map((v) => `${v}`)];
        }
        if (typeof value === "object") {
          return [`--${key}`, `'${JSON.stringify(value)}'`];
        }
        return [`--${key}`, `${value}`];
      });
  }
}
