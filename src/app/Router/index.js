const taskRoutes = require('./task.route');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

module.exports = app => 
    app
      .use('/task', taskRoutes)
      .use('/user', userRoutes)
      .use('/login', authRoutes)
;