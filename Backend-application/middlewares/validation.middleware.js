const { celebrate, Joi, errors } = require('celebrate');

exports.validateSignup = celebrate({
  body: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    roleId: Joi.number().required()
  })
});

exports.validateProject = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().required(),
  })
});
