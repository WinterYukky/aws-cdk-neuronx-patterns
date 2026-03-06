import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, CfnOutput, Stack } from "aws-cdk-lib";
import {
  GatewayVpcEndpointAwsService,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { NodegroupAmiType } from "aws-cdk-lib/aws-eks-v2";
import { KubectlV31Layer } from "@aws-cdk/lambda-layer-kubectl-v31";
import * as cxapi from "aws-cdk-lib/cx-api";
import { HyperPodCluster } from "../src/index";

const app = new App();
Object.entries(cxapi.CURRENTLY_RECOMMENDED_FLAGS).map(([key, value]) =>
  app.node.setContext(key, value),
);

class HyperPodClusterIntegTestStack extends Stack {
  readonly cluster: HyperPodCluster;
  constructor(scope: App, id: string) {
    super(scope, id);
    const vpc = new Vpc(this, "Vpc", {
      natGateways: 1,
      maxAzs: 2,
      gatewayEndpoints: {
        S3: {
          service: GatewayVpcEndpointAwsService.S3,
        },
      },
    });

    this.cluster = new HyperPodCluster(this, "HyperPod", {
      vpc,
      kubectlLayer: new KubectlV31Layer(this, "KubectlLayer"),
      instanceGroups: [
        {
          name: "inference-workers",
          instanceType: InstanceType.of(
            InstanceClass.TRN1,
            InstanceSize.XLARGE32,
          ),
          instanceCount: 0,
        },
      ],
      nodeRecovery: "Automatic",
    });

    // Add a small managed node group for system workloads
    this.cluster.eksCluster.addNodegroupCapacity("SystemNodes", {
      instanceTypes: [InstanceType.of(InstanceClass.T3, InstanceSize.MEDIUM)],
      minSize: 1,
      maxSize: 2,
      desiredSize: 1,
      amiType: NodegroupAmiType.AL2023_X86_64_STANDARD,
    });

    new CfnOutput(this, "EksClusterName", {
      value: this.cluster.eksCluster.clusterName,
    });
    new CfnOutput(this, "HyperPodClusterArn", {
      value: this.cluster.clusterArn,
    });
  }
}

const stack = new HyperPodClusterIntegTestStack(
  app,
  "HyperPodClusterIntegTestStack",
);

new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
