const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = require('http').createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Server running in port 3000');

    socket.on('disconnect', (socket) => {
        console.log('Server is disconnected');
    });
})
server.listen(port);
app.use(express.static(publicPath));