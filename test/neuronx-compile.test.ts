import { App, Size, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import {
  Model,
  NeuronxCompile,
  OptLevel,
  Parameters,
  QuantDtype,
} from "../src";

describe("NeuronxCompile", () => {
  it("tp_degree=2 model", () => {
    const app = new App();
    const stack = new Stack(app, "MyStack");
    const vpc = new Vpc(stack, "VPC");
    const bucket = new Bucket(stack, "Bucket");
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(16),
      }),
    });
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
            Value: "example/example-model",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
          },
          {
            Name: "N_POSITIONS",
            Value: "4092",
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
                  "/example/example-model/neuronx-2.19.0/tp2-np4092-opt2",
                ],
              ],
            },
          },
          {
            Name: "NEURONX_TRANSFORMERS_VERSION",
            Value: "0.11.351",
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
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(17),
      }),
    });
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
            Value: "example/example-model",
          },
          {
            Name: "TP_DEGREE",
            Value: "4",
          },
          {
            Name: "N_POSITIONS",
            Value: "4092",
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
                  "/example/example-model/neuronx-2.19.0/tp4-np4092-opt2",
                ],
              ],
            },
          },
          {
            Name: "NEURONX_TRANSFORMERS_VERSION",
            Value: "0.11.351",
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
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(17),
      }),
      compileOptions: {
        quantDtype: QuantDtype.S8,
      },
    });
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
            Value: "example/example-model",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
          },
          {
            Name: "N_POSITIONS",
            Value: "4092",
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
                  "/example/example-model/neuronx-2.19.0/tp2-np4092-opt2-quants8",
                ],
              ],
            },
          },
          {
            Name: "NEURONX_TRANSFORMERS_VERSION",
            Value: "0.11.351",
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
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(16),
      }),
      spot: true,
    });
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
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(16),
      }),
      volumeSize: Size.gibibytes(100),
    });
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
    new NeuronxCompile(stack, "NeuronxCompile", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("example/example-model", {
        parameters: Parameters.billion(16),
      }),
      compileOptions: {
        optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
      },
    });
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
            Value: "example/example-model",
          },
          {
            Name: "TP_DEGREE",
            Value: "2",
          },
          {
            Name: "N_POSITIONS",
            Value: "4092",
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
                  "/example/example-model/neuronx-2.19.0/tp2-np4092-opt3",
                ],
              ],
            },
          },
          {
            Name: "NEURONX_TRANSFORMERS_VERSION",
            Value: "0.11.351",
          },
        ],
      },
    });
  });
});
