import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import {
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
  VllmNxdInferenceCompiler,
  VllmNxdInferenceImage,
  VllmNxdInferenceTaskDefinition,
  VllmInferenceNeuronxImage
} from '../../..';

export class UsingOfficialImageExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a VPC and S3 bucket for compiled model artifacts
    const vpc = new ec2.Vpc(this, 'Vpc', { maxAzs: 2 });
    const bucket = new s3.Bucket(this, 'Bucket');

    // Choose the Hugging Face model to deploy
    const model = Model.fromHuggingFace('meta-llama/Llama-2-7b-chat-hf');

    // Compile the model for inference
    const compiler = new VllmNxdInferenceCompiler(this, 'Compiler', {
      vpc,
      bucket,
      model,
    });
    const compiledModel = compiler.compile();

    // Use the official vLLM Neuron Image
    const vllmImage = VllmNxdInferenceImage.fromImage(
      VllmInferenceNeuronxImage.LATEST
    );

    // Create task definition with the official image
    const taskDefinition = new VllmNxdInferenceTaskDefinition(
      this,
      'TaskDefinition',
      {
        vpc,
        compiledModel,
        image: vllmImage,
      }
    );

    // Deploy the service with ALB
    new ApplicationLoadBalancedVllmNxDInferenceService(this, 'Service', {
      taskDefinition,
    });
  }
}