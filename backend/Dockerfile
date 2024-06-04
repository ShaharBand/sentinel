FROM python:3.12.3-alpine3.20

LABEL maintainer="Shahar Band <shahar1531@gmail.com>"

ENV PYTHONPATH="/backend"

WORKDIR /backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY src/ ./src

EXPOSE 5000 5000

CMD ["python", "src/app/run.py"]
