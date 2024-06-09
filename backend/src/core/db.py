from beanie import init_beanie
import motor.motor_asyncio

from src.core.config.provider import ConfigProvider
from src.dal.entities.user import User
from src.dal.entities.device import Device


async def init_db():
    db_settings = ConfigProvider.db_settings()

    client = motor.motor_asyncio.AsyncIOMotorClient(
        db_settings.MONGO_DATABASE_URI
    )

    await init_beanie(database=client.db_name,
                      document_models=[
                          Device,
                          User
                      ])
