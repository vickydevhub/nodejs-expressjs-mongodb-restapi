# Node.js – Express.js – MongoDB REST API

A clean and modular RESTful API built with Node.js, Express, and MongoDB. This project is designed with a clear structure and ready for development, testing, and Docker deployment.

## Features

- Organized architecture with dedicated folders:
  - `controllers` – Request handlers
  - `models` – Mongoose schemas
  - `routes` – API endpoints
  - `middleware` – Custom middleware (e.g., error handling, auth)
- Includes `tests` folder for automated testing
- Docker support with `Dockerfile` and `docker-compose.yml`
- Ease of setup and integration for both development and production

## Requirements

- Node.js (v22+ recommended)
- MongoDB instance (local or cloud)
- Docker & Docker Compose (optional, for containerized deployment)


# 🔐 JWT Authentication Middleware (Express.js)

This project provides a reusable **JWT Authentication middleware** for **Express.js** applications.  
It validates tokens provided in the request header and restricts access to protected routes.

---

## 📦 Packages Used

- [express](https://www.npmjs.com/package/express) — Web framework for Node.js  
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — For signing and verifying JWT tokens  
- [jest](https://www.npmjs.com/package/jest) — Testing framework  
- [supertest](https://www.npmjs.com/package/supertest) — For testing Express APIs  

---

## Getting Started


## ⚙️ Installation

```bash
npm install express jsonwebtoken
npm install --save-dev jest supertest


### Clone this Repo
```bash
git clone https://github.com/vickydevhub/nodejs-expressjs-mongodb-restapi.git
cd nodejs-expressjs-mongodb-restapi
