const express = require('express');

const { User, Task } = require('../controllers');
const { userValid, taskValid } = require('../validators');
const routes = express.Router();

routes.post('/user', userValid, User.create);
routes.get('/user', User.readAll);

routes.post('/user/:userId/task',taskValid, Task.create);
routes.get('/user/:userId/task', Task.readAllTask);
routes.delete('/user/:userId/task/:id', Task.delete);
routes.put('/user/:userId/task/:id',taskValid, Task.update);



module.exports = routes;