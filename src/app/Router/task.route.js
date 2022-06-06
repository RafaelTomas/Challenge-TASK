const express = require('express');
const { TaskController } = require('../controllers');
const { taskValid } = require('../validators');
const authMiddleware = require('../middlewares')

const router = express.Router();

router
    .get('/', authMiddleware, TaskController.readAllTask)
    .post('/', authMiddleware, taskValid, TaskController.create)
    .put('/:id', authMiddleware, taskValid, TaskController.update)
    .delete('/:id', authMiddleware, TaskController.delete);

module.exports = router;