const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

let server = null;

function start(api, callback) {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(helmet());
    app.use((err, req, res, next) => {
        callback(new Error('Something went wrong!, err: ' + err), null);
        res.status(500).send('Something went wrong!');
    })

    api(app);

    server = app.listen(parseInt(process.env.NP_PORT), () => {
        callback(null, server);
    })
}

function stop() {
    if (server) {
        server.close();
    }
    return true;
}

module.exports = {
    start,
    stop
}