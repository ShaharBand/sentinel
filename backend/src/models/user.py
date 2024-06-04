from datetime import datetime

from beanie import PydanticObjectId
from fastapi import HTTPException, status

from src.dal.repositories.user import UserRepository
from src.dal.entities.user import User
from src.utils.password import hash_password


class UserModel:
    @staticmethod
    async def create_user(username: str, password: str) -> User:
        user = await UserRepository.get_user_by_username(username)
        if user:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                                detail=f"User already exists with '{username}' username")

        hashed_password = hash_password(password)
        user_data = {
            'username': username,
            'hashed_password': hashed_password,
            'last_seen': datetime.utcnow(),
            'registration_date': datetime.utcnow()
        }
        return await UserRepository.create_user(user_data)

    @staticmethod
    async def get_all_users() -> list[User]:
        return await UserRepository.get_all_users()

    @staticmethod
    async def get_user_by_username(username: str) -> User:
        user = await UserRepository.get_user_by_username(username)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                detail=f"User with username '{username}' not found")
        return user

    @staticmethod
    async def get_user_by_id(user_id: PydanticObjectId) -> User:
        user = await UserRepository.get_user_by_uuid(user_id)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with ID '{user_id}' not found")
        return user

    @staticmethod
    async def update_user_password(username: str, new_password: str) -> None:
        user = await UserModel.get_user_by_username(username)
        await UserRepository.update_user_password(user, new_password)

    @staticmethod
    async def delete_user_by_username(username: str) -> None:
        user = await UserModel.get_user_by_username(username)
        await UserRepository.delete_user(user)

    @staticmethod
    async def delete_user_by_id(user_id: PydanticObjectId) -> None:
        user = await UserModel.get_user_by_id(user_id)
        await UserRepository.delete_user(user)
