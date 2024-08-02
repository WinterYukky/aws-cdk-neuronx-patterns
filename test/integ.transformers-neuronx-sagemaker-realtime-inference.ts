import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deplyment from "aws-cdk-lib/aws-s3-deployment";
import {
  OptLevel,
  Parameters,
  TransformersNeuronxSageMakerInferenceModelData,
  TransformersNeuronxSageMakerRealtimeInferenceEndpoint,
} from "../src";

const app = new App();
const stack = new Stack(
  app,
  "IntegTransformersNeuronxSageMakerRealtimeInferenceStack",
);
const bucket = new s3.Bucket(stack, "Bucket", {
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
});
const deploy = new s3Deplyment.BucketDeployment(
  stack,
  "CompiledArtifactDeployment",
  {
    destinationBucket: bucket,
    sources: [
      s3Deplyment.Source.asset(
        "precompiled/cyberagent/calm3-22b-chat/neuronx-2.19.1/tp4-np4096-opt1",
      ),
    ],
    destinationKeyPrefix: "model-data/compiled",
    memoryLimit: 512,
  },
);
const inference = new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(
  stack,
  "RealtimeInference",
  {
    modelData: TransformersNeuronxSageMakerInferenceModelData.fromBucket(
      bucket,
      "model-data/",
      {
        modelIdOrPath: "cyberagent/calm3-22b-chat",
        parameters: Parameters.billion(22),
        compileOptions: {
          optLevel: OptLevel.MINIMIZING_COMPILE_TIME,
        },
      },
    ),
  },
);
inference.node.addDependency(deploy);

new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
