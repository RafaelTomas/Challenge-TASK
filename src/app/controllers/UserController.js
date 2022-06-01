const User = require ('../Models/User')
const generateToken= require('../Utils/generateToken')

module.exports={
    async create(req, res) {
        const { login, senha } = req.body;
        const user = await User.create({ login, senha})
        return res.status(201).json({ user, token: generateToken({id: user.id})});
    },

    async readAll(req, res) {
        const user = await  User.findAll()
        return res.json(user)
    },

}