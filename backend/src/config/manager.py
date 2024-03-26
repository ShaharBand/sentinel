from functools import lru_cache

from src.config.app import AppConfig
from src.config.db import IntegrationDBConfig, ProductionDBConfig, DBConfig
from src.config.environment import Environment


class AppConfigManager:
    @classmethod
    @lru_cache(maxsize=1)
    def get_app_config(cls) -> AppConfig:
        return AppConfig()

    @classmethod
    @lru_cache(maxsize=1)
    def get_db_config(cls) -> DBConfig:
        db_config_map = {
            Environment.integration: IntegrationDBConfig(),
            Environment.production: ProductionDBConfig(),
        }
        return db_config_map.get(cls.get_app_config().ENVIRONMENT, IntegrationDBConfig())
