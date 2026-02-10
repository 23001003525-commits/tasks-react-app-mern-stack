import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

/**
 * @desc    Create a new task
 * @route   POST /api/tasks
 * @access  Private
 */
const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400);
    throw new Error('Task title is required');
  }

  const task = await Task.create({
    user: req.user._id,
    title,
  });

  res.status(201).json(task);
});

/**
 * @desc    Get all tasks for logged-in user
 * @route   GET /api/tasks
 * @access  Private
 */
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.json(tasks);
});

/**
 * @desc    Update a task
 * @route   PUT /api/tasks/:id
 * @access  Private
 */
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Ensure task belongs to logged-in user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to update this task');
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  const updatedTask = await task.save();

  res.json(updatedTask);
});

/**
 * @desc    Delete a task
 * @route   DELETE /api/tasks/:id
 * @access  Private
 */
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Ensure task belongs to logged-in user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this task');
  }

  await task.deleteOne();

  res.json({ message: 'Task removed' });
});

export { createTask, getTasks, updateTask, deleteTask };

