#!/bin/bash

cd /opt/ml/model/$COMPILED_ARTIFACTS_S3_PREFIX
exec vllm serve "$@"