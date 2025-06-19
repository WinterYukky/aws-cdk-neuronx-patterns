"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../../../node_modules/cfn-response/index.js
var require_cfn_response = __commonJS({
  "../../../../../node_modules/cfn-response/index.js"(exports2) {
    exports2.SUCCESS = "SUCCESS";
    exports2.FAILED = "FAILED";
    exports2.send = function(event, context, responseStatus, responseData, physicalResourceId) {
      var responseBody = JSON.stringify({
        Status: responseStatus,
        Reason: "See the details in CloudWatch Log Stream: " + context.logStreamName,
        PhysicalResourceId: physicalResourceId || context.logStreamName,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        Data: responseData
      });
      console.log("Response body:\n", responseBody);
      var https = require("https");
      var url = require("url");
      var parsedUrl = url.parse(event.ResponseURL);
      var options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.path,
        method: "PUT",
        headers: {
          "content-type": "",
          "content-length": responseBody.length
        }
      };
      var request = https.request(options, function(response) {
        console.log("Status code: " + response.statusCode);
        console.log("Status message: " + response.statusMessage);
        context.done();
      });
      request.on("error", function(error) {
        console.log("send(..) failed executing https.request(..): " + error);
        context.done();
      });
      request.write(responseBody);
      request.end();
    };
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  entrypoint: () => entrypoint,
  isComplete: () => isComplete,
  onCreate: () => onCreate,
  onEvent: () => onEvent
});
module.exports = __toCommonJS(index_exports);
var import_client_batch = require("@aws-sdk/client-batch");
var import_client_lambda = require("@aws-sdk/client-lambda");
var cfnresponse = __toESM(require_cfn_response());
var region = process.env.AWS_DEFAULT_REGION ?? "us-east-1";
var batch = new import_client_batch.BatchClient({
  region
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
  const job = await batch.send(
    new import_client_batch.SubmitJobCommand({
      jobName: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`,
      jobDefinition: process.env.JOB_DEFINITION_ARN,
      jobQueue: process.env.JOB_QUEUE_ARN
    })
  );
  console.log(JSON.stringify(job));
  return {
    jobId: job.jobId,
    PhysicalResourceId: job.jobId
  };
};
var isJobComplete = async (event) => {
  if (event.RequestType === "Delete") {
    return {
      IsComplete: true
    };
  }
  const jobs = await batch.send(
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
        IsComplete: true
      };
    case "FAILED":
      let errorMessage = `${job.statusReason}.`;
      if (job.container?.logStreamName) {
        const encode = (str) => encodeURIComponent(encodeURIComponent(str));
        const cloudWatchLogsUrlBase = `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logsV2:log-groups/log-group/`;
        const cwLogsUrl = `${cloudWatchLogsUrlBase}${encode("/aws/batch/job")}/log-events/${encode(job.container.logStreamName)}`;
        errorMessage += `For more details, please see ${cwLogsUrl} .`;
      }
      throw new Error(errorMessage);
  }
  return {
    IsComplete: false
  };
};
var isComplete = async (event) => {
  const respond = async (body) => fetch(event.waitConditionCallbackURL, {
    method: "PUT",
    headers: {
      // Content-Type must be empty
      "Content-Type": ""
    },
    body: JSON.stringify(body)
  });
  try {
    const result = await isJobComplete(event);
    if (!result || !result.IsComplete) {
      return {
        IsComplete: false
      };
    }
    const response = await respond({
      Status: "SUCCESS",
      Reason: "Compile Success",
      UniqueId: event.jobId,
      Data: process.env.ARTIFACT_S3_PREFIX
    });
    console.log("response", await response.text());
    return result;
  } catch (error) {
    const response = await respond({
      Status: "FAILURE",
      Reason: error.message,
      UniqueId: event.jobId
    });
    console.log("response", await response.text());
    throw error;
  }
};
var lambda = new import_client_lambda.LambdaClient();
var entrypoint = async (event, context) => {
  console.log(event);
  try {
    await lambda.send(
      new import_client_lambda.InvokeCommand({
        FunctionName: process.env.PROVIDER_ARN,
        Payload: JSON.stringify({
          ...event,
          waitConditionCallbackURL: event.ResourceProperties.waitConditionCallbackURL
        })
      })
    );
    const response = {
      PhysicalResourceId: event.LogicalResourceId ? event.LogicalResourceId : void 0,
      Data: {},
      Status: cfnresponse.SUCCESS
    };
    await sendResponse(event, context, response);
  } catch (error) {
    console.log(error);
    const response = {
      PhysicalResourceId: event.LogicalResourceId ? event.LogicalResourceId : void 0,
      Data: {},
      Status: cfnresponse.FAILED
    };
    await sendResponse(event, context, response);
  }
};
async function sendResponse(event, context, response) {
  await new Promise(
    () => cfnresponse.send(
      event,
      context,
      response.Status,
      response.Data,
      response.PhysicalResourceId,
      false
    )
  );
  return;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  entrypoint,
  isComplete,
  onCreate,
  onEvent
});
