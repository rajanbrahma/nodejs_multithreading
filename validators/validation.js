const Joi = require("joi");
const { PASSWORD_REGEX } = require("../constants/constants");
const logger = require("../utilities/logger");

const encryptPasswordSchema = Joi.object({
    passwordToBeEncrypted: Joi.string().min(8).max(10).pattern(new RegExp(PASSWORD_REGEX)).required()
})

async function validate(req, res, next){
    encryptPasswordSchema.validateAsync({passwordToBeEncrypted: req.query.password}).then(validationResult => next()).catch((ex) => {
        const errorMsg = ex.details.map(i => i.message);
        logger.log('error',`400 Bad request. ERROR : ${errorMsg}`);
        res.status(400).send(errorMsg);
    });
}

module.exports = {
    validate
}