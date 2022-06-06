const joi = require('joi');
module.exports = async (req, res, next) => {
  try {
    const taskSchema = joi.object({
      nome: joi.string().required(),
      descricao: joi.string().required(),
      data_inicio: joi.date(),
      data_fim: joi.date(),
      status: joi.string().valid('pendente', 'concluida'),
    });
    const { error } = await taskSchema.validate(req.body, { abortEarl: true });
    if (error) throw new Error(error);
    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};