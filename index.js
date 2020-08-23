require('dotenv-safe').config();
const findRepo = require('./api/find_repo');
const server = require('./server/server');

server.start(findRepo, (err, app) => {
    console.log('Just started');
});