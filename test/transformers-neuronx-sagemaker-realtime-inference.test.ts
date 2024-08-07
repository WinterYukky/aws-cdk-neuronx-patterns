import { App, CfnOutput, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import {
  Model,
  NeuronxCompile,
  TransformersNeuronxSageMakerInferenceModelData,
  TransformersNeuronxSageMakerRealtimeInferenceEndpoint,
} from "../src";

describe("TransformersNeuronxSageMakerRealtimeInferenceEndpoint", () => {
  it("The properties are set from NeuronxCompile", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    const compile = new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model-7b"),
    });
    new CfnOutput(stack, "hoge", {
      value: compile.compiledArtifactS3Prefix,
    });
    new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(
      stack,
      "Endpoint",
      {
        modelData:
          TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile(
            compile,
          ),
      },
    );
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::Batch::ComputeEnvironment", {
      ComputeResources: {
        InstanceTypes: ["inf2.8xlarge"],
      },
    });
    template.hasResourceProperties("AWS::Batch::JobDefinition", {
      ContainerProperties: {
        Environment: [
          {
            Name: "MODEL_ID",
            Value: "example/example-model-7b",
          },
          {
            Name: "TP_DEGREE",
            Value: "1",
          },
          {
            Name: "N_POSITIONS",
            Value: "4096",
          },
          {
            Name: "OPT_LEVEL",
            Value: "2",
          },
          {
            Name: "QUANT_DTYPE",
            Value: "",
          },
          {
            Name: "ARTIFACT_S3_URL",
            Value: {
              "Fn::Join": [
                "",
                [
                  "s3://",
                  {
                    Ref: "Bucket83908E77",
                  },
                  "/example/example-model-7b/neuronx-2.19.1/tp1-np4096-opt2",
                ],
              ],
            },
          },
        ],
      },
    });
  });
});
