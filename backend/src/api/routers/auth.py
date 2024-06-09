from fastapi import APIRouter, Depends

from src.api.controllers.auth import AuthController
from src.core.security.token import Token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/token/")
async def login_token(token: Token = Depends(AuthController.login_for_access_token)) -> Token:
    return token
