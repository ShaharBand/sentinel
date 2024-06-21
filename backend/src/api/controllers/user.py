from beanie import PydanticObjectId

import src.api.models.user as user_model
from src.dal.entities.user import User


async def create_user(username: str, password: str) -> User:
    user = await user_model.create_user(username, password)
    return user


async def get_all_users() -> list[User]:
    users = await user_model.get_all_users()
    return users


async def get_user_by_id(user_id: PydanticObjectId) -> User:
    user = await user_model.get_user_by_id(user_id)
    return user


async def get_user_by_username(username: str) -> User:
    user = await user_model.get_user_by_username(username)
    return user
