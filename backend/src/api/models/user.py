from datetime import datetime

from beanie import PydanticObjectId
from fastapi import HTTPException, status

import src.dal.repositories.user as user_repository
from src.core.security.password import hash_password
from src.dal.entities.user import User


async def create_user(username: str, password: str) -> User:
    user = await user_repository.get_user_by_username(username)
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
    return await user_repository.create_user(user_data)


async def get_all_users() -> list[User]:
    return await user_repository.get_all_users()


async def get_user_by_username(username: str) -> User:
    user = await user_repository.get_user_by_username(username)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with username '{username}' not found")
    return user


async def get_user_by_id(user_id: PydanticObjectId) -> User:
    user = await user_repository.get_user_by_uuid(user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with ID '{user_id}' not found")
    return user


async def update_user_password(username: str, new_password: str) -> None:
    user = await get_user_by_username(username)
    await user_repository.update_user_password(user, new_password)


async def delete_user_by_username(username: str) -> None:
    user = await get_user_by_username(username)
    await user_repository.delete_user(user)


async def delete_user_by_id(user_id: PydanticObjectId) -> None:
    user = await get_user_by_id(user_id)
    await user_repository.delete_user(user)
