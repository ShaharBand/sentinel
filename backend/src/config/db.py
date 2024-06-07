from pydantic_settings import BaseSettings, SettingsConfigDict


class DBConfig(BaseSettings):
    host: str
    port: str
    username: str
    password: str

    model_config = SettingsConfigDict(env_file=('.env.db'),
                                      env_file_encoding='utf-8',
                                      env_prefix='db_',
                                      case_sensitive=False)
