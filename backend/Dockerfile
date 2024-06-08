# Stage 1: Build stage
FROM python:3.12.3-alpine3.20 AS builder

WORKDIR /backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Stage 2: Final stage
FROM python:3.12.3-alpine3.20

LABEL maintainer="Shahar Band <shahar1531@gmail.com>"

WORKDIR /backend

COPY --from=builder /usr/local/lib/python3.12/site-packages/ /usr/local/lib/python3.12/site-packages/
COPY src/ ./src

RUN adduser -D appuser
RUN chown appuser /backend
USER appuser

ENV PYTHONPATH="/backend"
EXPOSE 5000

CMD ["python", "src/main.py"]
