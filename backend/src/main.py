import uvicorn

from src.core.config.environment import Environment
from src.core.config.provider import ConfigProvider


def run_server():
    app_settings = ConfigProvider.app_settings()
    dev_environment = app_settings.ENVIRONMENT == Environment.DEVELOPMENT

    uvicorn.run(
        "api.app:app",
        host=app_settings.DOMAIN,
        port=app_settings.PORT,
        reload=dev_environment,
        workers=app_settings.WORKER_COUNT if not dev_environment else None
    )


if __name__ == "__main__":
    run_server()
