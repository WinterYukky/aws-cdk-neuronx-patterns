import { FetchOptions } from "@aws-cdk/integ-tests-alpha";

export interface HttpRequestFromVpcFunctionPayload {
  url: `http://${string}/v1/chat/completions`;
  options?: FetchOptions;
}

export const handler = async (payload: HttpRequestFromVpcFunctionPayload) => {
  console.log("payload", payload);
  const response = await fetch(payload.url, payload.options);
  const body = await response.json();
  console.log("body", body);
  return {
    statusCode: response.status,
    headers: response.headers,
    body,
  };
};
