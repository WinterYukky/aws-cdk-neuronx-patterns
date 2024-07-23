"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var await_compile_job_exports = {};
__export(await_compile_job_exports, {
  isComplete: () => isComplete,
  onCreate: () => onCreate,
  onEvent: () => onEvent
});
module.exports = __toCommonJS(await_compile_job_exports);
var import_client_batch = require("@aws-sdk/client-batch");
var client = new import_client_batch.BatchClient({
  region: process.env.AWS_DEFAULT_REGION
});
var onEvent = async (event, _context, _callback) => {
  console.log(event);
  switch (event.RequestType) {
    case "Create":
    case "Update":
      return onCreate(event, _context, _callback);
    case "Delete":
      return {};
  }
};
var onCreate = async (event) => {
  console.log(event);
  const now = /* @__PURE__ */ new Date();
  const job = await client.send(
    new import_client_batch.SubmitJobCommand({
      jobName: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`,
      jobDefinition: event.ResourceProperties.jobDefinitionArn,
      jobQueue: event.ResourceProperties.jobQueueArn
    })
  );
  return {
    jobId: job.jobId
  };
};
var isComplete = async (event) => {
  if (event.RequestType === "Delete") {
    return {
      IsComplete: true
    };
  }
  const jobs = await client.send(
    new import_client_batch.DescribeJobsCommand({
      jobs: [event.jobId]
    })
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
          ArtifactS3Url: event.ResourceProperties.artifactS3Url
        }
      };
    case "FAILED":
      throw new Error(job.statusReason);
  }
  return {
    IsComplete: false
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isComplete,
  onCreate,
  onEvent
});
