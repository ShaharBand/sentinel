from pymongo import MongoClient

from src.config.manager import ConfigManager

db_config = ConfigManager.get_db_config()
DB_CLIENT = "mongodb://localhost:27017/"
client = MongoClient(DB_CLIENT)

# DB Access
database = client[db_config.DB_NAME]
database.command('createUser', db_config.DB_USERNAME, pwd=db_config.DB_PASSWORD, roles=['readWrite'])
client.close()

print(f"User: {db_config.DB_USERNAME} has been created with the password '{db_config.DB_PASSWORD}'.")
