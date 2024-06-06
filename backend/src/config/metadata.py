from pydantic_settings import BaseSettings, SettingsConfigDict


class Metadata(BaseSettings):
    name: str = "Sentinel"
    description: str = "A user-friendly Command & Control platform API."
    author: str = "Shahar Band"
    version: str = "1.0.0"

    model_config = SettingsConfigDict(env_file=('.env.db.metadata', '.env.db.metadata.prod'),
                                      env_file_encoding='utf-8',
                                      env_prefix='metadata_')
