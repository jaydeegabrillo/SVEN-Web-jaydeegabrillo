# New Application

This guide will help you set up and run the application locally using Docker.

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (if you want to run the frontend separately)
- [Composer](https://getcomposer.org/) (for PHP dependencies, if running backend without Docker)

## Project Structure

```
SVEN-Web-jaydeegabrillo/
  backend/      # Laravel PHP backend
  frontend/     # Frontend application
  docker-compose.yml
  .env
```

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/jaydeegabrillo/SVEN-Web-jaydeegabrillo.git
cd SVEN-Web-jaydeegabrillo
```

### Edit the `.env` files as needed for your environment.

### 2. Build and Start with Docker

```sh
docker-compose up --build
```

This will start the backend and frontend containers.

### 3. Access the Application

- Backend API (Swagger): http://localhost:8000/api/documentation

- Frontend Landing Page: http://localhost:3000 (or as configured)
- Appointments Page: http://localhost:3000/appointments

## Additional Notes

- Update the `.env` files with your database and service credentials.
- For more advanced configuration, see the documentation in each subdirectory.

## DB MySQL 
Host: 127.0.0.1
Port: 3310
User: root
Password: root
Database: boilerplay

```