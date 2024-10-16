FROM python:3.12.3-alpine3.20

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.4.15 /uv /bin/uv

# Optimizing UV
ENV PATH="/backend/.venv/bin:$PATH"
ENV UV_COMPILE_BYTECODE=1
ENV UV_LINK_MODE=copy

# Install dependencies
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project --no-editable

# Copy the necessary files
COPY pyproject.toml uv.lock ./
COPY src/ ./src/
# COPY tests/ ./tests/

# Sync the project
# Ref: https://docs.astral.sh/uv/guides/integration/docker/#intermediate-layers
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync

RUN adduser -D appuser && chown -R appuser /backend
USER appuser

ENV PYTHONPATH=/backend

CMD ["uv", "run", "/backend/src/main.py"]

