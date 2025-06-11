// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BatchClient,
  DescribeJobsCommand,
  SubmitJobCommand,
} from "@aws-sdk/client-batch";
import {
  type CdkCustomResourceHandler,
  type CdkCustomResourceIsCompleteHandler,
} from "aws-lambda";

const region = process.env.AWS_DEFAULT_REGION ?? "us-east-1";
const client = new BatchClient({
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
  const job = await client.send(
    new SubmitJobCommand({
      jobName: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`,
      jobDefinition: event.ResourceProperties.jobDefinitionArn,
      jobQueue: event.ResourceProperties.jobQueueArn,
    }),
  );
  console.log(JSON.stringify(job));
  return {
    jobId: job.jobId,
    PhysicalResourceId: job.jobId,
  };
};

export const isComplete: CdkCustomResourceIsCompleteHandler = async (event) => {
  if (event.RequestType === "Delete") {
    return {
      IsComplete: true,
    };
  }
  const jobs = await client.send(
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
        Data: {
          ArtifactS3Prefix: event.ResourceProperties.artifactS3Prefix,
        },
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
