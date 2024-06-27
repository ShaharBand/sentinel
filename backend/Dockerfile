# Stage 0, "build-stage", based on Python 3.12.3.
FROM python:3.12.3-alpine3.20 as build-stage

WORKDIR /backend

RUN apk add --no-cache curl
RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/opt/poetry python && \
    cd /usr/local/bin && \
    ln -s /opt/poetry/bin/poetry && \
    poetry config virtualenvs.create false

ENV PATH="/root/.local/bin:$PATH"

COPY ./pyproject.toml ./poetry.lock* ./

ARG INSTALL_DEV=false
RUN if [ "$INSTALL_DEV" = "true" ]; then poetry install --no-root; else poetry install --no-root --only main; fi

# Stage 1, Final stage, to have only the compiled dependencies.
FROM python:3.12.3-alpine3.20

LABEL maintainer="Shahar Band <shahar1531@gmail.com>"

WORKDIR /backend

COPY --from=build-stage /usr/local/lib/python3.12/site-packages/ /usr/local/lib/python3.12/site-packages/
COPY src/ ./src

RUN adduser -D appuser
RUN chown appuser /backend
USER appuser

ENV PYTHONPATH="/backend"

CMD ["python", "src/main.py"]
