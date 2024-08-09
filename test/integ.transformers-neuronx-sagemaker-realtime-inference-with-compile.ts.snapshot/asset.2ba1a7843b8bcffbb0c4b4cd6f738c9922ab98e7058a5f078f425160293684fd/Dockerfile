FROM public.ecr.aws/neuron/pytorch-inference-neuronx:2.1.2-neuronx-py310-sdk2.19.1-ubuntu20.04

# https://repost.aws/it/questions/QU2l9P6ZEhSkSL0lFQonOHfQ/a-lambda-failed-to-start-with-the-error-cannot-import-name-is-s3express-bucket-from-botocore-utils
RUN pip install -U boto3==1.34.151 botocore==1.34.151
COPY compile.py /usr/local/bin/compile.py
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/compile.py \
 && chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "bash", "-m", "entrypoint.sh"]