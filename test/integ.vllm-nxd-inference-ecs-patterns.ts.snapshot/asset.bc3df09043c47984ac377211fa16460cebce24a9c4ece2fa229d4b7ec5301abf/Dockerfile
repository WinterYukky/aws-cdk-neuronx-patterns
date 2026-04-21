ARG IMAGE_NAME
ARG IMAGE_TAG
FROM ${IMAGE_NAME}:${IMAGE_TAG}

WORKDIR /home/$USERNAME/vllm

# Install libgomp1 required by neuronx-cc on non-Neuron instances
USER root
RUN apt-get update -qq && apt-get install -y -qq libgomp1 && rm -rf /var/lib/apt/lists/*
USER $USERNAME

RUN chown -R $USERNAME:$USERNAME /home/$USERNAME && chsh -s /bin/bash $USERNAME
COPY --chown=$USERNAME:$USERNAME --chmod=755 modeling_auto.py /home/$USERNAME/vllm/
COPY --chown=$USERNAME:$USERNAME --chmod=755 quantize.py /home/$USERNAME/vllm/
COPY --chown=$USERNAME:$USERNAME --chmod=755 entrypoint.sh /home/$USERNAME/vllm/

ENTRYPOINT [ "bash", "entrypoint.sh" ]