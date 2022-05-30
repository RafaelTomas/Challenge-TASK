const User = require ('../models/User')

module.exports={

    async create(req, res) {
        const { login, senha } = req.body;
        const user = await User.create({ login, senha})
        return res.json(user)
    },

    async readAll(req, res) {
       
        const user = await User.findAll()
       
        return res.json(user)
    },

}