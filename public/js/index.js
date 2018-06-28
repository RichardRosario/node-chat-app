var socket = io();
socket.on('connect', function() {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'admin@test.com',
    //     text: 'Hello world, this is new email.'
    // });

    socket.emit('createMessage', {
        from: 'admin@test.com',
        text: 'New message for you.'
    })
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New Email', email);
});
socket.on('newMessage', function(text) {
    console.log('New Message', text);
})