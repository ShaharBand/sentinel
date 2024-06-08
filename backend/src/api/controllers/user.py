from beanie import PydanticObjectId

from src.api.models.user import UserModel
from src.dal.entities.user import User


class UserController:
    @staticmethod
    async def create_user(username: str, password: str) -> User:
        user = await UserModel.create_user(username, password)
        return user

    @staticmethod
    async def get_all_users() -> list[User]:
        users = await UserModel.get_all_users()
        return users

    @staticmethod
    async def get_user_by_id(user_id: PydanticObjectId) -> User:
        user = await UserModel.get_user_by_id(user_id)
        return user

    @staticmethod
    async def get_user_by_username(username: str) -> User:
        user = await UserModel.get_user_by_username(username)
        return user
