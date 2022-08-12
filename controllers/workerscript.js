const workerpool = require('workerpool');
const Utility = require('../utilities/utilities');

function middlewareForWorkerThreadPasswordEncryption(passwordToBeEncrypted){
    return new Utility().encryptPassword(passwordToBeEncrypted);
}

workerpool.worker({
    worker: middlewareForWorkerThreadPasswordEncryption
});