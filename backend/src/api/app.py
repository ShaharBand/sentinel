from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.routers.auth import router as auth_router
from src.api.routers.device import router as devices_router
from src.api.routers.statistics import router as statistics_router
from src.api.routers.user import router as users_router
from src.core.config.provider import ConfigProvider
from src.core.db import init_db


@asynccontextmanager
async def lifespan(instance: FastAPI):
    _ = instance
    await init_db()
    yield

config = ConfigProvider()
app_metadata = config.metadata()
app_config = config.app_settings()

app = FastAPI(root_path="/api",
              title=app_metadata.PROJECT_NAME,
              description=app_metadata.PROJECT_DESCRIPTION,
              version=app_metadata.VERSION,
              lifespan=lifespan,
              responses={404: {"description": "Not found"}})

if app_config.CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            str(origin).strip("/") for origin in app_config.CORS_ORIGINS
        ],
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE"],
        allow_headers=["*"],
    )

app.include_router(users_router)
app.include_router(devices_router)
app.include_router(statistics_router)
app.include_router(auth_router)
