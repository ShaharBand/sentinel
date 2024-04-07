import os

from pydantic_settings import BaseSettings

from src.config.environment import Environment


class AppConfig(BaseSettings):
    ip: str = "127.0.0.1"
    port: int = 5000
    environment: Environment = Environment.integration
    workers: int = os.cpu_count() * 2 + 1
