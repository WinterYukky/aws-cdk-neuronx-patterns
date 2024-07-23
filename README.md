# Neuronx patterns Construct Library

This library provides high-level architectural patterns using neuronx (e.g. Inferentia2 and Trainium1). It contains:

- Neuronx Compile

## Neuronx Compile

:::note warn
This construct uses an Inferentia2 instance on EC2. You may need to increase your request limit for your AWS account.
:::

This construct compiles models supported by Neuronx and uploads them to the specified S3 bucket.

This is NeuronxCompile architecture.
![NeuronxCompile architecture](./docs/neuronx-compile-architecture.png)

To define

```ts
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";

declare const vpc: Vpc;
declare const bucket: Bucket;
const compile = new NeuronxCompile(stack, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat", {
    parameters: Parameters.billion(7),
  }),
});

// Get the compiled artifacts from this S3 URL
new CfnOutput(stack, "CompiledArtifact", {
  value: compile.compiledArtifactS3Url,
});
```

This construct assumes the required instance type depending on the number of model parameters.

After compiled, you can see like the this file tree in the S3 bucket.

```txt
{compiledArtifactS3Url}/
├── model
│   ├── config.json
│   ├── tokenizer_config.json
│   ├── xxx.safetensors
│   └── xxx.safetensors
└── compiled
    ├── xxx.neff
    ├── xxx.neff
    └── xxx.neff
```

### Spot Instance

:::note warn
If you use Spot Instances, check if the request limit for Spot has been increased.
:::

You can also use Spot Instances.

```ts
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";

declare const vpc: Vpc;
declare const bucket: Bucket;
new NeuronxCompile(stack, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat", {
    parameters: Parameters.billion(7),
  }),
  spot: true,
});
```

### Compile Options

If you are familiar with Neuronx, you can also specify compilation options to better meet your requirements.

```ts
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";

declare const vpc: Vpc;
declare const bucket: Bucket;
new NeuronxCompile(stack, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-22b-chat", {
    parameters: Parameters.billion(22),
  }),
  compileOptions: {
    nPositions: 1024,
    quantDtype: QuantDtype.S8,
    optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
  },
});
```
