from datetime import datetime, timedelta, timezone

import jwt
from jwt import InvalidTokenError, DecodeError
from pydantic import BaseModel

from src.core.config.provider import ConfigProvider

app_settings = ConfigProvider.app_settings()
SECRET_KEY = app_settings.SECRET_KEY
ACCESS_TOKEN_EXPIRE_MINUTES = app_settings.ACCESS_TOKEN_EXPIRE_MINUTES
ALGORITHM = "HS256"


class Token(BaseModel):
    access_token: str
    token_type: str


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def decode_jwt_token(token: str) -> str:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise DecodeError("Username is missing in token payload")

    except InvalidTokenError:
        raise InvalidTokenError("Invalid token")

    return username
