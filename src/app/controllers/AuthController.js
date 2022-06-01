const User = require('../Models/User');
const generateToken = require('../Utils/generateToken')

module.exports = {
    async login(req, res) {
        const { login, senha } = req.body;    
        const user = await User.findOne({ where: { login: login } })
        if(!user) return res.status(404).json({ error: 'user not found' })
        if (user.validPassword(senha)) {
            return res.send({ login, token: generateToken({id: user.id})})
        } else {
            return res.status(400).json("You aren't authorised");
        }
    },
}
