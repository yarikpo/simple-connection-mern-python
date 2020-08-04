const express = require('express');
const config = require('config');
const routes = require('./routes/rout');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = config.get('port') || 19090;

// Magic!!!
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Magic.end!!!!

app.use('/', routes);

async function start() {
    try {
        // TODO connection database
        app.listen(PORT, (req, res) => {
            console.log(`App is running on port ${PORT}`);
        });
    } catch (e) {
        process.exit(1);
    }
}
start();