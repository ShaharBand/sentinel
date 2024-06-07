import os

from pydantic_settings import BaseSettings, SettingsConfigDict

from src.config.environment import Environment


class AppConfig(BaseSettings):
    ip: str = "localhost"
    port: int = 5000
    environment: Environment = Environment.DEVELOPMENT
    workers: int = os.cpu_count() * 2 + 1
    allowed_origins: list[str] = [
        f"http://{ip}",
        "http://localhost:5173",
    ]

    model_config = SettingsConfigDict(env_file=('.env.app'),
                                      env_file_encoding='utf-8',
                                      env_prefix='app_',
                                      case_sensitive=False)
