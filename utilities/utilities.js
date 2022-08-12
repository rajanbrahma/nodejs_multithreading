const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants/constants');

class Utility {
    constructor(){}

    async encryptPassword(passwordToBeEncrypted){
        return await bcrypt.hash(passwordToBeEncrypted, SALT_ROUNDS);
    }
}

module.exports = Utility;