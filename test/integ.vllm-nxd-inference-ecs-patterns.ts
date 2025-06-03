import { ExpectedResult, IntegTest, Match } from "@aws-cdk/integ-tests-alpha";
import { App, CfnOutput, Duration, RemovalPolicy, Stack } from "aws-cdk-lib";
import { GatewayVpcEndpointAwsService, Vpc } from "aws-cdk-lib/aws-ec2";
import { ApplicationLoadBalancer } from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { join } from "path";
import {
  ApplicationLoadBalancedVllmNxDInferenceService,
  Model,
  NeuronxInstanceType,
  Parameters,
  VllmNxdInferenceCompiler,
  VllmNxdInferenceTaskDefinition,
} from "../src";
import { HttpRequestFromVpcFunctionPayload } from "./private/http-request-from-vpc";

const app = new App();
class VllmNxDInferenceIntegTestStack extends Stack {
  readonly httpRequestFromVpcFunction: NodejsFunction;
  readonly service: ApplicationLoadBalancedVllmNxDInferenceService;
  constructor(scope: App, id: string) {
    super(scope, id);
    const vpc = new Vpc(this, "Vpc", {
      natGateways: 1,
      gatewayEndpoints: {
        S3: {
          service: GatewayVpcEndpointAwsService.S3,
        },
      },
    });

    const bucket = new Bucket(this, "Bucket", {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    const compiler = new VllmNxdInferenceCompiler(this, "Compiler", {
      vpc,
      bucket,
      model: Model.fromHuggingFace("HuggingFaceTB/SmolLM-135M-Instruct", {
        parameters: Parameters.million(135),
        config: {
          attentionHeads: 9,
          embeddingDimension: 576,
          layers: 30,
        },
      }),
    });
    const compiledModel = compiler.compile();
    const neuronTaskDefinition = new VllmNxdInferenceTaskDefinition(
      this,
      "TaskDefinition",
      {
        vpc,
        compiledModel,
        neuronxInstanceType: NeuronxInstanceType.INF2_XLARGE,
      },
    );
    this.service = new ApplicationLoadBalancedVllmNxDInferenceService(
      this,
      "Service",
      {
        vpc,
        neuronTaskDefinition,
        publicLoadBalancer: false,
        desiredCount: 2,
      },
    );
    new CfnOutput(this, "CompiledArtifact", {
      value: compiledModel.s3Uri,
    });

    this.httpRequestFromVpcFunction = new NodejsFunction(
      this,
      "HttpRequestFromVpcFunction",
      {
        entry: join(__dirname, "private/http-request-from-vpc.ts"),
        vpc,
        timeout: Duration.seconds(30),
      },
    );
    this.service.listener.connections.allowDefaultPortFrom(
      this.httpRequestFromVpcFunction,
    );
  }
}
const stack = new VllmNxDInferenceIntegTestStack(
  app,
  "VllmNxDInferenceIntegTestStack",
);

const integTest = new IntegTest(app, "IntegTest", {
  testCases: [stack],
  diffAssets: true,
});
vllmChatAssersion(
  integTest,
  stack.httpRequestFromVpcFunction,
  stack.service.loadBalancer,
);

function vllmChatAssersion(
  integ: IntegTest,
  fn: IFunction,
  loadBalancer: ApplicationLoadBalancer,
) {
  const invoke = integ.assertions.invokeFunction({
    functionName: fn.functionName,
    payload: JSON.stringify({
      url: `http://${loadBalancer.loadBalancerDnsName}/v1/chat/completions`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          model: "HuggingFaceTB/SmolLM-135M-Instruct",
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
      },
    } satisfies HttpRequestFromVpcFunctionPayload),
  });

  invoke
    .expect(
      ExpectedResult.objectLike({
        Payload: Match.serializedJson(
          Match.objectLike({
            statusCode: 200,
          }),
        ),
      }),
    )
    .waitForAssertions();
}
