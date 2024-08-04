import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, CfnOutput, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Model, NeuronxCompile, OptLevel, QuantDtype } from "../src";

const app = new App();
const stack = new Stack(app, "Calm3CompileStack");
const vpc = new Vpc(stack, "VPC");
const bucket = new Bucket(stack, "Bucket", {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});
const compile = new NeuronxCompile(stack, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("cyberagent/calm3-22b-chat"),
  compileOptions: {
    optLevel: OptLevel.MINIMIZING_COMPILE_TIME,
  },
});
new CfnOutput(stack, "CompiledArtifact", {
  value: compile.compiledArtifactS3Url,
});

const quantCompile = new NeuronxCompile(stack, "NeuronxQuantCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("cyberagent/calm3-22b-chat"),
  compileOptions: {
    nPositions: 1024,
    quantDtype: QuantDtype.S8,
    optLevel: OptLevel.MINIMIZING_COMPILE_TIME,
  },
  spot: true,
});
new CfnOutput(stack, "QuantCompiledArtifact", {
  value: quantCompile.compiledArtifactS3Url,
});

new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
