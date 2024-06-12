<div align="center">
  <img src="./img/logo.png" width="250px" alt="Sentinel Logo" title="Sentinel Logo">
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
  - 📦 [Poetry](https://github.com/python-poetry/poetry): A dependency management and packaging tool for Python.

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

**2. Configure**

You can then update configs in the `.env` files to customize your configurations.

Before deploying it, make sure you change at least the values for:

- `APP_ENVIRONMENT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_SERVER`
- `DB_PORT`
- `DB_NAME`

You can (and should) pass the database password as environment variable from secrets.

<br>

## Backend Development

Backend docs: [backend/README.md](backend/README.md).
<br><br>

## Frontend Development

Frontend docs: frontend/README.md. -- TO DO
<br><br>

## Deployment

Deployment docs: deployment.md. -- TO DO
<br><br>

## 👨‍💻 Contributions:

We welcome contributions to this project! Please feel free to fork the repository and create pull requests.
<br><br>

## 💼 License:

This project is licensed under the MIT License.
