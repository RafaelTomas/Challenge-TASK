const User = require('../Models/User');
const generateToken = require('../Utils/generateToken');


module.exports = {
  async login(req, res) {
    const { login, senha } = req.body;
    try {
      const user = await User.findOne({ where: { login: login } });
      if (!user) return res.status(401).json({ error: 'User not found' });

      if (user.validPassword(senha)) {
        return res.send({ login, token: generateToken({ id: user.id }) });
      } else {
        return res.status(401).json({ error: 'Invalid password' });
      }

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
