from fastapi import APIRouter, Depends

import src.api.controllers.auth as auth_controller
from src.core.security.token import Token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/token/")
async def login_token(token: Token = Depends(auth_controller.login_for_access_token)) -> Token:
    return token
