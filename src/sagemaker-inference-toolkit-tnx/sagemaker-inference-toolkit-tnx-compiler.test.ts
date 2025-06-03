import { App, Size, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import {
  Model,
  OptLevel,
  Parameters,
  PytorchTrainingNeuronxImage,
  QuantDtype,
} from "../base/neuronx";
import {
  SageMakerInferenceToolkitTnxCompileImage,
  SageMakerInferenceToolkitTnxCompiler,
} from "./sagemaker-inference-toolkit-tnx-compiler";

describe("SageMakerInferenceToolkitTnxCompiler", () => {
  it("tp_degree=2 model", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model-16b"),
        image: new SageMakerInferenceToolkitTnxCompileImage(
          PytorchTrainingNeuronxImage.SDK_2_23_0,
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
            Value: "example/example-model-16b",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
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
                  "/example/example-model-16b/neuronx-2.23.0/tp2-np4096-opt2",
                ],
              ],
            },
          },
        ],
      },
    });
  });
  it("tp_degree=4 model", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model-17b"),
        compileOptions: {
          tpDegree: 4,
        },
        image: new SageMakerInferenceToolkitTnxCompileImage(
          PytorchTrainingNeuronxImage.SDK_2_23_0,
        ),
      },
    );
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::Batch::ComputeEnvironment", {
      ComputeResources: {
        InstanceTypes: ["inf2.24xlarge"],
      },
    });
    template.hasResourceProperties("AWS::Batch::JobDefinition", {
      ContainerProperties: {
        Environment: [
          {
            Name: "MODEL_ID",
            Value: "example/example-model-17b",
          },
          {
            Name: "TP_DEGREE",
            Value: "4",
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
                  "/example/example-model-17b/neuronx-2.23.0/tp4-np4096-opt2",
                ],
              ],
            },
          },
        ],
      },
    });
  });
  it("tp_degree=4 model but when setting quant=s8 is tp_degpee=2", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model-16b"),
        compileOptions: {
          quantDtype: QuantDtype.S8,
        },
        image: new SageMakerInferenceToolkitTnxCompileImage(
          PytorchTrainingNeuronxImage.SDK_2_23_0,
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
            Value: "example/example-model-16b",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
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
            Value: "s8",
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
                  "/example/example-model-16b/neuronx-2.23.0/tp2-np4096-opt2-quants8",
                ],
              ],
            },
          },
        ],
      },
    });
  });
  it("Can use spot instance", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model-16b"),
        spot: true,
      },
    );
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::Batch::ComputeEnvironment", {
      ComputeResources: {
        InstanceTypes: ["inf2.8xlarge"],
        Type: "SPOT",
      },
    });
  });
  it("Can set volume size", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model", {
          parameters: Parameters.billion(16),
        }),
        volumeSize: Size.gibibytes(100),
        image: new SageMakerInferenceToolkitTnxCompileImage(
          PytorchTrainingNeuronxImage.SDK_2_23_0,
        ),
      },
    );
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::EC2::LaunchTemplate", {
      LaunchTemplateData: {
        BlockDeviceMappings: [
          {
            DeviceName: "/dev/xvda",
            Ebs: {
              VolumeSize: 100,
            },
          },
        ],
      },
    });
  });
  it("Can set opt_level", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new SageMakerInferenceToolkitTnxCompiler(
      stack,
      "SageMakerInferenceToolkitTnxCompiler",
      {
        vpc,
        bucket,
        model: Model.fromHuggingFace("example/example-model-16b"),
        compileOptions: {
          optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
        },
        image: new SageMakerInferenceToolkitTnxCompileImage(
          PytorchTrainingNeuronxImage.SDK_2_23_0,
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
            Value: "example/example-model-16b",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
          },
          {
            Name: "N_POSITIONS",
            Value: "4096",
          },
          {
            Name: "OPT_LEVEL",
            Value: "3",
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
                  "/example/example-model-16b/neuronx-2.23.0/tp2-np4096-opt3",
                ],
              ],
            },
          },
        ],
      },
    });
  });
});
