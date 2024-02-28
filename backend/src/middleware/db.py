from beanie import init_beanie
import motor.motor_asyncio

from src.dal.entities.user import User
from src.dal.entities.device import Device
from src.utils.config import AppConfigManager


async def init_db():
    db_uri = AppConfigManager().get_db_uri()
    client = motor.motor_asyncio.AsyncIOMotorClient(
        db_uri
    )

    await init_beanie(database=client.db_name, document_models=[Device, User])
