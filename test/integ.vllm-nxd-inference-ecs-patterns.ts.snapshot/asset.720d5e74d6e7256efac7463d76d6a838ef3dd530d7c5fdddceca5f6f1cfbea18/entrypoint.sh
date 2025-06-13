#!/bin/bash

LOG_FILE=~/vllm.log
touch $LOG_FILE
wait_for_log_to_be_detected() {
    local SEARCH_TEXT="$1"
    echo "wait for \"$SEARCH_TEXT\" to be detected in \`$LOG_FILE\`..."

    if grep -q "$SEARCH_TEXT" <(tail -n0 -f "$LOG_FILE"); then
        echo "Detected target log. Execute next process."
        return 0
    else
        echo "Compile failed."
        return 1
    fi
}

mkdir compile
cd compile

if [[ $MODEL_ID == "s3://"* ]]; then
    aws s3 sync $MODEL_ID $MODEL_NAME
else
    huggingface-cli download $MODEL_ID --local-dir $MODEL_NAME
fi

vllm serve "$@" 2>&1 | tee $LOG_FILE &

wait_for_log_to_be_detected "Application startup complete" || exit 1

aws s3 cp --no-progress --recursive ./ $COMPILED_ARTIFACTS_S3_URI \
    --exclude "**/.cache/*" \
    --exclude global_metric_store.json