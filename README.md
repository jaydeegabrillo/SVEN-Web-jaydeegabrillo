# New Application

This guide will help you set up and run the application locally using Docker.

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (if you want to run the frontend separately)
- [Composer](https://getcomposer.org/) (for PHP dependencies, if running backend without Docker)

## Project Structure

```
new-application/
  backend/      # Laravel PHP backend
  frontend/     # Frontend application
  docker/       # Docker configuration files
  docker-compose.yml
  .env
```

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd new-application
```

### 2. Copy Environment Files

```sh
cp backend/laravel/.env.example backend/laravel/.env
cp .env.example .env
```

Edit the `.env` files as needed for your environment.

### 3. Build and Start with Docker

```sh
docker-compose up --build
```

This will start the backend and frontend containers.

### 4. Install Dependencies (if not using Docker)

#### Backend

```sh
cd backend/laravel
composer install
php artisan key:generate
```

#### Frontend

```sh
cd frontend
npm install
npm run dev
```

### 5. Access the Application

- Backend API: http://localhost:8000
- Frontend: http://localhost:3000 (or as configured)

## Running Tests

### Backend

```sh
docker exec -it sven-backend bash
composer require darkaonline/l5-swagger
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

### Frontend

```sh
cd frontend
npm test
```

## Additional Notes

- Update the `.env` files with your database and service credentials.
- For more advanced configuration, see the documentation in each subdirectory.

```sh
docker compose build

## backend
cd backend/laravel
composer install
php artisan key:generate

## Migration 
docker exec -it sven-backend bash
cd laravel
php artisan migrate

## frontend
cd frontend
npx create-react-app
npm init
npm i
docker exec -it react-app bash
npm install axios


## DB MySQL 
Host: 127.0.0.1
Port: 3310
User: root
Password: root
Database: boilerplay

```