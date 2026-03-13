import { Size } from "aws-cdk-lib";
import {
  IMachineImage,
  MachineImageConfig,
  OperatingSystemType,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import * as ssm from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";

export class NeuronOptimizedMachineImage
  extends Construct
  implements IMachineImage
{
  static readonly size = Size.gibibytes(30);
  readonly imageId: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.imageId = ssm.StringParameter.valueForStringParameter(
      this,
      "/aws/service/ecs/optimized-ami/amazon-linux-2023/neuron/recommended/image_id",
    );
  }
  getImage(_scope: Construct): MachineImageConfig {
    return {
      imageId: this.imageId,
      osType: OperatingSystemType.LINUX,
      userData: UserData.forLinux(),
    };
  }
}
