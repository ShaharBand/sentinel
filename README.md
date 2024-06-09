<div align="center">
  <img src="./logo.png" width="250px" alt="Sentinel Logo" title="Sentinel Logo">
</div>

# Sentinel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ShaharBand/Sentinel/blob/main/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/ShaharBand/Sentinel/total.svg)](https://github.com/ShaharBand/Sentinel/releases)
[![GitHub repo size](https://img.shields.io/github/repo-size/ShaharBand/Sentinel.svg)](https://github.com/ShaharBand/Sentinel)
[![stars](https://img.shields.io/github/stars/ShaharBand/Sentinel.svg?style=badge)](https://github.com/ShaharBand/Sentinel/stargazers)
[![Python Version](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![last commit](https://img.shields.io/github/last-commit/ShaharBand/Sentinel.svg)](https://github.com/ShaharBand/Sentinel/commits/main)
[![Tests](https://github.com/ShaharBand/Sentinel/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/ShaharBand/Sentinel/actions/workflows/tests.yml)

A user-friendly Command & Control (C&C) web platform for remote monitoring, management, and task automation across multiple devices.
Equipped with agents, it enables users to seamlessly execute scripted tasks on target devices, empowering efficient data retrieval and remote actions.

<br>

## 🖥️ Technology Stack and Features

### Backend

- ⚡ [**FastAPI**](https://github.com/tiangolo/fastapi): for the Python backend API.
  - 🧰 [Beanie](https://github.com/roman-right/beanie): for the Python MongoDB database interactions (ODM).
  - 🔍 [Pydantic](https://github.com/samuelcolvin/pydantic): used by FastAPI, for the data validation and settings management.
  - 💾 [MongoDB](https://github.com/mongodb/mongo): as the NoSQL database.

### Frontend

- 🚀 [**React**](https://github.com/facebook/react) for the frontend.
  - 📜 [TypeScript](https://github.com/microsoft/TypeScript): Enhances JavaScript by adding types.
  - ⚡ [Vite](https://github.com/vitejs/vite): A next-generation frontend build tool for a faster and leaner development experience.
  - 💅 [EmotionJS](https://github.com/emotion-js/emotion): A library designed for writing CSS styles with JavaScript.
  - 🎨 [Material UI](https://github.com/mui/material-ui): for the frontend components.
  - 🦇 Dark mode support.

### Development and Deployment

- 🐋 [Docker Compose](https://github.com/docker/compose): for development and production.
  - 🔒 Secure password hashing by default.
  - 🔑 JWT (JSON Web Token) authentication.
  - ✅ Tests with [Pytest](https://github.com/pytest-dev/pytest).

### CI/CD

- 🚢 Deployment instructions using Docker Compose.
- 🏭 CI (continuous integration) and CD (continuous deployment) based on GitHub Actions.

<br>

## 🌱 Getting Started:

**1. Clone the repository:**

```commandline
https://github.com/ShaharBand/Sentinel.git
```

<br>

**2. Install Backend Dependencies:**

Navigate to the `backend` directory and install the backend dependencies using the following command:

```commandline
cd backend
pip install -r requirements.txt
```

<br>

**3. Install Frontend Dependencies:**

Before installing the Node Package Manager (NPM), you need to install Node.js.
You can download the latest version of Node.js from the official Node.js website.
<br>

Navigate to the frontend directory and install the frontend dependencies using the following command:

```commandline
cd frontend
npm install
```

This command installs the necessary Node.js packages specified in your project's `package.json` file.
<br><br>

**4. Modify the Configuration with Environment Variables:**

To configure the application, utilize environment files (`.env`) to specify settings such as database connection details, application port, and other environment-specific configurations.

**Environment Settings:**
The application supports configuration based on environment settings for both development and production environments. You can find the configuration settings in `app.py`, `db.py`, and `metadata.py`, all residing within the directory `backend/src/core/config/`.

Each configuration is designated with a distinct environment variable prefix: `APP_`, `DB_`, `METADATA_`.

**Production Environment Setup:**
The system checks for the `APP_ENVIRONMENT` environment variable to determine if the environment is a production environment. This allows for overriding of reload settings and the setup of workers as necessary.

**Docker Integration**
If you plan on using Docker, the `.dockerignore` file is configured to ignore the environment files. This setup allows you to load the environment variables specifically for Docker Compose usage, providing flexibility for both development and production environments. You can also set up separate Docker Compose files for development and production (`docker-compose.dev.yml` and `docker-compose.prod.yml`) to ensure consistency across environments.
<br><br>

**5. Run Backend**
You have two options to run the FastAPI backend:

In the `backend` directory, run the FastAPI backend using the following command:

```commandline
python src/main.py
```

Alternatively, if you prefer using Docker, you can use Docker Compose to run the application. Ensure you have Docker installed on your system.

```commandline
docker-compose up --build
```

<br>

**6. Run Frontend:**

In the `frontend` directory, run the Vite.js frontend using the following command:

```commandline
npm run dev
```

<br>

## 👨‍💻 Contributions:

We welcome contributions to this project! Please feel free to fork the repository and create pull requests.
<br><br>

## 💼 License:

This project is licensed under the MIT License.
