from pydantic_settings import BaseSettings


class AppConfig(BaseSettings):
    # Application Configuration
    IP: str = "127.0.0.1"
    PORT: int = 5000
    VERSION: str = "0.0.1"

    # Database Configuration
    DB_USERNAME: str = "postgres"
    DB_PASSWORD: str = "123456"
    DB_HOST: str = "localhost"
    DB_PORT: str = "5432"
    DB_NAME: str = "sentinel"

    @property
    def DB_URI(self) -> str:
        return f'postgres://{self.DB_USERNAME}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}'


config = AppConfig()

if __name__ == '__main__':
    print(f"IP Address: {config.IP}")
    print(f"Port: {config.PORT}")
    print(f"Version: {config.VERSION}")
    print(f"DB Username: {config.DB_USERNAME}")
    print(f"DB Password: {config.DB_PASSWORD}")
    print(f"DB Host: {config.DB_HOST}")
    print(f"DB Port: {config.DB_PORT}")
    print(f"DB Name: {config.DB_NAME}")
    print(f"DB URI: {config.DB_URI}")
