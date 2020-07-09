const socketIO = require('socket.io');
const http = require('http');
const express = require('express');

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

//IO es la comunicación de Backend
module.exports.io = socketIO(server);

require('./sockets/sockets');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});