import motor.motor_asyncio
from beanie import init_beanie

from src.core.config.provider import ConfigProvider
from src.dal.entities.device import Device
from src.dal.entities.user import User


async def init_db():
    db_settings = ConfigProvider.db_settings()

    client = motor.motor_asyncio.AsyncIOMotorClient(
        db_settings.MONGO_DATABASE_URI
    )
    db = client[db_settings.NAME]

    await init_beanie(database=db,
                      document_models=[
                          Device,
                          User
                      ])
