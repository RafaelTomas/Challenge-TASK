const User = require ('../Models/User');
const generateToken= require('../utils/generateToken');

module.exports={
  async create(req, res) {
    const { login, senha } = req.body;
    try {
      const { login: username, id } = await User.create({ login, senha});
      return res
        .status(201)
        .json({ id, username, token: generateToken({ id })});
    } catch (error) {
      return res.status(400).json({error: error.message}); 
    }
  },

  async readAll(req, res) {
    try {
      const user = await  User.findAll();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({error: error.message});  
    }
  },
};