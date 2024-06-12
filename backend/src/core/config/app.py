import os
import secrets
from typing import Annotated, Any, Literal

from pydantic import AnyUrl, BeforeValidator
from pydantic_settings import BaseSettings, SettingsConfigDict

from src.core.config.environment import Environment


def parse_cors(v: Any) -> list[str] | str:
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list | str):
        return v
    raise ValueError(v)


def parse_environment(v: str) -> Environment:
    if isinstance(v, Environment):
        return v
    if isinstance(v, str):
        return Environment(v.lower())
    raise ValueError(v)


class AppSettings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env',
                                      env_prefix='BACKEND_',
                                      env_ignore_empty=True,
                                      extra="ignore")

    DOMAIN: str = "0.0.0.0"
    PORT: int = 5000
    CORS_ORIGINS: Annotated[list[AnyUrl] | str, BeforeValidator(parse_cors)] = []
    ENVIRONMENT: Annotated[
        Literal[Environment.DEVELOPMENT, Environment.PRODUCTION],
        BeforeValidator(parse_environment)
    ] = Environment.DEVELOPMENT
    WORKER_COUNT: int = os.cpu_count() * 2 + 1

    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
