const workerpool = require('workerpool');
const Path = require('path');

let proxyPool = null;

function init (){
    const pool = workerpool.pool(Path.join(__dirname, '../controllers/workerscript.js'));
    proxyPool = pool.proxy();
}

function getProxyPool (){
    return proxyPool;
}

module.exports = {init, getProxyPool};