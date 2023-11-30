const Joi = require('joi');

const createTenniSchema = Joi.object({
    color: Joi.string().min(3).max(50).required().regex(/^#(?:[0-9a-fA-F]{6})$/), 
    talla: Joi.string().min(1).max(20).required().valid('35', '36', '37', '38', '39', '40'), 
    tipo: Joi.string().valid('TipoA', 'TipoB', 'TipoC').required(),
    marca: Joi.string().min(3).max(50).required().regex(/^[A-Za-z0-9\s]+$/), 
    precio: Joi.number().min(0).required().positive(),
    disponible: Joi.boolean().required(),
    stock: Joi.number().min(0).required().integer(),
    fechaLanzamiento: Joi.date().required().max('now').iso(), 
}).options({ abortEarly: false });

const updateTenniSchema = Joi.object({
    color: Joi.string().min(3).max(50).regex(/^#(?:[0-9a-fA-F]{6})$/),
    talla: Joi.string().min(1).max(20).valid('35', '36', '37', '38', '39', '40'),
    tipo: Joi.string().valid('TipoA', 'TipoB', 'TipoC'),
    marca: Joi.string().min(3).max(50).regex(/^[A-Za-z0-9\s]+$/),
    precio: Joi.number().min(0).positive(),
    disponible: Joi.boolean(),
    stock: Joi.number().min(0).integer(),
    fechaLanzamiento: Joi.date().iso(),
}).options({ abortEarly: false });

const getTenniSchema = Joi.object({
    id: Joi.number().required().positive().integer(), 
});

module.exports = {
    createTenniSchema,
    updateTenniSchema,
    getTenniSchema
};
