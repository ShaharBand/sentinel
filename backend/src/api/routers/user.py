from fastapi import APIRouter, Depends

import src.api.controllers.auth as auth_controller
import src.api.controllers.user as user_controller
from src.dal.entities.user import User

router = APIRouter(prefix="/user", tags=["user"])


@router.post("/add")
async def add_user(username: str, password: str) -> User:
    user = await user_controller.create_user(username, password)
    return user


@router.get("/")
async def read_users() -> list[User]:
    users = await user_controller.get_all_users()
    return users


@router.get("/me")
async def read_user_me(current_user: User = Depends(auth_controller.get_current_user)):
    return current_user


@router.get("/{username}")
async def read_user(username: str) -> User:
    user = await user_controller.get_user_by_username(username)
    return user
