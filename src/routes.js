const express = require('express');
const User = require('./app/controllers/UserController');
const Task = require('./app/controllers/TaskController');

const routes = express.Router();

routes.post('/user', User.create);
routes.get('/user', User.readAll);

routes.post('/user/:userId/task', Task.create);
routes.get('/user/:userId/task', Task.readAllTask);
routes.delete('/user/:userId/task/:id', Task.delete);
routes.put('/user/:userId/task/:id', Task.update);



module.exports = routes;