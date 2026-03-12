# Neuronx patterns Construct Library

> [!WARNING]
> This library is experimental module.

This library provides high-level architectural patterns using AWS Neuronx (e.g. Inferentia2 and Trainium1). It contains:

- vLLM with NxD Inference on ALB & ECS on EC2
- Neuronx Compiler

[日本語版 README はこちら](./README.ja.md)

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [vLLM NxD Inference on ALB & ECS on EC2](#vllm-nxd-inference-on-alb--ecs-on-ec2)
  - [Architecture](#architecture)
  - [Basic Usage](#basic-usage)
  - [Complete Example](#complete-example)
  - [Using Specific Official AWS Neuron vLLM Image Version](#using-specific-official-aws-neuron-vllm-image-version)
  - [Using HuggingFace Token with Secrets](#using-huggingface-token-with-secrets)
- [Neuronx Compiler](#neuronx-compiler)
  - [Spot Instance](#spot-instance)
- [API Reference](#api-reference)
- [Cost Considerations](#cost-considerations)
- [Troubleshooting](#troubleshooting)
- [Security Best Practices](#security-best-practices)
- [License](#license)

## Installation

```bash
# NPM
npm i aws-cdk-neuronx-patterns

# yarn
yarn add aws-cdk-neuronx-patterns

# PNPM
pnpm i aws-cdk-neuronx-patterns
```

## Quick Start

Here's a minimal example to deploy a vLLM inference service:

```ts
import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import {
  VllmNxdInferenceCompiler,
  VllmNxdInferenceTaskDefinition,
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
} from "aws-cdk-neuronx-patterns";

const app = new cdk.App();
const stack = new cdk.Stack(app, "VllmInferenceStack");

const vpc = new ec2.Vpc(stack, "Vpc", { maxAzs: 2 });
const bucket = new s3.Bucket(stack, "ModelBucket");

const compiler = new VllmNxdInferenceCompiler(stack, "Compiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct"),
});

const compiledModel = compiler.compile();
const taskDefinition = new VllmNxdInferenceTaskDefinition(stack, "TaskDef", {
  compiledModel,
});

const service = new ApplicationLoadBalancedVllmNxDInferenceService(
  stack,
  "Service",
  { vpc, taskDefinition }
);

new cdk.CfnOutput(stack, "LoadBalancerDNS", {
  value: service.loadBalancer.loadBalancerDnsName,
});
```

## vLLM NxD Inference on ALB & ECS on EC2

> [!WARNING]
> This construct uses an Inferentia2 instance on EC2 for inference. You may need to increase your service quota for Inferentia2 instances in your AWS account via the [Service Quotas console](https://console.aws.amazon.com/servicequotas/).

> [!NOTE]
> Model compilation is performed on standard (non-Neuron) EC2 instances via cross-compilation, so no Inferentia/Trainium quota is needed for the compilation phase.

This pattern combines `VllmNxdInferenceCompiler` for model compilation and `ApplicationLoadBalancedVllmNxDInferenceService` for deployment. Models published on HuggingFace can be easily compiled and deployed to ECS with Application Load Balancer.

### Architecture

![ApplicationLoadBalancedVllmNxDInferenceService architecture](./docs/application-load-balanced-vllm-nxd-inference-service.png)

The construct automatically:

- Calculates optimal tensor parallelism based on model size
- Configures memory footprint for the ECS tasks
- Sets up the Application Load Balancer with health checks
- Deploys the compiled model to ECS tasks
- Configures auto-scaling policies

The service exposes a REST API endpoint through the Application Load Balancer that can be used to perform inference with the deployed model.

### Basic Usage

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import {
  VllmNxdInferenceCompiler,
  VllmNxdInferenceTaskDefinition,
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
} from "aws-cdk-neuronx-patterns";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;

const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct"),
});

const compiledModel = compiler.compile();
const taskDefinition = new VllmNxdInferenceTaskDefinition(
  this,
  "TaskDefinition",
  {
    compiledModel,
  }
);

const service = new ApplicationLoadBalancedVllmNxDInferenceService(
  this,
  "Service",
  {
    vpc,
    taskDefinition,
  }
);
```

### Complete Example

Here's a complete example with VPC and S3 bucket creation, including access from other ECS tasks:

```ts
import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as s3 from "aws-cdk-lib/aws-s3";
import {
  VllmNxdInferenceCompiler,
  VllmNxdInferenceTaskDefinition,
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
} from "aws-cdk-neuronx-patterns";

export class MyVllmStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, "Vpc", {
      maxAzs: 2,
      natGateways: 1,
    });

    // Create S3 bucket for compiled models
    const bucket = new s3.Bucket(this, "ModelBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Compile the model
    const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct"),
    });

    const compiledModel = compiler.compile();

    // Create task definition
    const taskDefinition = new VllmNxdInferenceTaskDefinition(
      this,
      "TaskDefinition",
      {
        compiledModel,
      }
    );

    // Deploy service with ALB
    const service = new ApplicationLoadBalancedVllmNxDInferenceService(
      this,
      "Service",
      {
        vpc,
        taskDefinition,
      }
    );

    // Allow access from other ECS tasks
    const cluster = new ecs.Cluster(this, "AppCluster", { vpc });
    const appTaskDefinition = new ecs.FargateTaskDefinition(
      this,
      "AppTaskDefinition"
    );
    appTaskDefinition.addContainer("app", {
      image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      logging: ecs.LogDrivers.awsLogs({ streamPrefix: "app" }),
    });

    const appService = new ecs.FargateService(this, "AppService", {
      cluster,
      taskDefinition: appTaskDefinition,
    });

    // Allow application service to access inference service
    service.service.connections.allowFrom(
      appService,
      ec2.Port.tcp(8000),
      "Allow access from application service"
    );

    // Output the load balancer URL
    new cdk.CfnOutput(this, "LoadBalancerURL", {
      value: `http://${service.loadBalancer.loadBalancerDnsName}`,
      description: "Load Balancer URL for inference endpoint",
    });
  }
}
```

### Using Specific Official AWS Neuron vLLM Image Version

This library supports the official AWS Neuron Deep Learning Containers for vLLM inference. You can use the `VllmInferenceNeuronxImage` class to reference these images and `VllmNxdInferenceImage.fromNeuronSdkVersion` to create a compatible image object:

```typescript
import { VllmNxdInferenceImage, VllmInferenceNeuronxImage } from "aws-cdk-neuronx-patterns";

// Use the official vLLM Neuron Image
const vllmImage = VllmNxdInferenceImage.fromNeuronSdkVersion(
  VllmInferenceNeuronxImage.SDK_2_26_0
);

// Use with task definition
const taskDefinition = new VllmNxdInferenceTaskDefinition(
  this,
  "TaskDefinition",
  {
    compiledModel,
    image: vllmImage, // Default is using latest official vLLM Neuron Image
  }
);
```

### Using HuggingFace Token with Secrets

When working with private or gated models on HuggingFace, you need to provide an authentication token. For security best practices, store your HuggingFace token in AWS Secrets Manager and pass it to both the compiler and inference environments:

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as batch from "aws-cdk-lib/aws-batch";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import {
  VllmNxdInferenceCompiler,
  VllmNxdInferenceTaskDefinition,
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
} from "aws-cdk-neuronx-patterns";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;

// Reference an existing secret containing your HuggingFace token
const hfTokenSecret = Secret.fromSecretNameV2(
  this,
  "HFTokenSecret",
  "my-huggingface-token"
);
const hfToken = batch.Secret.fromSecretsManager(hfTokenSecret, "readonlyToken");

// Pass the secret to the compiler
const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("meta-llama/Meta-Llama-3-8B"),
  vllmArgs: {
    hfToken, // Pass the HF token secret here
  },
});

const compiledModel = compiler.compile();
const taskDefinition = new VllmNxdInferenceTaskDefinition(
  this,
  "TaskDefinition",
  {
    compiledModel,
  }
);

const service = new ApplicationLoadBalancedVllmNxDInferenceService(
  this,
  "Service",
  {
    vpc,
    taskDefinition,
  }
);
```

The secret will be securely passed as an environment variable to the compilation batch job and the ECS tasks running the inference server.

## Neuronx Compiler

> [!WARNING]
> This construct uses an Inferentia2 instance on EC2. You may need to increase your service quota for Inferentia2 instances in your AWS account.

This construct compiles models supported by Neuronx and uploads them to the specified S3 bucket. The construct automatically selects the required instance type based on the number of model parameters.

There are two compiler variants:

- **`NeuronxNativeCompiler`** — Compiles on Neuron instances (Inferentia2/Trainium). Requires Neuron device quota.
- **`NeuronxCrossCompiler`** — Compiles on standard EC2 instances (e.g., `c7i-flex.4xlarge`) without Neuron hardware. Used by `VllmNxdInferenceCompiler` by default.

Both implement the `INeuronxCompiler` interface and produce compatible artifacts.

![NeuronxCompiler architecture](./docs/neuronx-compile-architecture.png)

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import { NeuronxNativeCompiler, Model } from "aws-cdk-neuronx-patterns";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
declare const image: INeuronxContainerImage;

const compiler = new NeuronxNativeCompiler(this, "NeuronxCompiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct"),
  artifactS3Prefix: "my-compiled-artifacts",
  image,
});

const compiledModel = compiler.compile();

// Get the compiled artifacts from this S3 URL
new cdk.CfnOutput(this, "CompiledArtifact", {
  value: compiledModel.s3Url,
});
```

### Spot Instance

> [!WARNING]
> If you use Spot Instances, verify that your service quota for Spot instances has been increased.

You can reduce costs by using Spot Instances for compilation:

```ts
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import { NeuronxNativeCompiler, Model } from "aws-cdk-neuronx-patterns";

declare const vpc: ec2.Vpc;
declare const bucket: s3.Bucket;
declare const image: INeuronxContainerImage;

new NeuronxNativeCompiler(this, "NeuronxCompiler", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct"),
  artifactS3Prefix: "my-compiled-artifacts",
  image,
  spot: true, // Enable Spot Instances
});
```

## API Reference

For detailed API documentation, see [API.md](./API.md).

## Cost Considerations

> [!IMPORTANT]
> This library deploys AWS resources that incur costs:
> - **Inferentia2 instances** (EC2) - Significant hourly costs
> - **Application Load Balancer** - Hourly and data processing charges
> - **NAT Gateway** - Hourly and data processing charges
> - **S3 storage** - Storage and request charges
> - **Data transfer** - Charges for data transfer out

For cost estimates, use the [AWS Pricing Calculator](https://calculator.aws).

**Cost optimization tips:**
- The `VllmNxdInferenceCompiler` uses cross-compilation on standard EC2 instances by default, avoiding expensive Neuron instances during compilation
- Use Spot Instances for compilation jobs (can save up to 90%)
- Delete resources when not in use (`cdk destroy`)
- Use appropriate instance sizes for your workload
- Monitor usage with AWS Cost Explorer

## Troubleshooting

### Common Issues

**Issue: "Service quota exceeded for Inferentia2 instances"**
- Solution: Request a quota increase via the [Service Quotas console](https://console.aws.amazon.com/servicequotas/)
- Navigate to: EC2 → Running On-Demand Inf instances

**Issue: "Compilation job fails"**
- Check AWS Batch job logs in CloudWatch Logs
- Verify the model exists on HuggingFace
- Ensure sufficient disk space and memory for the model size

**Issue: "ECS tasks fail to start"**
- Check ECS task logs in CloudWatch
- Verify S3 bucket permissions
- Ensure the compiled model exists in S3

**Issue: "Health check failures"**
- Increase health check grace period
- Verify security group rules allow ALB to reach ECS tasks
- Check container logs for startup errors

### Debugging

View logs in CloudWatch:
```bash
# Batch job logs
aws logs tail /aws/batch/job --follow

# ECS task logs
aws logs tail /ecs/vllm-inference --follow
```

## Security Best Practices

- **Secrets Management**: Always use AWS Secrets Manager for sensitive data (HuggingFace tokens, API keys)
- **IAM Roles**: Follow the principle of least privilege for IAM roles
- **VPC Configuration**: 
  - Deploy ECS tasks in private subnets
  - Use security groups to restrict traffic
  - Enable VPC Flow Logs for monitoring
- **S3 Buckets**: 
  - Enable encryption at rest
  - Use bucket policies to restrict access
  - Enable versioning for compiled models
- **ALB**: 
  - Use HTTPS with ACM certificates in production
  - Enable access logs for auditing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This library is licensed under the Apache-2.0 License. See the [LICENSE](./LICENSE) file.
