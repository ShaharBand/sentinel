from datetime import timedelta

from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm

from src.api.routers.auth import oauth2_scheme
from src.core.security.password import verify_password
from src.core.security.token import decode_jwt_token, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES, Token
from src.api.models.user import UserModel
from src.dal.entities.user import User


class AuthController:
    @staticmethod
    async def authenticate_user(username: str, password: str) -> User:
        user = await UserModel.get_user_by_username(username)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                detail=f"Authentication failed invalid credentials")

        hashed_password = user.hashed_password
        if not verify_password(password, hashed_password):
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                detail=f"Authentication failed invalid credentials")
        return user

    @staticmethod
    async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
        decoded_token_username = await decode_jwt_token(token)
        user = await UserModel.get_user_by_username(decoded_token_username)
        if user is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail=f"Authentication failed invalid credentials")
        return user

    @staticmethod
    async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()) -> Token:
        user = await AuthController.authenticate_user(form_data.username, form_data.password)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires
        )
        return Token(access_token=access_token, token_type="bearer")
