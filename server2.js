const cluster = require('cluster');

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
} else {
    console.log(`Worker process ${process.pid} is running`);
}