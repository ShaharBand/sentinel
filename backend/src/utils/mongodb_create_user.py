from pymongo import MongoClient
from config import config

DB_CLIENT = "mongodb://localhost:27017/"
client = MongoClient(DB_CLIENT)

# DB Access
database = client[config.DB_NAME]
database.command('createUser', config.DB_USERNAME, pwd=config.DB_PASSWORD, roles=['readWrite'])
client.close()

print(f"User: {config.DB_USERNAME} has been created with the password '{config.DB_PASSWORD}'.")
