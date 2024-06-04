const cluster = require('cluster');
const express = require('express');
const os = require('os');

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    // We should create as many workers as the number of cores
    // os.cpus().length give us the number of cores our CPU have
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    console.log(`=> Number of CORES: ${os.cpus().length}`); // 8 cores => octa-core
} else {
    console.log(`Worker process ${process.pid} is running`);

    // Bring all server.js code here
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.get('/compute', (req, res) => {
        for (let i = 0; i <= 4_000_000_000; i++) {
            // Simulate CPU Work: a computation that takes a long time 
        }
        res.send('Ok');
    })

    const PORT = 7000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}