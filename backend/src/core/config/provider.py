from functools import lru_cache

from src.core.config.app import AppSettings
from src.core.config.db import DBSettings
from src.core.config.metadata import Metadata


class ConfigProvider:
    @staticmethod
    @lru_cache(maxsize=1)
    def app_settings() -> AppSettings:
        return AppSettings()

    @staticmethod
    @lru_cache(maxsize=1)
    def db_settings() -> DBSettings:
        return DBSettings()

    @staticmethod
    @lru_cache(maxsize=1)
    def metadata() -> Metadata:
        return Metadata()
