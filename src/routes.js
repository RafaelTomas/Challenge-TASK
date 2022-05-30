const express = require('express');
const User = require('./app/controllers/UserController');

const routes = express.Router();

routes.post('/user', User.create);
routes.get('/user', User.readAll);



module.exports = routes;