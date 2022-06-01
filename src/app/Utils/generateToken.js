const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function generateToken(params = {}){
    return jwt.sign(params, process.env.SECRET,{expiresIn: 86400})
}