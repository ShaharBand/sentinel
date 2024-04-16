import os

from pydantic_settings import BaseSettings

from src.config.environment import Environment


class AppConfig(BaseSettings):
    ip: str = "localhost"
    port: int = 5000
    environment: Environment = Environment.integration
    workers: int = os.cpu_count() * 2 + 1
    allowed_origins: list[str] = [
        f"http://{ip}",
        "http://localhost:5173",
    ]
