curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash &&
apt-get install git-lfs &&
git lfs install &&
git clone https://huggingface.co/${MODEL_ID} model &&
rm -rf model/.git &&
python /usr/local/bin/compile.py &&
aws s3 sync --no-progress ./model ${ARTIFACT_S3_URL}/model &&
aws s3 sync --no-progress ./compiled ${ARTIFACT_S3_URL}/compiled &&
echo 'compile completed'