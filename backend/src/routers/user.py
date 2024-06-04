from fastapi import APIRouter, Depends

from src.controllers.auth import AuthController
from src.controllers.user import UserController
from src.dal.entities.user import User
from src.middleware.token import Token

router = APIRouter(prefix="/user",
                   tags=["user"])


@router.post("/add")
async def add_user(username: str, password: str) -> User:
    user = await UserController.create_user(username, password)
    return user


@router.get("/")
async def read_users() -> list[User]:
    users = await UserController.get_all_users()
    return users


@router.get("/{username}")
async def read_user(username: str) -> User:
    user = await UserController.get_user_by_username(username)
    return user


@router.get("/me/")
async def read_user_me(current_user: User = Depends(AuthController.get_current_user)):
    return current_user


# TODO: a auth router it is not really belong here
@router.post("/token/")
async def login_for_access_token(token: Token = Depends(AuthController.login_for_access_token)) -> Token:
    return token
