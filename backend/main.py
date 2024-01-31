from fastapi import FastAPI
from backend.src.routers import users_router
from backend.src.routers import devices_router

app = FastAPI()

app.include_router(users_router, prefix="/api")
app.include_router(devices_router, prefix="/api")


def run_uvicorn():
    import uvicorn
    uvicorn.run("main:app", reload=True, host="127.0.0.1", port=8000)


if __name__ == "__main__":
    run_uvicorn()

