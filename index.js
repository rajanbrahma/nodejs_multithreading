const express = require('express');
const Route = require('./routes/route');
const {init} = require('./init/init');
const { default: helmet } = require('helmet');
const logger = require('./log/logger');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded());

new Route(app);
init();

app.listen(3000, () => {
    logger.log('info','Server started successfully at port 3000.');
})