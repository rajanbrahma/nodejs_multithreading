const {getProxyPool} = require("../init/init");
const Utility = require("../utilities/utilities");

class API {
    constructor(){
        this.utilities = new Utility();
    }

    // through middleware - using workerpool
    async encryptPasswordWithWorkerThread(passwordToBeEncrypted){
        this.proxyPool = await getProxyPool();
        return await this.proxyPool.worker(passwordToBeEncrypted);
    }

    // direct - using main thread
    async encryptPasswordWithMainThread(passwordToBeEncrypted){
        return await this.utilities.encryptPassword(passwordToBeEncrypted);
    }
}

module.exports = API;