import uvicorn

from src.config.environment import Environment
from src.config.manager import ConfigManager


def run_server():
    app_config = ConfigManager.get_app_config()

    is_development = app_config.environment == Environment.DEVELOPMENT
    reload = is_development
    workers = app_config.workers if not is_development else None

    uvicorn.run(
        "main:app",
        reload=reload,
        host=app_config.ip,
        port=app_config.port,
        workers=workers
    )


if __name__ == "__main__":
    run_server()
