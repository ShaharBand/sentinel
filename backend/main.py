from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI

from src.config.manager import ConfigManager
from src.middleware.db import init_db
from src.routers import *


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app_metadata = ConfigManager.get_metadata()

app = FastAPI(root_path="/api",
              title=app_metadata.NAME,
              description=app_metadata.DESCRIPTION,
              version=app_metadata.VERSION,
              lifespan=lifespan)

app.include_router(users_router)
app.include_router(devices_router)


def run_server():
    app_config = ConfigManager.get_app_config()
    uvicorn.run("main:app",
                reload=False,
                host=app_config.ip,
                port=app_config.port,
                workers=app_config.workers)


if __name__ == "__main__":
    run_server()
