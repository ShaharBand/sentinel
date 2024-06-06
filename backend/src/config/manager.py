from functools import lru_cache

from src.config.app import AppConfig
from src.config.db import DBConfig
from src.config.metadata import Metadata


class ConfigManager:
    @staticmethod
    @lru_cache(maxsize=1)
    def get_app_config() -> AppConfig:
        return AppConfig()

    @staticmethod
    @lru_cache(maxsize=1)
    def get_db_config() -> DBConfig:
        return DBConfig()

    @staticmethod
    @lru_cache(maxsize=1)
    def get_metadata() -> Metadata:
        return Metadata()
