const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Dummy data for tasks
let tasks = [
  { id: 1, name: 'Task 1', status: false },
  { id: 2, name: 'Task 2', status: true },
];

// Get all tasks
app.get('/api/v1/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/api/v1/task', (req, res) => {
  const { name, status } = req.body;
  const newTask = { id: tasks.length + 1, name, status };
  tasks.push(newTask);
  res.json(newTask);
});

// Update a task
app.put('/api/v1/task/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = tasks.find(t => t.id === parseInt(id));
  if (task) {
    task.status = status;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Delete a task
app.delete('/api/v1/task/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== parseInt(id));
  res.status(204).end();
});

// For any other requests, serve the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
