import { Router } from 'express';
import Task from '../models/task';

const router = Router();

// GET all tasks
router.get('/api/v1/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET a task by ID
router.get('/api/v1/task/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  res.json(task);
});

// POST a new task
router.post('/api/v1/task', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// PUT to update a task by ID
router.put('/api/v1/task/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// DELETE a task by ID
router.delete('/api/v1/task/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

export default router;
