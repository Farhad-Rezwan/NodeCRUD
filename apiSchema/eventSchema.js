const Joi = require('@hapi/joi');

module.exports.createEventSchema = Joi.object().keys({
    title: Joi.string().required(),
    message: Joi.string().required(),
    owner: Joi.string().required()
});


module.exports.updateEventSchema = Joi.object().keys({
    title: Joi.string(),
    message: Joi.string(),
    owner: Joi.string()
});