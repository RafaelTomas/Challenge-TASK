const Task = require('../Models/Task');
const User = require('../Models/User');


module.exports = {
  async create(req, res) {
    try {
      const userId = req.user.id;
      const { nome, descricao, data_inicio, data_fim, status } = req.body;

      const task = await Task.create({ userId, nome, descricao, data_inicio, data_fim, status });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async readAllTask(req, res) {
    const userId = req.user.id;

    try {
      const task = await Task.findAll({ where: { userId } });

      return res.status(200).json(task);

    } catch (error) {
      res.status(500).json({
        message: 'Error fetching tasks',
        error: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      const { nome, descricao, data_inicio, data_fim, status } = req.body;

      const task = await Task.update({
        nome: nome,
        descricao: descricao,
        data_inicio: data_inicio,
        data_fim: data_fim,
        status: status
      },
      {
        where: {
          userId: userId,
          id: id,
        },
      }
      );

      return res.json(task);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const userId = req.user.id;
      const task = await Task.destroy({ where: { userId } });

      return res.status(200).json({ message: 'Deleted task.', task });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

};