import * as path from "path";
import { CustomResource } from "aws-cdk-lib";
import {
  IMachineImage,
  MachineImageConfig,
  OperatingSystemType,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import { Code, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import * as ssm from "aws-cdk-lib/aws-ssm";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";

export class NeuronOptimizedMachineImage
  extends Construct
  implements IMachineImage
{
  private readonly resource: CustomResource;
  get imageId() {
    return this.resource.getAttString("image_id");
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const provider = new Provider(this, "NeuronxAmiProvider", {
      onEventHandler: new SingletonFunction(this, "NeuronxAmiFunction", {
        code: Code.fromAsset(path.join(__dirname, "neuronx-ami")),
        handler: "index.onEvent",
        runtime: Runtime.NODEJS_20_X,
        uuid: "08c9850a-6f13-4ed4-9e2d-7888d7b5a258",
      }),
    });
    this.resource = new CustomResource(this, "NeuronxAmi", {
      serviceToken: provider.serviceToken,
      resourceType: "Custom::NeuronxAmi",
      properties: {
        image: ssm.StringParameter.fromStringParameterName(
          this,
          "Image",
          "/aws/service/ecs/optimized-ami/amazon-linux-2023/neuron/recommended",
        ).stringValue,
      },
    });
  }
  getImage(_scope: Construct): MachineImageConfig {
    return {
      imageId: this.imageId,
      osType: OperatingSystemType.LINUX,
      userData: UserData.forLinux(),
    };
  }
}
