import { Router } from 'express';
import todoController from '../controllers/todoController';

const router = Router();

/**
 * Todo routes
 * Defines API endpoints for Todo operations
 */

// GET /api/todos - Get all todos
router.get('/', todoController.getAllTodos);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Update a todo
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', todoController.deleteTodo);

export default router; 