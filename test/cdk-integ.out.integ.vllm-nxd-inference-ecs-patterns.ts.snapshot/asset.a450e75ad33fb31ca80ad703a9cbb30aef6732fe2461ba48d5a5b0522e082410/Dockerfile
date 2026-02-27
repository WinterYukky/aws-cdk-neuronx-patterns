ARG IMAGE_NAME
ARG IMAGE_TAG
FROM ${IMAGE_NAME}:${IMAGE_TAG}

WORKDIR /home/$USERNAME/vllm

RUN chown -R $USERNAME:$USERNAME /home/$USERNAME && chsh -s /bin/bash $USERNAME
COPY --chown=$USERNAME:$USERNAME --chmod=755 modeling_auto.py /home/$USERNAME/vllm/
COPY --chown=$USERNAME:$USERNAME --chmod=755 quantize.py /home/$USERNAME/vllm/
COPY --chown=$USERNAME:$USERNAME --chmod=755 entrypoint.sh /home/$USERNAME/vllm/

ENTRYPOINT [ "bash", "entrypoint.sh" ]