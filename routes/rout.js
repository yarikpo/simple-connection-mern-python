const express = require('express');
const { v4: uuidv4 } = require('uuid');
const {spawn} = require('child_process');

const router = express.Router();

var tasks = [];

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.post('/api/newTask', (req, res) => {
    // console.log('Data:', req.body);
    // running python code
    // Cool example of sending json here ---> https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
    var receivedData = '';
    const python = spawn('python', [`./python/scripts/script${req.body.select}.py`, `${req.body.input}`]);
    python.stdout.on('data', (data) => {
        console.log(`Receiving data from python script${req.body.select}...`);
        receivedData = data.toString();
        console.log(`Received data: ${receivedData}`);
    });
    python.on('close', (code) => {
        console.log(`child process closed with exit code ${code}.`);

        const task = {
            input: req.body.input, 
            result: receivedData,
            select: req.body.select,
            id: uuidv4()
        }
    
        console.log(task);
        tasks.push(task);
    });

    // stop running python code

    
});

router.get('/api/tasks', (req, res) => {
    res.status(200).json({ tasks });
});

// Example of "How to run python code in node js"
// router.get('/python', (req, res) => {
//     res.set('Content-Type', 'text/plain');
//     // running python code
//     var dataToSend;
//     const python = spawn('python', ['./python/scripts/script1.py', 'param1 GG ', 'param2 WP']);
//     python.stdout.on('data', function (data) {
//         console.log('Receiving data from python script...');
//         dataToSend = data.toString();
//         console.log(`Data to send: ${dataToSend}`);
//     });
//     python.on('close', (code) => {
//         console.log(`child process closed with exit code ${code}`);
//         res.send(dataToSend);
//     });
// });


module.exports = router;