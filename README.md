# Full Stack Todo List Application

This is a modern Todo List application built with React.js frontend and Express.js/MongoDB backend.

## Project Structure
```
todo-app/
├── client/          # React frontend
└── server/          # Express.js backend
```

## Frontend (React.js)
The frontend is built using Create React App and includes:
- Modern React with Hooks
- Clean and intuitive UI
- Task management functionality (Add, Complete, Delete)

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Backend (Express.js + MongoDB)
The backend provides a RESTful API with:
- Express.js server
- MongoDB database integration
- CRUD operations for tasks

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- GET /api/todos - Get all todos
- POST /api/todos - Create a new todo
- PUT /api/todos/:id - Update a todo
- DELETE /api/todos/:id - Delete a todo 