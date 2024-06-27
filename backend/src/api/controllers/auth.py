from datetime import timedelta

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

import src.api.models.user as user_model
from src.core.security.password import verify_password
from src.core.security.token import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    Token,
    create_access_token,
    decode_jwt_token,
)
from src.dal.entities.user import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token/")


async def authenticate_user(username: str, password: str) -> User:
    user = await user_model.get_user_by_username(username)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Authentication failed invalid credentials")

    hashed_password = user.hashed_password
    if not verify_password(password, hashed_password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Authentication failed invalid credentials")
    return user


async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    decoded_token_username = await decode_jwt_token(token)
    user = await user_model.get_user_by_username(decoded_token_username)
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Authentication failed invalid credentials")
    return user


async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()) -> Token:
    user = await authenticate_user(form_data.username, form_data.password)
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
