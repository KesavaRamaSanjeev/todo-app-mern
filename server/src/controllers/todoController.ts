import { Request, Response } from 'express';
import Todo from '../models/Todo';

/**
 * Controller class handling Todo operations
 * Contains methods for CRUD operations on Todo items
 */
class TodoController {
  /**
   * Get all todos
   * @param {Request} _req - Express request object
   * @param {Response} res - Express response object
   */
  public async getAllTodos(_req: Request, res: Response): Promise<void> {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching todos' });
    }
  }

  /**
   * Create a new todo
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   */
  public async createTodo(req: Request, res: Response): Promise<void> {
    try {
      const { text } = req.body;
      const todo = await Todo.create({ text });
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ error: 'Error creating todo' });
    }
  }

  /**
   * Update a todo
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   */
  public async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
      );
      
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json({ error: 'Error updating todo' });
    }
  }

  /**
   * Delete a todo
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   */
  public async deleteTodo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndDelete(id);
      
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Error deleting todo' });
    }
  }
}

export default new TodoController(); 