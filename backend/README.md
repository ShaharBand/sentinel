# FastAPI Project - Backend

## Requirements

    - 🐋 [Docker](https://github.com/docker/compose): for development and production.
    - 📦 [Poetry](https://github.com/python-poetry/poetry): for Python package and environment management.

## Local Development

Start the stack with Docker Compose:

```commandline
docker compose up -d
```

- Automatic interactive documentation with Swagger UI (from the OpenAPI backend): http://localhost:5000/docs

If your Docker is not running in localhost (the URLs above wouldn't work) you would need to use the IP or domain where your Docker is running.

### General workflow

By default, the dependencies are managed with [Poetry](https://github.com/python-poetry/poetry), go there and install it.

From `./backend/` you can install all the dependencies with:

```commandline
$ poetry install
```

Then you can start a shell session with the new environment with:

```commandline
$ poetry shell
```

Make sure your editor is using the correct Python virtual environment.

## Modify the Configuration with Environment Variables:

To configure the application, utilize environment files (`.env`) to specify settings such as database connection details, application port, and other environment-specific configurations.

**Environment Settings:**
The application supports configuration based on environment settings for both development and production environments. You can find the configuration settings in `app.py`, `db.py`, and `metadata.py`, all residing within the directory `backend/src/core/config/`.

Each configuration is designated with a distinct environment variable prefix: `APP_`, `DB_`, `METADATA_`.

**Production Environment Setup:**
The system checks for the `APP_ENVIRONMENT` environment variable to determine if the environment is a production environment. This allows for overriding of reload settings and the setup of workers as necessary.

**Docker Integration**
If you plan on using Docker, the `.dockerignore` file is configured to ignore the environment files. This setup allows you to load the environment variables specifically for Docker Compose usage, providing flexibility for both development and production environments. You can also set up separate Docker Compose files for development and production (`docker-compose.dev.yml` and `docker-compose.prod.yml`) to ensure consistency across environments.

Before deploying it, make sure you change at least the values for the database.
