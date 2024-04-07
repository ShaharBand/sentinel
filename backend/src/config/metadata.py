from pydantic_settings import BaseSettings


class Metadata(BaseSettings):
    NAME: str = "Sentinel"
    DESCRIPTION: str = "A user-friendly Command & Control platform API."
    AUTHOR: str = "Shahar Band"
    VERSION: str = "1.0.0"
