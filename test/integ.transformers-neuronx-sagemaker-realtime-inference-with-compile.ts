import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import {
  Model,
  NeuronxCompile,
  OptLevel,
  QuantDtype,
  TransformersNeuronxSageMakerInferenceModelData,
  TransformersNeuronxSageMakerRealtimeInferenceEndpoint,
} from "../src";

const app = new App();
const stack = new Stack(
  app,
  "IntegTransformersNeuronxSageMakerRealtimeInferenceWithCompileStack",
);
const vpc = new Vpc(stack, "Vpc");
const bucket = new s3.Bucket(stack, "Bucket", {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});
const compile = new NeuronxCompile(stack, "NeuronxCompile", {
  vpc,
  bucket,
  model: Model.fromHuggingFace("cyberagent/calm3-22b-chat"),
  compileOptions: {
    optLevel: OptLevel.MINIMIZING_COMPILE_TIME,
    nPositions: 1024,
    quantDtype: QuantDtype.S8,
  },
});
new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(
  stack,
  "RealtimeInference",
  {
    modelData:
      TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile(
        compile,
      ),
  },
);

new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
