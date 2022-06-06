const User = require ('../Models/User')
const generateToken= require('../Utils/generateToken')

module.exports={
    async create(req, res) {
        const { login, senha } = req.body;
        try {
            const user = await User.create({ login, senha})
            return res.status(201).json({ user, token: generateToken({id: user.id})});
        } catch (error) {
            return res.status(400).json({error: error.message}) 
        }
    
    },

    async readAll(req, res) {
        try {
        const user = await  User.findAll()
        return res.json(user)
        } catch (error) {
          return res.status(400).json({error: error.message})  
        }
    },

}