const Joi = require("joi");
const { PASSWORD_REGEX } = require("../constants/constants");

const encryptPasswordSchema = Joi.object({
    passwordToBeEncrypted: Joi.string().min(8).max(10).pattern(new RegExp(PASSWORD_REGEX)).required()
})

async function validate(req, res, next){
    encryptPasswordSchema.validateAsync({passwordToBeEncrypted: req.query.password}).then(validationResult => next()).catch((ex) => {
        res.status(400).send(ex.details.map(i => i.message));
    });
}

module.exports = {
    validate
}