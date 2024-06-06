from beanie import init_beanie
import motor.motor_asyncio

from src.config.manager import ConfigManager
from src.dal.entities.user import User
from src.dal.entities.device import Device


async def init_db():
    db_config = ConfigManager.get_db_config()
    db_uri = (f'mongodb://{db_config.username}:{db_config.password}@'
              f'{db_config.host}:{db_config.port}')

    client = motor.motor_asyncio.AsyncIOMotorClient(
        db_uri
    )

    # "mongodb://user:pass@host:27017"
    await init_beanie(database=client.db_name, document_models=[Device, User])
