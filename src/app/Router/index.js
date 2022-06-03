const { Router } = require('express');
const express = require('express');
const authMiddleware = require('../middlewares')


const { User, Task, Auth } = require('../controllers');
const { userValid, taskValid, authValid } = require('../validators');

const routes = express.Router();

routes.post('/user', userValid, User.create);
routes.get('/user', User.readAll);
routes.post('/user/login', authValid,Auth.login)

routes.post('/user/:userId/task', authMiddleware, taskValid, Task.create);
routes.get('/user/:userId/task', authMiddleware, Task.readAllTask);
routes.delete('/user/:userId/task/:id', authMiddleware, Task.delete);
routes.put('/user/:userId/task/:id', authMiddleware, taskValid, Task.update);



module.exports = routes;