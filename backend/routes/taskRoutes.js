import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// /api/tasks
router
  .route('/')
  .post(protect, createTask)
  .get(protect, getTasks);

// /api/tasks/:id
router
  .route('/:id')
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;

