ARG IMAGE_TAG
FROM public.ecr.aws/neuron/pytorch-training-neuronx:${IMAGE_TAG}

ARG USERNAME=neuronx
ARG USER_UID=1000
ARG USER_GID=1000
ARG VLLM_GIT_BRANCH=main
ARG VLLM_GIT_COMMIT_HASH=""

RUN apt-get update && \
    apt-get install -y sudo git && \
    groupadd --gid $USER_GID $USERNAME && \
    useradd --uid $USER_UID --gid $USER_GID -m $USERNAME && \
    echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME && \
    rm -rf /var/lib/apt/lists/*

RUN pip install -U pip && \
    pip install --upgrade neuronx-distributed-inference --extra-index-url https://pip.repos.neuron.amazonaws.com

WORKDIR /usr/src

RUN git clone -b ${VLLM_GIT_BRANCH} --depth 1 https://github.com/aws-neuron/upstreaming-to-vllm.git && \
    if [ -n "$VLLM_GIT_COMMIT_HASH" ]; then \
        git checkout $VLLM_GIT_COMMIT_HASH; \
    fi && \
    pip install -r ./upstreaming-to-vllm/requirements/neuron.txt && \
    SETUPTOOLS_SCM_PRETEND_VERSION="0.9.0" VLLM_TARGET_DEVICE="neuron" pip install -e ./upstreaming-to-vllm && \
    rm -rf .git

WORKDIR /home/$USERNAME/vllm

RUN chown -R $USERNAME:$USERNAME /home/$USERNAME && chsh -s /bin/bash $USERNAME
COPY --chown=$USERNAME:$USERNAME --chmod=755 entrypoint.sh /entrypoint.sh
USER $USERNAME

ENTRYPOINT [ "bash", "/entrypoint.sh" ]