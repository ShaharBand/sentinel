# Sentinel - Frontend

## Requirements

- 🐋 [Docker](https://github.com/docker/compose): for development and production.
- 📦 [Node.js](https://nodejs.org/en): JavaScript runtime environment. Includes npm for package management.

## Local Development

You have several options to run the frontend:

**Option 1: NPM**

Within the `frontend` directory, install the necessary NPM packages:

```
npm install
```

And start the live server with the following npm script:

```commandline
npm run dev
```

- Then open your browser at http://localhost:5173/.

Notice that this live server is not running inside Docker, it's for local development, and that is the recommended workflow. Once you are happy with your frontend, you can build the frontend Docker image and start it, to test it in a production-like environment. But building the image at every change will not be as productive as running the local development server with live reload.

Check the file `package.json` to see other available options.

**Option 2: Docker - NGINX**

Start the stack with Docker Compose:

```commandline
docker compose up -d
```

- Then open your browser at http://localhost:80/.
