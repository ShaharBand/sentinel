# Sentinel - Backend

## Requirements

- 🐋 [Docker](https://github.com/docker/compose): for development and production.
  - 📦 [UV](https://github.com/astral-sh/uv): An extremely fast Python package and project manager.

## Local Development

You have several options to run the FastAPI backend:

**Option 1: Python Run**

Navigate to the `backend` directory and use the following command (make sure your working dir is the `backend`):

```commandline
python src/main.py
```

**Option 2: Docker Compose**

Start the stack with Docker Compose:

```commandline
docker compose up -d
```

- Automatic interactive documentation with Swagger UI (from the OpenAPI backend): http://localhost:5000/docs

If your Docker is not running in localhost (the URLs above wouldn't work) you would need to use the IP or domain where your Docker is running.

## General workflow

By default, the dependencies are managed with [UV](https://github.com/astral-sh/uv),
Installation can be found from standalone installers or from [PyPI](https://pypi.org/project/uv/):
```commandline
# On macOS and Linux.
$ curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows.
$ powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# With pip.
$ pip install uv
```

From `./backend/` you can install all the dependencies with:

```commandline
$ uv sync
```

Then you can activate the virtual environment with:

```commandline
$ source .venv/bin/activate
```

Make sure your editor is using the correct Python virtual environment, with the interpreter at `backend/.venv/bin/python`.

## Modify the Configuration with Environment Variables:

To configure the application, utilize environment files (`.env`) to specify settings such as database connection details, application port, and other environment-specific configurations.

**Environment Settings:**
The application supports configuration based on environment settings for both development and production environments. You can find the configuration settings in `app.py`, `db.py`, and `metadata.py`, all residing within the directory `backend/src/core/config/`.

Each configuration is designated with a distinct environment variable prefix: `BACKEND_`, `DB_`, `METADATA_`.

**Production Environment Setup:**
The system checks for the `BACKEND_ENVIRONMENT` environment variable to determine if the environment is a production environment. This allows for overriding of reload settings and the setup of workers as necessary.

**Docker Integration**
If you plan on using Docker, the `.dockerignore` file is configured to ignore the environment files. This setup allows you to load the environment variables specifically for Docker Compose usage, providing flexibility for both development and production environments. You can also set up separate Docker Compose files for development and production (`docker-compose.dev.yml` and `docker-compose.prod.yml`) to ensure consistency across environments.

Before deploying it, make sure you change at least the values for the database.
