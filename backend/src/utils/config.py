from pydantic_settings import BaseSettings


class AppConfig(BaseSettings):
    # Application Configuration
    VERSION: str = "0.0.1"

    # Database Configuration
    DB_USERNAME: str = "postgres"
    DB_PASSWORD: str = "123456"
    DB_HOST: str = "localhost"
    DB_PORT: str = "5432"
    DB_NAME: str = "sentinel"

    # Computed property for DB_URI
    @property
    def DB_URI(self) -> str:
        return f'postgres://{self.DB_USERNAME}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}'


# Create an instance of AppConfig
config = AppConfig()

if __name__ == '__main__':
    # Access the configuration values
    print(f"Version: {config.VERSION}")
    print(f"DB Username: {config.DB_USERNAME}")
    print(f"DB Password: {config.DB_PASSWORD}")
    print(f"DB Host: {config.DB_HOST}")
    print(f"DB Port: {config.DB_PORT}")
    print(f"DB Name: {config.DB_NAME}")
    print(f"DB URI: {config.DB_URI}")
