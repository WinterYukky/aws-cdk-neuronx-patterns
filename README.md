# Neuronx patterns Construct Library

> [!WARNING]
> This library is experimental module.

This library provides high-level architectural patterns using neuronx (e.g. Inferentia2 and Trainium1). It contains:

- vLLM with NxD Inference on ALB & ECS on EC2
- Neuronx Compiler

## vLLM NxD Inference on ALB & ECS on EC2

> [!WARNING]
> This construct uses an Inferentia2 instance on ECS. You may need to increase your request limit for your AWS account.

By using the `VllmNxdInferenceCompiler` construct included in this construct library, models published on HuggingFace can be easily deployed to ECS with Application Load Balancer. To define using the `VllmNxdInferenceCompiler` construct:

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat"),
});
const compiledModel = compiler.compile();
const taskDefinition = new VllmNxdInferenceTaskDefinition(
  this,
  "TaskDefinition",
  {
    vpc,
    compiledModel,
  },
);
this.service = new ApplicationLoadBalancedVllmNxDInferenceService(
  this,
  "Service",
  {
    vpc,
    taskDefinition,
  },
);
```

This is VllmNxDInferenceApplicationLoadBalancedEc2Service architecture.
![VllmNxDInferenceApplicationLoadBalancedEc2Service architecture](./docs/vllm-nxd-inference-architecture.png)

The construct will automatically:

- Calculate optimal tensor parallelism based on model size
- Configure memory footprint for the ECS tasks
- Set up the Application Load Balancer
- Deploy the compiled model to ECS tasks
- Configure health checks and auto-scaling

The service exposes a REST API endpoint through the Application Load Balancer that can be used to perform inference with the deployed model.

## Neuronx Compiler

> [!WARNING]
> This construct uses an Inferentia2 instance on EC2. You may need to increase your request limit for your AWS account.

This construct compiles models supported by Neuronx and uploads them to the specified S3 bucket. To define

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
const compile = new NeuronxCompiler(this, "NeuronxCompiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat"),
  artifactS3Prefix: "my-compiled-artifacts",
  image:
});
const compiledModel = compiler.compile();

// Get the compiled artifacts from this S3 URL
new CfnOutput(this, "CompiledArtifact", {
  value: compiledModel.s3Url,
});
```

This construct assumes the required instance type depending on the number of model parameters.

This is NeuronxCompiler architecture.
![NeuronxCompiler architecture](./docs/neuronx-compile-architecture.png)

### Spot Instance

> [!WARNING]
> If you use Spot Instances, check if the request limit for Spot has been increased.

You can also use Spot Instances.

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
new NeuronxCompile(this, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-7b-chat"),
  spot: true,
});
```

### Compile Options

If you are familiar with Neuronx, you can also specify compilation options to better meet your requirements.

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
new NeuronxCompile(this, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("example/example-22b-chat"),
  compileOptions: {
    maxModelLength: 1024,
    quantDtype: QuantDtype.S8,
    optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
  },
});
```
