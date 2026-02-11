
<div align="center">

#  TaskKing - MERN Task Manager

</div>

A **full-stack Task Management Web Application** built with **MERN stack** (MongoDB, Express, React, Node.js) featuring **JWT authentication**, **protected dashboard**, and **complete CRUD functionality** for user-specific tasks.

## ✨ **Live Demo**
https://tasks-react-app-mern-stack-auth.vercel.app/  

(To use LiveDemo: Make sure to allow third party cookies, as frontend is hosted on Vercel while backend is hosted on render,
Backend sets cookie for frontend(different site, so 3rd party cookies needs to be enabled for jwt cookies to work).

## ✨ Features

### **Authentication & Security**
- User registration & login
- JWT tokens in **HTTP-only cookies**
- Protected routes & middleware
- Password hashing (bcrypt)
- Centralized error handling

### **User Dashboard**
- View/update user profile
- Persistent login (Redux + localStorage)
- Secure logout (cookie invalidation)

### ✅ **Task Management (CRUD)**
- Private tasks per user
- Create, edit, complete, delete
- User-scoped data isolation

### **Modern Frontend**
- React 18 + Vite (fast builds)
- Redux Toolkit + RTK Query (caching)
- React Bootstrap (responsive)
- Toast notifications

### **Production Backend**
- RESTful API design
- MongoDB + Mongoose
- Clean MVC architecture

## Tech Stack

| **Frontend** | **Backend** |
|--------------|-------------|
| React | Node.js |
| Vite | Express |
| Redux Toolkit | MongoDB |
| RTK Query | Mongoose |
| React Bootstrap | JWT |
| React Toastify | bcrypt |

## Project Structure

```
root/
├── backend/
│   ├── config/         # Database
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth, errors
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/     # RTK Query + Redux
│   │   ├── store.js
│   │   └── App.jsx
└── README.md
```

##  API Endpoints

### **Auth & Users**
| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/users` | Register |
| `POST` | `/api/users/auth` | Login |
| `POST` | `/api/users/logout` | Logout |
| `GET` | `/api/users/profile` | Get profile |
| `PUT` | `/api/users/profile` | Update profile |

### **Tasks (Protected)**
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Create task |
| `PUT` | `/api/tasks/:id` | Update task |
| `DELETE` | `/api/tasks/:id` | Delete task |

## Quick Start

### 1. Clone & Backend Setup
```bash
git clone <your-repo-url>
cd <project-folder>

# Backend
npm install
# Create file → .env
npm run server
```


**`.env` example:**
```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Production Ready

✅ **Deployed**: Vercel (frontend) + Render (backend)  
✅ **Secure**: HTTP-only cookies + HTTPS  
✅ **Scalable**: MVC structure, RTK Query caching  
✅ **Extendable**: Add filters, pagination, RBAC easily  

**Future upgrades**: Docker, Redis, task search, categories

## Status

✅ **Complete & Live**  
⭐ **Star this repo** if you find it useful!


<div align="center">
  <sub>Made with MERN Stack</sub>
</div>
