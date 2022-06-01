const joi = require('joi');
module.exports = async (req, res, next) => {
    try {
        const taskSchema = joi.object({
            nome: joi.string().required(),
            descricao: joi.string().min(6).required(),
	        data_inicio: joi.date().format('DD/MM/YYYY'),
	        data_fim: joi.date().format('DD/MM/YYYY'),
	        status:joi.string().valid('pendednte', 'concluida'),
        });
        const { error } = await taskSchema.validate(req.body, { abortEarl: true });
    if (error) throw new Error(error);
    return next();     
    } catch (error) {
      next(error);
    }
}