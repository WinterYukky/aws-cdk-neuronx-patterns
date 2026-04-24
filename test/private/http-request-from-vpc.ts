import { Agent, setGlobalDispatcher } from "undici";
import { FetchOptions } from "@aws-cdk/integ-tests-alpha";

export interface HttpRequestFromVpcFunctionPayload {
  url: `http://${string}/v1/chat/completions` | `https://${string}/invocations`;
  options?: FetchOptions;
}

// Some callers (e.g. the HyperPod inference operator) expose their model
// servers through an ALB terminated with a cert-manager–issued
// self-signed certificate. Install a global undici dispatcher that skips
// TLS verification so those endpoints are reachable from this function.
setGlobalDispatcher(
  new Agent({
    connect: { rejectUnauthorized: false },
  }),
);

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
