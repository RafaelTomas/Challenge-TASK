const Sequelize = require('sequelize');
const dbConfig = require('../Config/database');

const User = require('../Models/User');
const Task = require('../Models/Task');

const connection = new Sequelize(dbConfig);

User.init(connection);
Task.init(connection);


User.associate(connection.models);
Task.associate(connection.models);

module.exports = connection;