# Resource Management API

## Overview

This API allows users to manage resources through CRUD (Create, Read, Update, Delete) operations. It is built using Node.js and TypeScript, with SQLite as the database for data persistence.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/) (you can install it globally)

## Installation

 **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

## Install dependencies:

```bash
npm install
```

### Install TypeScript globally (if not already installed):
```bash
npm install -g typescript
```
## Running the Application

### Compile TypeScript to JavaScript:
```bash
tsc
```

### Run the application:
```bash
node dist/app.js
```
## API Endpoints:

- Create Resource: 		```POST /api/resources```
- Get All Resources: 		```GET /api/resources```
- Get Resource by ID: 	```GET /api/resources/:id```
- Update Resource: 		```PUT /api/resources/:id```
- Delete Resource: 		```DELETE /api/resources/:id```

### Example Requests

#### Create Resource:
```bash
curl -X POST http://localhost:3000/api/resources \
-H "Content-Type: application/json" \
-d '{"name": "Resource Name", "description": "Resource Description"}'
```
#### Get All Resources:
```bash
curl http://localhost:3000/api/resources
```
#### Get Resource by ID:
```bash
curl http://localhost:3000/api/resources/1
```
#### Update Resource:
```bash
curl -X PUT http://localhost:3000/api/resources/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Name", "description": "Updated Description"}'
```
#### Delete Resource:
```bash
curl -X DELETE http://localhost:3000/api/resources/1
```
## Notes

Ensure that the SQLite database is properly set up and the necessary tables are created before running the application.
Adjust the server port in the code if needed (default is 3000).
