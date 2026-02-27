# CipherSQL Studio Backend

Backend API for **CipherSQL Studio**, a browser-based SQL learning platform.

This server provides:

- Assignment APIs
- Sample data APIs
- SQL query execution
- Hint system
- MongoDB persistence
- PostgreSQL query engine

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- PostgreSQL
- dotenv
- CORS

---

## 📁 Project Structure
# CipherSQL Studio Backend

Backend API for **CipherSQL Studio**, a browser-based SQL learning platform.

This server provides:

- Assignment APIs
- Sample data APIs
- SQL query execution
- Hint system
- MongoDB persistence
- PostgreSQL query engine

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- PostgreSQL
- dotenv
- CORS

---

## 📁 Project Structure
backend/
│
├── controllers/
│ ├── assignmentController.js
│ └── queryController.js
│
├── db/
│ ├── mongo.js
│ └── postgres.js
│
├── models/
│ └── Attempt.js
│
├── routes/
│ ├── assignmentRoutes.js
│ └── queryRoutes.js
│
├── .env
├── app.js
└── package.json


---

## ⚙️ Environment Variables

Create `.env` file:

```env
PORT=5000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# PostgreSQL
PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=ciphersql
PG_PASSWORD=your_password
PG_PORT=5002


---

## ⚙️ Environment Variables

Create `.env` file:

```env
PORT=5000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# PostgreSQL
PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=ciphersql
PG_PASSWORD=your_password
PG_PORT=5002
or

node app.js

Server runs on:

http://localhost:5000
🌐 API Endpoints
Assignment APIs
GET    /api/assignments
GET    /api/assignments/:id
GET    /api/sample-data/:table
GET    /api/hint/:id
POST   /api/assignments
SQL Execution API
POST   /api/execute
Request Body
{
  "query": "SELECT * FROM students;"
}
Response
{
  "success": true,
  "data": []
}
🧠 Database Usage
MongoDB

Used for:

Assignment data

User attempts

Persistence layer

PostgreSQL

Used for:

SQL query execution

Sandbox database