const Task = require('../models/Task')
const User = require('../models/User')
module.exports = {

    async create(req, res) {
        const { userId } = req.params;
        const { nome, descricao, data_inicio, data_fim } = req.body;

        const user = await User.findByPk(userId);
        if(!user){
          return res.status(404).json({ error: 'user not found'})
        }
        const task = await Task.create({  nome, descricao, data_inicio, data_fim});
        return res.json(task);
    },

    async readAllUser(req, res){
      const {userId} = req.params;
      const user = await User.findByPk(userId);
      if(!user){
        return res.status(404).json({ error: 'user not found'})
      }
      const task = await Task.findAll({ where:{userId}});

      return res.json(task);
    }

}