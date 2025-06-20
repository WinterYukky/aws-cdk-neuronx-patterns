// eslint-disable-next-line import/no-extraneous-dependencies
import { CloudFormationCustomResourceEvent } from "aws-lambda";

export const cfnRespond = async (
  event: CloudFormationCustomResourceEvent,
  context: any,
  responseStatus: "SUCCESS" | "FAILED",
  responseData: any,
  physicalResourceId?: string,
  noEcho?: boolean,
) => {
  const body = JSON.stringify({
    Status: responseStatus,
    Reason:
      "See the details in CloudWatch Log Stream: " + context.logStreamName,
    PhysicalResourceId: physicalResourceId || context.logStreamName,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: noEcho || false,
    Data: responseData,
  });

  try {
    await fetch(event.ResponseURL, {
      method: "PUT",
      headers: {
        "content-type": "",
      },
      body,
    });
    console.log("Response body:\n", body);
  } catch (error) {
    console.log(
      `HTTP request error, ${(error as Error).message
        .replace(/X-Amz-Credential=[^&\s]+/i, "X-Amz-Credential=*****")
        .replace(/X-Amz-Signature=[^&\s]+/i, "X-Amz-Signature=*****")}`,
    );
  }
};
