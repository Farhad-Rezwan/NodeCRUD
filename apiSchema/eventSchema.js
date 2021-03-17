const Joi = require('@hapi/joi');

var ownerSchema = Joi.object().keys({
    name: Joi.string().required(),
});

module.exports.createEventSchema = Joi.object().keys({
    title: Joi.string().required(),
    message: Joi.string().required(),
    owner: ownerSchema.required()
});


module.exports.updateEventSchema = Joi.object().keys({
    title: Joi.string(),
    message: Joi.string(),
    owner: ownerSchema
});

module.exports.getrAllEventSchema = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
});