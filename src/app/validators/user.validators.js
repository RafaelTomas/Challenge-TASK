const joi = require('joi');
module.exports = async (req, res, next) => {
  try {
    const userSchema = joi.object({
      login: joi.string().required(),
      senha: joi.string().min(6).required(),
    });
    const { error } = await userSchema.validate(req.body, { abortEarl: true });
    if (error) throw new Error(error);
    return next();     
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};