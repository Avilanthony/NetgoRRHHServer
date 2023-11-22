const { Server } = require('./src/server/models/server');

require('dotenv').config();

const server = new Server();

server.listen();