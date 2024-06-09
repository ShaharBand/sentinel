from pydantic import MongoDsn, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict


class DBSettings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env',
                                      env_prefix='DB_',
                                      env_ignore_empty=True,
                                      extra="ignore")

    SERVER: str
    PORT: int = 27017
    USER: str
    PASSWORD: str

    @computed_field
    @property
    def MONGO_DATABASE_URI(self) -> str:
        uri = f"mongodb://{self.USER}:{self.PASSWORD}@{self.SERVER}:{self.PORT}/"
        return uri
