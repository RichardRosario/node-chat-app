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

    socket.emit('newEmail', {
        from: 'anna@devjunction.com',
        text: 'Hello there',
        createAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('create Email', newEmail);
    });

    socket.on('disconnect', (socket) => {
        console.log('Server is disconnected');
    });

    socket.emit('newMessage', {
        from: 'me@sample.com',
        text: 'Hey can we meet at 6',
        createAt: 234
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });
})
server.listen(port);
app.use(express.static(publicPath));