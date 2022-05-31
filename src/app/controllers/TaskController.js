const Task = require('../models/Task')
const User = require('../models/User')

module.exports = {

    async create(req, res) {
        const { userId } = req.params;
        const { nome, descricao, data_inicio, data_fim, status } = req.body;

        const user = await User.findByPk(userId);
        if(!user) return res.status(404).json({ error: 'user not found'})
        
        const task = await Task.create({  nome, descricao, data_inicio, data_fim, status});
        return res.json(task);
    },

    async readAllTask(req, res){
      const {userId} = req.params;
      const user = await User.findByPk(userId);
      
      if(!user) return res.status(404).json({ error: 'user not found'})

      const task = await Task.findAll({ where:{userId}});

      return res.json(task);
    },
    
    async update(req, res ){
      const { userId, id} = req.params;
      const { nome, descricao, data_inicio, data_fim, status } = req.body;
      const user = await User.findByPk(userId);

      if(!user) return res.status(404).json({ error: 'user not found'})

      const task = await Task.update( {
        nome: nome,
        descricao: descricao,
        data_inicio: data_inicio,
        data_fim: data_fim,
        status: status
      },
      {
        where: {
          id: id,
        },
      }
    );

      return res.json(task);
    },
    
    async delete(req,res){
      const { userId } = req.params;
      const user = await User.findByPk(userId);

      if(!user) return res.status(404).json({ error: 'user not found'})

      const task = await Task.destroy({ where: {userId}})

      return res.status(200).json({succes: 'deleted task'});
    }

}