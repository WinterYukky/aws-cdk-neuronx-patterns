import { ExpectedResult, IntegTest } from "@aws-cdk/integ-tests-alpha";
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
const endpoint = new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(
  stack,
  "RealtimeInference",
  {
    modelData:
      TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile(
        compile,
      ),
  },
);

const integ = new IntegTest(app, "IntegTest", {
  testCases: [stack],
  diffAssets: true,
});
const output = integ.assertions.awsApiCall(
  "@aws-sdk/client-sagemaker-runtime",
  "InvokeEndpoint",
  {
    EndpointName: endpoint.endpointName,
    Body: JSON.stringify({
      messages: [
        {
          role: "system",
          content: `You are helpfull assistant.`,
        },
        {
          role: "user",
          content:
            "please answer '1+1=?'. You must answer only answer numeric.",
        },
      ],
    }),
    ContentType: "application/json",
    Accept: "application/json",
  },
);

output
  .expect(
    ExpectedResult.objectLike({
      Body: '{"generated_text": "2"}',
    }),
  )
  .waitForAssertions();
