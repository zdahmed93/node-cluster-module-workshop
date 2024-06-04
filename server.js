const express = require('express');

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

// with pm2 installed globally, we can run the current file in cluster mode
// TODO: sudo npm i -g pm2

// TODO: pm2 start server.js -i 2
// -i 2 means that we want to run 2 instances of the current file
// and pm2 will create 2 workers for us

// to stop all instances:
// TODO: pm2 stop all

// to delete all instances:
// TODO: pm2 delete all

// TODO: LET PM2 DETERMINE THE NUMBER OF CORES IN THE SYSTEM AND CREATE AS MANY INSTANCES AS THE NUMBER OF CORES
// TODO: pm2 start server.js -i 0
// with 0, pm2 will determine the number of cores in the system and create as many workers as the number of cores

// to stop specific pm2 instance:
// TODO: pm2 stop 1 => stops instance of id 1