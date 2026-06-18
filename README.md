# GitHub Profile Analyzer API

## Overview

Backend service that analyzes GitHub user profiles using the GitHub API and stores insights in MySQL.

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- MySQL (Aiven Cloud)
- GitHub API

## Features

- Analyze GitHub profile by username
- Store insights in MySQL
- Fetch all stored profiles
- Fetch single profile by username

## Setup

1. Clone repo
   ```bash
   git clone https://github.com/06naresh/github-profile-analyzer.git
   cd github-profile-analyzer
   ```

### Install dependencies

```bash
npm install
```

## Configure .env (use .env.example as reference)

- DB_HOST=your-db-host
- DB_PORT=your-db-port
- DB_USER=your-db-user
- DB_PASS=your-db-password
- DB_NAME=defaultdb

## Run server

```bash
npm run dev
```

## API Endpoints

- GET /api/profiles/analyze/:username

- GET /api/profiles

- GET /api/profiles/:username

## Database

Schema export: schema.sql

## Postman

Collection: postman_collection.json

## Deployment

Live API URL: https://github-profile-analyzer-4yrj.onrender.com
