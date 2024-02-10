from functools import lru_cache

from pydantic_settings import BaseSettings


class AppConfig(BaseSettings):
    # Application Configuration
    IP: str = "127.0.0.1"
    PORT: int = 5000
    VERSION: str = "0.0.1"

    # Database Configuration
    MOCK_DB: bool = False
    DB_USERNAME: str = "postgres"
    DB_PASSWORD: str = "123456"
    DB_HOST: str = "localhost"
    DB_PORT: str = "5432"
    DB_NAME: str = "sentinel"


class AppConfigManager:
    _config = AppConfig()

    @classmethod
    @lru_cache(maxsize=1)
    def get_config(cls) -> AppConfig:
        return cls._config

    @classmethod
    @lru_cache(maxsize=1)
    def get_db_uri(cls) -> str:
        db_config = cls.get_config()
        return f'postgres://{db_config.DB_USERNAME}:{db_config.DB_PASSWORD}@{db_config.DB_HOST}:{db_config.DB_PORT}/{db_config.DB_NAME}'


config_manager = AppConfigManager()
config = config_manager.get_config()
db_uri = config_manager.get_db_uri()

if __name__ == '__main__':
    print(f"IP Address: {config.IP}")
    print(f"Port: {config.PORT}")
    print(f"Version: {config.VERSION}")
    print(f"MOCK_DB: {config.MOCK_DB}")
    print(f"DB URI: {db_uri}")
