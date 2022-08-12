const express = require('express');
const Route = require('./routes/route');
const {init} = require('./init/init');

const app = express();

new Route(app);
init();

app.listen(3000, () => {
    console.log('Express server is up and running');
})