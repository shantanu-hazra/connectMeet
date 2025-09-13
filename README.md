# 🚀 connectMeet

A full-stack application to connect people for meetings via scheduling and real-time communication. It includes a backend server exposing APIs, and a frontend UI where users can schedule, join, and manage meetings.

---

## 📌 Table of Contents
- [Overview](#overview)  
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Architecture](#architecture)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Configuration](#configuration)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 📖 Overview
connectMeet is an API-driven platform for scheduling, managing, and joining meetings. It offers a robust backend with exposed APIs and a frontend for user interaction. Users can create meetings, invite participants, view upcoming meetings, and join meetings in real time.

---

## ✨ Features
- Create, edit, and delete meetings  
- Invite and manage participants  
- View upcoming meetings / meeting history  
- Join meetings in real time  
- User authentication and authorization  
- Responsive, user-friendly UI  

---

## 🔎 How It Works
1. **User registers or logs in** via the frontend UI.  
2. **Frontend sends API requests** for scheduling, updating, or deleting meetings.  
3. **Backend validates requests**, checks permissions & data.  
4. **Meetings are stored** in the database.  
5. Participants get notified / invited.  
6. **Real-time connections** are established for joining meetings (if applicable).  
7. **Frontend displays meeting details**, upcoming schedules, and lets users join or manage meetings.

---

## 🏗 Architecture

connectMeet/

├── backend/ # API & server logic

└── frontend/ # Client UI

- **Backend**: Handles authentication, meeting CRUD, participant management, APIs.  
- **Frontend**: Web interface for users to interact with connectMeet (schedule, join, view).  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express (if used)  
- **Frontend:** React / Vue / something (whatever the repo uses)  
- **Real-time:** WebSockets / Socket.io (if used)  
- **Database:** MongoDB / SQL / etc.  
- **Package Manager:** npm / yarn  

---

## ⚙️ Getting Started

### Prerequisites
- Node.js & npm (or yarn)  
- Database (if applicable) set up (e.g. MongoDB instance)  

### Installation
Clone the repository:

```bash
git clone https://github.com/shantanu-hazra/connectMeet.git
cd connectMeet
```

**Backend:**

```bash
cd backend
npm install
npm run start   # or however the server is started
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev     # or build / serve, depending on setup
```

Open the frontend (e.g. http://localhost:3000) in browser.


## 🔧 Configuration

###Use .env file(s) for sensitive configuration (DB connection strings, JWT secret, ports).

Example environment variables:
```ini
PORT=5000
DB_URI=mongodb://localhost:27017/connectmeet
JWT_SECRET=your_jwt_secret_here
```

For real-time functionality, additional configs may be needed (e.g. WebSocket server URL).

## 🔗 API Endpoints

**List of backend endpoints (fill in actual paths / request / response). Example template:**

| Endpoint                 | Method       | Description                    | Request Body / Parameters                                  | Response                                |
| ------------------------ | ------------ | ------------------------------ | ---------------------------------------------------------- | --------------------------------------- |
| `/api/auth/register`     | POST         | Register a new user            | `{ "username": "...", "email": "...", "password": "..." }` | User object + token                     |
| `/api/auth/login`        | POST         | Login existing user            | `{ "email": "...", "password": "..." }`                    | Token, user info                        |
| `/api/meetings`          | GET          | Get upcoming / user’s meetings | — (may need auth header)                                   | List of meetings                        |
| `/api/meetings`          | POST         | Create a new meeting           | `{ "title": "...", "time": "...", "participants": [...] }` | Newly created meeting object            |
| `/api/meetings/:id`      | PUT / DELETE | Update or delete meeting       | —                                                          | Updated meeting / deletion confirmation |
| `/api/meetings/:id/join` | POST         | Join meeting                   | `{ "meetingId": "...", "userId": "..." }`                  | Confirmation / meeting info             |
