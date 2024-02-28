import uvicorn

from fastapi import FastAPI

from src.middleware.db import init_db
from src.routers import *
from src.utils.config import config

app = FastAPI()


@app.on_event("startup")
async def startup_event():
    await init_db()


app.include_router(users_router, prefix="/api")
app.include_router(devices_router, prefix="/api")


def run_server():
    uvicorn.run("main:app", reload=True, host=config.IP, port=config.PORT)


if __name__ == "__main__":
    run_server()
