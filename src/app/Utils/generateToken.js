const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function generateToken(params = {}){
  return jwt.sign(params, process.env.JWT_SECRET,{expiresIn: 86400});
};