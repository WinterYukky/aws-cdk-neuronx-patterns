git clone --depth=1 https://huggingface.co/${MODEL_ID} model &&
rm -rf model/.git &&
python /usr/local/bin/compile.py &&
aws s3 sync --no-progress ./model ${ARTIFACT_S3_URL}/model &&
aws s3 sync --no-progress ./neuron-compiled-artifacts ${ARTIFACT_S3_URL}/neuron-compiled-artifacts &&
aws s3 sync --no-progress ./neuron-quanted-artifacts ${ARTIFACT_S3_URL}/neuron-quanted-artifacts &&
echo 'compile completed'