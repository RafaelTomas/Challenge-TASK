const express = require('express');
const User = require('../controllers/UserController');
const Task = require('../controllers/TaskController');
const userSchema = require('../validators/User');
const userValid = validation(userSchema)

const routes = express.Router();

routes.post('/user',userValid,User.create);
routes.get('/user', User.readAll);

routes.post('/user/:userId/task', Task.create);
routes.get('/user/:userId/task', Task.readAllTask);
routes.delete('/user/:userId/task/:id', Task.delete);
routes.put('/user/:userId/task/:id', Task.update);



module.exports = routes;