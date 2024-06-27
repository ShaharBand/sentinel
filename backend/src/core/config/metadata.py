from pydantic_settings import BaseSettings, SettingsConfigDict


class Metadata(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env',
                                      env_prefix='METADATA_',
                                      env_ignore_empty=True,
                                      extra="ignore")

    PROJECT_NAME: str = "Sentinel"
    PROJECT_DESCRIPTION: str = "A user-friendly Command & Control platform API."
    MAINTAINER: str = "Shahar Band"
    VERSION: str = "1.0.0"
