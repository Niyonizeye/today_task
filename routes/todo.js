const express = require('express');

const todoController = require('../controllers/todo');

const router = express.Router();

// to get all todos
router.get('/todos', todoController.GetTodos);
router.get('/todo', todoController.GetSingleTodo);
router.post('/todo', todoController.CreateTodo);
router.put('/todo/:taskId', todoController.EditStatusTodo);
router.get('/todo/de', todoController.DeleteTodo)

module.exports = router;