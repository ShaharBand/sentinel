# Sentinel - Deployment

You can deploy the project using Docker Compose to a remote server.

But you have to configure a couple things first. 🤓

# Preparation

* Have a remote server ready and available.
* Setup the required environment variables.
* Create and configure the MongoDB database user.

# Environment Variables
* `METADATA_PROJECT_NAME`: The name of the project, used in the API for the docs.
* `METADATA_PROJECT_DESCRIPTION`: The description of the project, used in the API for the docs.
* `METADATA_MAINTAINER`: The project maintainer (currently unused).
* `METADATA_VERSION`:  The version of the project, used in the API for the docs.
* `BACKEND_ENVIRONMENT`: The environment setup configuration. It can be either `development` or `production` *it is important to set correctly*.
* The `NODE_ENV` and `INSTALL_DEV` arguments in Docker Compose are also required to be setup according to this setting.

* `BACKEND_DOMAIN`: The backend host (Default value is `0.0.0.0`).
* `BACKEND_PORT`: The backend api port.
* `BACKEND_CORS_ORIGINS`: A list of allowed CORS origins separated by commas.
* `BACKEND_ACCESS_TOKEN_EXPIRE_MINUTES`: Define the token expiration time in minutes (Default value is `7 days`).
* `BACKEND_SECRET_KEY`: The secret key for the backend, used to sign tokens (Default value is `randomly generated`).
* `BACKEND_WORKER_COUNT`: The backend workers count (Default recommended value is `2x CPU cores + 1`)
* `DB_USER`: The MongoDB user, you must set a value because the URI depends on it.
* `DB_PASSWORD`: The MongoDB user password.
* `DB_SERVER`: The hostname of the MongoDB server. You can leave the default of db, provided by the same Docker Compose. You normally wouldn't need to change this unless you are using a third-party provider.
* `DB_PORT`: The port of the MongoDB server. You can leave the default. You normally wouldn't need to change this unless you are using a third-party provider.
* `DB_NAME`: The database name to use for this application. You can leave the default of `sentinel`.

<br>
* You can (and should) pass passwords and secret keys as environment variables from secrets.

# Initalizing MongoDB User

You can initialize the MongoDB user by either:

- Running the provided setup script on the MongoDB container:

  ```bash
  sh scripts/mongo-setup.sh
  ```

- Manually creating a user using the mongosh CLI.

# URLs

Frontend: http://sentinel.example.com:80

Backend API docs: http://sentinel.example.com:5000/docs / http://sentinel.example.com:5000/redocs

Backend API base URL:http://sentinel.example.com:5000/api

* Currently, there is no proxy handling communication to the outside world or managing HTTPS certificates. It is recommended to use Traefik or a similar proxy solution for handling these tasks.
