from beanie import init_beanie
from pymongo import MongoClient

from src.dal.entities.user import User
from src.dal.entities.device import Device
from src.utils.config import AppConfigManager


# TODO: fixing the initalization it require AsyncIOMotorClient i need to read about it
# TODO: currently running the app will raise exception TypeError: object dict can't be used in 'await' expression.


async def init_db():
    db_uri = AppConfigManager().get_db_uri()
    client = MongoClient(db_uri)
    database = client[AppConfigManager().get_config().DB_NAME]
    await init_beanie(database=database, document_models=[Device, User])
