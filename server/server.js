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

        socket.on('createEmail', (newEmail) => {
        console.log('create Email', newEmail);
    });

    socket.on('disconnect', (socket) => {
        console.log('Server is disconnected');
    });

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app'
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined'
    });

    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAd: new Date().getTime()
        // })
    });
})
server.listen(port);
app.use(express.static(publicPath));