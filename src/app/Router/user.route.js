const express = require('express');
const { UserController} = require('../controllers');
const { userValid } = require('../validators');

const router = express.Router();

router
    .post('/', userValid, UserController.create)
    .get('/', UserController.readAll);

module.exports = router;