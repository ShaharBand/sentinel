import uvicorn

from src.config.manager import ConfigManager


def run_server():
    app_config = ConfigManager.get_app_config()
    uvicorn.run("main:app",
                reload=False,
                host=app_config.ip,
                port=app_config.port,
                workers=app_config.workers)


if __name__ == "__main__":
    run_server()
