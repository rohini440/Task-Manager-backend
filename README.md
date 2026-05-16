# 🚀 Ethara — Task & Project Management Platform

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) project management platform with role-based access control, task tracking, employee management, and an interactive admin dashboard.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
  - [Auth Routes](#auth-routes)
  - [Project Routes](#project-routes)
  - [Task Routes](#task-routes)
- [Database Models](#-database-models)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration & login with JWT-based authentication
- Role-based access control (**Admin** / **Member**)
- Password hashing with **bcryptjs**
- Protected routes with Bearer token middleware

### 📁 Project Management
- Create, read, update, and delete projects (Admin only)
- Add team members to projects
- View all projects or specific project details
- Project-level member assignment

### ✅ Task Management
- Full CRUD operations on tasks
- Assign tasks to specific team members
- Task statuses: `Todo`, `In Progress`, `Completed`
- Priority levels: `Low`, `Medium`, `High`
- Due date tracking
- Members can update task status; Admins can fully edit/delete

### 👥 Employee Management
- Employee listing with search functionality
- Auto-generated unique Employee IDs (e.g., `EMP-A3B7C9`)
- Admin panel for managing users (edit role, employee ID, delete accounts)
- Profile photo upload via **Multer**

### 📊 Dashboard
- Interactive dashboard overview with task statistics
- Charts and analytics powered by **Recharts**
- Quick access to projects, tasks, and team overview

### 🎨 Modern UI/UX
- Beautiful, responsive design with **TailwindCSS**
- Premium landing page with animations
- Smooth navigation with **React Router v7**
- Data fetching & caching with **TanStack React Query**

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server |
| **TailwindCSS 3** | Utility-first CSS framework |
| **React Router v7** | Client-side routing |
| **TanStack React Query** | Server state management & caching |
| **Axios** | HTTP client |
| **Recharts** | Data visualization / charts |
| **React Select** | Searchable dropdown components |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js 5** | Web framework |
| **MongoDB Atlas** | Cloud database |
| **Mongoose 9** | MongoDB ODM |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **Multer** | File upload handling |
| **CORS** | Cross-origin resource sharing |

---

## 📂 Project Structure

```
Rohini/
├── README.md
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection with retry logic
│   ├── controllers/
│   │   ├── authController.js    # Auth: register, login, profile, user CRUD
│   │   ├── projectController.js # Project CRUD operations
│   │   └── taskController.js    # Task CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT protect & role authorization
│   │   └── uploadMiddleware.js  # Multer file upload config
│   ├── models/
│   │   ├── User.js              # User schema (name, email, role, employeeId)
│   │   ├── Project.js           # Project schema (name, description, members)
│   │   └── Task.js              # Task schema (title, status, priority, dueDate)
│   ├── routes/
│   │   ├── authRoutes.js        # /api/auth/*
│   │   ├── projectRoutes.js     # /api/projects/*
│   │   └── taskRoutes.js        # /api/tasks/*
│   ├── uploads/                 # Profile photo uploads directory
│   ├── server.js                # Express app entry point
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx       # Dashboard sidebar + header layout
│   │   │   └── Layout.css
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Auth state management (Context API)
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx  # Public landing page
│   │   │   ├── Login.jsx        # Login form
│   │   │   ├── Signup.jsx       # Registration form
│   │   │   ├── DashboardOverview.jsx  # Main dashboard with charts
│   │   │   ├── ProjectsPage.jsx       # Projects listing
│   │   │   ├── SingleProjectPage.jsx  # Individual project view
│   │   │   ├── TasksPage.jsx          # Tasks board/listing
│   │   │   ├── ProfilePage.jsx        # User profile & photo upload
│   │   │   ├── EmployeeList.jsx       # Employee directory
│   │   │   └── AdminPanel.jsx         # Admin user management
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API service layer
│   │   ├── utils/               # Utility functions
│   │   ├── App.jsx              # Root component with routing
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env
```

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **MongoDB Atlas** account (or local MongoDB instance)
- **Git**

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd Rohini
```

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section below)

# Start development server (with auto-reload via nodemon)
npm run dev

# OR start production server
npm start
```

The backend server will start on **`http://localhost:5001`**

### Frontend Setup

```bash
# Navigate to frontend (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on **`http://localhost:5173`**

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

```env
NODE_ENV=development
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5001
```

> **Note:** For production deployment, update `VITE_API_URL` to your deployed backend URL.

---

## 📡 API Reference

Base URL: `http://localhost:5001/api`

### Auth Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/auth/register` | Public | Register a new user |
| `POST` | `/api/auth/login` | Public | Login & get JWT token |
| `GET` | `/api/auth/me` | Protected | Get logged-in user profile |
| `POST` | `/api/auth/photo` | Protected | Upload profile photo |
| `GET` | `/api/auth/users` | Admin | Get all users (with search) |
| `PUT` | `/api/auth/users/:id` | Admin | Update user details |
| `DELETE` | `/api/auth/users/:id` | Admin | Delete a user |

### Project Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/projects` | Protected | Get all projects |
| `POST` | `/api/projects` | Admin | Create a new project |
| `GET` | `/api/projects/:id` | Protected | Get project by ID |
| `PUT` | `/api/projects/:id` | Admin | Update a project |
| `DELETE` | `/api/projects/:id` | Admin | Delete a project |

### Task Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/tasks` | Protected | Get all tasks |
| `POST` | `/api/tasks` | Admin | Create a new task |
| `GET` | `/api/tasks/:id` | Protected | Get task by ID |
| `PUT` | `/api/tasks/:id` | Protected | Update task (status for members, full edit for admins) |
| `DELETE` | `/api/tasks/:id` | Admin | Delete a task |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API status check |
| `GET` | `/health` | Detailed health (DB status, uptime) |

---

## 🗄 Database Models

### User

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | User's full name (required) |
| `email` | String | Unique email address (required) |
| `password` | String | Hashed password, min 6 chars (required) |
| `role` | String | `member` or `admin` (default: `member`) |
| `profilePicture` | String | Path to uploaded profile image |
| `employeeId` | String | Auto-generated (e.g., `EMP-A3B7C9`) |
| `createdAt` | Date | Auto-generated timestamp |
| `updatedAt` | Date | Auto-generated timestamp |

### Project

| Field | Type | Description |
|-------|------|-------------|
| `projectName` | String | Name of the project (required) |
| `description` | String | Project description |
| `createdBy` | ObjectId → User | Creator reference (required) |
| `members` | [ObjectId → User] | Array of assigned members |
| `createdAt` | Date | Auto-generated timestamp |
| `updatedAt` | Date | Auto-generated timestamp |

### Task

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Task title (required) |
| `description` | String | Task description |
| `project` | ObjectId → Project | Parent project (required) |
| `assignedTo` | ObjectId → User | Assigned team member |
| `status` | String | `Todo` / `In Progress` / `Completed` |
| `priority` | String | `Low` / `Medium` / `High` |
| `dueDate` | Date | Task deadline |
| `createdBy` | ObjectId → User | Creator reference (required) |
| `createdAt` | Date | Auto-generated timestamp |
| `updatedAt` | Date | Auto-generated timestamp |

---

## 🌐 Deployment

The application is deployed using:

| Service | Component |
|---------|-----------|
| **Railway** | Backend API & Frontend hosting |
| **MongoDB Atlas** | Cloud database |

### Production URLs

- **Backend API:** `https://task-manager-backend-production-53cf.up.railway.app`
- **Frontend:** Deployed via Railway with Express static server

### Deploy Your Own

1. **Backend on Railway:**
   - Connect your GitHub repository
   - Set environment variables (`MONGO_URI`, `JWT_SECRET`, `FRONTEND_URL`)
   - Railway auto-detects the Node.js app and runs `npm start`

2. **Frontend on Railway:**
   - Build command: `npm run build`
   - The included `server.js` serves the production build via Express

3. **Database:**
   - Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Whitelist your deployment IP (or allow all: `0.0.0.0/0`)
   - Copy the connection string to `MONGO_URI`

---

## 🖼 Screenshots

> _Coming soon — screenshots of the landing page, dashboard, project board, and admin panel._

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">
  Built with ❤️ using the MERN Stack
</p>