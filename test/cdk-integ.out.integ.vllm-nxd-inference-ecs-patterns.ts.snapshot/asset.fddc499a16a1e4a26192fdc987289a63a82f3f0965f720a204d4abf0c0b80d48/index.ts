// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BatchClient,
  DescribeJobsCommand,
  SubmitJobCommand,
} from "@aws-sdk/client-batch";
// eslint-disable-next-line import/no-extraneous-dependencies
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  CdkCustomResourceIsCompleteEvent,
  CloudFormationCustomResourceHandler,
  type CdkCustomResourceHandler,
  type CdkCustomResourceIsCompleteHandler,
} from "aws-lambda";
import { cfnRespond } from "./cfn-response";

const region = process.env.AWS_DEFAULT_REGION ?? "us-east-1";
const batch = new BatchClient({
  region,
});
export const onEvent: CdkCustomResourceHandler = async (
  event,
  _context,
  _callback,
) => {
  console.log(event);
  switch (event.RequestType) {
    case "Create":
    case "Update":
      return onCreate(event, _context, _callback)!;
    case "Delete":
      return {};
  }
};
export const onCreate: CdkCustomResourceHandler = async (event) => {
  console.log(event);
  const now = new Date();
  const job = await batch.send(
    new SubmitJobCommand({
      jobName: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`,
      jobDefinition: process.env.JOB_DEFINITION_ARN,
      jobQueue: process.env.JOB_QUEUE_ARN,
    }),
  );
  console.log(JSON.stringify(job));
  return {
    jobId: job.jobId,
    PhysicalResourceId: job.jobId,
  };
};

interface WaitConditionRequestBody {
  Status: "SUCCESS" | "FAILURE";
  UniqueId: string;
  Reason?: string;
  Data?: string;
}

const isJobComplete = async (event: CdkCustomResourceIsCompleteEvent) => {
  if (event.RequestType === "Delete") {
    return {
      IsComplete: true,
    };
  }
  const jobs = await batch.send(
    new DescribeJobsCommand({
      jobs: [event.jobId],
    }),
  );
  const job = jobs.jobs?.[0];
  if (!job) {
    throw new Error(`Job (${event.jobId}) is missing`);
  }
  switch (job.status) {
    case "SUCCEEDED":
      return {
        IsComplete: true,
      };
    case "FAILED":
      let errorMessage = `${job.statusReason}.`;
      if (job.container?.logStreamName) {
        const encode = (str: string) =>
          encodeURIComponent(encodeURIComponent(str));
        const cloudWatchLogsUrlBase = `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/`;
        const cwLogsUrl = `${cloudWatchLogsUrlBase}${encode("/aws/batch/job")}/log-events/${encode(job.container.logStreamName)}`;
        errorMessage += `For more details, please see ${cwLogsUrl} .`;
      }
      throw new Error(errorMessage);
  }
  return {
    IsComplete: false,
  };
};

export const isComplete: CdkCustomResourceIsCompleteHandler = async (event) => {
  const waitConditionRespond = async (body: WaitConditionRequestBody) =>
    fetch(event.waitConditionCallbackURL, {
      method: "PUT",
      headers: {
        // Content-Type must be empty
        "Content-Type": "",
      },
      body: JSON.stringify(body),
    });
  try {
    const result = await isJobComplete(event);
    if (!result || !result.IsComplete) {
      return {
        IsComplete: false,
      };
    }
    const response = await waitConditionRespond({
      Status: "SUCCESS",
      Reason: "Compile Success",
      UniqueId: event.jobId,
      Data: process.env.ARTIFACT_S3_PREFIX,
    });
    console.log("response", await response.text());
    return result;
  } catch (error) {
    const response = await waitConditionRespond({
      Status: "FAILURE",
      Reason: (error as Error).message,
      UniqueId: event.jobId,
    });
    console.log("response", await response.text());
    throw error;
  }
};

const lambda = new LambdaClient();
export const entrypoint: CloudFormationCustomResourceHandler = async (
  event,
  context,
) => {
  console.log(event);
  try {
    await lambda.send(
      new InvokeCommand({
        FunctionName: process.env.PROVIDER_ARN,
        Payload: JSON.stringify({
          ...event,
          waitConditionCallbackURL:
            event.ResourceProperties.waitConditionCallbackURL,
        }),
      }),
    );
    await cfnRespond(
      event,
      context,
      "SUCCESS",
      {},
      event.LogicalResourceId,
      false,
    );
  } catch (error) {
    console.log(error);
    await cfnRespond(
      event,
      context,
      "FAILED",
      {},
      event.LogicalResourceId,
      false,
    );
  }
};
