#!/bin/bash

LOG_FILE=~/vllm.log
touch $LOG_FILE

# Create a dummy neuron device for vllm-neuron plugin registration
# when running on a non-Neuron instance (cross-compilation)
if [ ! -e /dev/neuron0 ]; then
    mknod /dev/neuron0 c 10 200 2>/dev/null || true
fi

mkdir compile
cd compile

if [[ $MODEL_ID == "s3://"* ]]; then
    aws s3 sync $MODEL_ID $MODEL_NAME
else
    huggingface-cli download $MODEL_ID --local-dir $MODEL_NAME
fi

python ~/vllm/quantize.py "$@"

vllm serve "$@" 2>&1 | tee $LOG_FILE &
VLLM_PID=$!

# Wait for either successful startup or compilation artifacts to appear
while true; do
    # Check if vllm serve has started successfully (native Neuron instance)
    if grep -q "Application startup complete" "$LOG_FILE" 2>/dev/null; then
        echo "Detected 'Application startup complete'. Server started successfully."
        break
    fi

    # Check if compilation artifacts exist but load failed (cross-compilation)
    if grep -q "Cannot find Neuron devices\|Neuron Runtime could not be initialized\|nrt_init" "$LOG_FILE" 2>/dev/null; then
        if [ -d "$NEURON_COMPILED_ARTIFACTS" ] && [ -f "$NEURON_COMPILED_ARTIFACTS/model.pt" ]; then
            echo "Compilation succeeded but Neuron device not available (cross-compilation mode)."
            echo "Artifacts found at $NEURON_COMPILED_ARTIFACTS"
            break
        fi
    fi

    # Check if vllm process has exited
    if ! kill -0 $VLLM_PID 2>/dev/null; then
        # Process exited - check if artifacts exist
        if [ -d "$NEURON_COMPILED_ARTIFACTS" ] && [ -f "$NEURON_COMPILED_ARTIFACTS/model.pt" ]; then
            echo "vllm serve exited but compilation artifacts found (cross-compilation mode)."
            break
        else
            echo "Compile failed. No artifacts found."
            exit 1
        fi
    fi

    sleep 5
done

aws s3 cp --no-progress --recursive ./ $COMPILED_ARTIFACTS_S3_URI \
    --exclude "**/.cache/*" \
    --exclude global_metric_store.json

echo 'Compile completed.'
