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

// test/private/http-request-from-vpc.ts
var http_request_from_vpc_exports = {};
__export(http_request_from_vpc_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(http_request_from_vpc_exports);
var handler = async (payload) => {
  console.log("payload", payload);
  const response = await fetch(payload.url, payload.options);
  const body = await response.json();
  console.log("body", body);
  return {
    statusCode: response.status,
    headers: response.headers,
    body
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
