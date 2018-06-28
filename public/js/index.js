var socket = io();
socket.on('connect', function() {
    console.log('connected to server');

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