const express = require('express');
const { TaskController } = require('../controllers');
const { taskValid } = require('../validators');
const { authenticate } = require('../middlewares');

const router = express.Router();

router
  .get('/', authenticate, TaskController.readAllTask)
  .post('/', authenticate, taskValid, TaskController.create)
  .put('/:id', authenticate, taskValid, TaskController.update)
  .delete('/:id', authenticate, TaskController.delete);

module.exports = router;