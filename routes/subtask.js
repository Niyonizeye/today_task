const express = require('express');

const subtaskController = require('../controllers/Subtask');

const router = express.Router();

// the routes for getting subtask
router.post('/subtask', subtaskController.Createsubtask);
router.put('/subtask', subtaskController.editSubtask)

module.exports = router;