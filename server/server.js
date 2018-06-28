const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = require('http').createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Server running in port 3000');

        socket.on('createEmail', (newEmail) => {
        console.log('create Email', newEmail);
    });

    socket.on('disconnect', (socket) => {
        console.log('Server is disconnected');
    });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Amdin', 'New User joined'));

    
    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(
            message.from, message.text));
            callback('This is from the server..');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAd: new Date().getTime()
        // })
    });
})
server.listen(port);
app.use(express.static(publicPath));