const API = require('../APIs/api');
const {validate} = require('../validators/validation');

class Route{
    constructor(app){
        this.route(app);
        this.api = new API();
    }

    async route(app){
        app.get('/api/encryptPasswordWorker', await validate, async (req, res, next) => {
            const encryptedPassword = await this.api.encryptPasswordWithWorkerThread(req.query.password);
            res.status(200).send(encryptedPassword);
        });
        
        app.get('/api/encryptPasswordMain', await validate, async (req, res, next) => {
            const encryptedPassword = await this.api.encryptPasswordWithMainThread(req.query.password);
            res.status(200).send(encryptedPassword);
        });
    }
}

module.exports = Route;