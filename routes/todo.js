const express = require('express');

const todoController = require('../controllers/todo');

const router = express.Router();

// to get all todos
router.get('/todos', todoController.GetTodos);
router.post('/todo', todoController.CreateTodo);
router.put('/todo/:task_id', todoController.UpdateTodo)

module.exports = router;