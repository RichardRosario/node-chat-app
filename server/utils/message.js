var moment = require('moment');

var timeCreated = new Date().getTime(); 
var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment(timeCreated).valueOf()
    }
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment(timeCreated).valueOf()
    };
};

module.exports = {generateMessage, generateLocationMessage};