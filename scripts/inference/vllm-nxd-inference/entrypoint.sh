#!/bin/bash

aws s3 sync --no-progress $COMPILED_ARTIFACTS_S3_URI ./

exec vllm serve ./$MODEL_NAME "$@"