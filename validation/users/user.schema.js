const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        first_name: joi.string().max(100).required(),
        last_name: joi.string().max(100).required(),
        gender: joi.string().valid("m", "f", "o").required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        number: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required()
    })
};

module.exports = schema;