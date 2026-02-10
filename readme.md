📝 Task Manager – MERN Stack App with Authentication & Dashboard

A full-stack Task Management Web Application built using the MERN stack (MongoDB, Express, React, Node.js) with JWT-based authentication, a protected dashboard, and complete CRUD functionality for tasks.

This project demonstrates real-world frontend–backend integration, security practices, and scalable architecture.

🚀 Features
🔐 Authentication & Security

User registration and login

JWT-based authentication (stored securely via HTTP-only cookies)

Protected routes (dashboard accessible only when logged in)

Password hashing using bcrypt

Centralized error handling

🧑‍💻 User Dashboard

View and update user profile

Persistent login using Redux + localStorage

Logout flow with token invalidation

✅ Task Management (CRUD)

Each logged-in user gets their own private task list:

Create new tasks

Edit task title

Mark tasks as completed

Delete tasks

Tasks are user-scoped (one user cannot access another user’s tasks)

🎨 Frontend

Built with React + Vite

State management using Redux Toolkit + RTK Query

UI components styled with React-Bootstrap

Responsive design

Toast notifications for feedback

⚙️ Backend

Node.js + Express

RESTful API design

MongoDB with Mongoose ODM

Clean MVC-style folder structure

🛠️ Tech Stack

Frontend

React

Vite

React Router

Redux Toolkit + RTK Query

React-Bootstrap

React Toastify

Backend

Node.js

Express.js

MongoDB + Mongoose

JSON Web Tokens (JWT)

bcrypt

📁 Project Structure
root/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── userController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── taskModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── taskRoutes.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/
│   │   ├── store.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── .env.example
├── package.json
└── README.md

🔗 API Endpoints

Auth & Users
Method	Route	Description
POST	/api/users	Register user
POST	/api/users/auth	Login user
POST	/api/users/logout	Logout user
GET	/api/users/profile	Get user profile
PUT	/api/users/profile	Update user profile

Tasks (Protected)
Method	Route	Description
GET	/api/tasks	Get all tasks for logged-in user
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task


🧪 API Testing

You can test all endpoints using:

Postman

Authentication is handled automatically via cookies once logged in.

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>
cd <project-folder>

2️⃣ Backend setup
npm install


Create .env file:

NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run server

3️⃣ Frontend setup
cd frontend
npm install
npm run dev

📈 Scalability & Production Notes

If this were deployed to production:

Frontend would be built and served via Nginx or CDN

Backend would be containerized (Docker)

MongoDB Atlas for managed DB

HTTPS + secure cookies

Rate limiting & logging (Winston / Morgan)

Role-based access control (RBAC) if extended

Searching of task and pagination will be handled at server

The codebase is already structured to support these upgrades with minimal refactoring.


📌 Status

✅ Complete and functional
🚧 Actively extendable (filters, due dates, task categories, etc.)
