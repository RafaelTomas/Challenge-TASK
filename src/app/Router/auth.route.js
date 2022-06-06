
const express = require('express');
const { AuthController } = require('../controllers');
const { authValid } = require('../validators');

const router = express.Router();

router 
  .post('/', authValid, AuthController.login);

module.exports = router;