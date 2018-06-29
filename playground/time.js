var moment = require('moment');

//Jan 1st 1970 00:00:00 = 0 on unix history

var timeCreated = new Date().getTime();
var date = moment(timeCreated);
date.add(10, 'minutes');
console.log(date.format('MMM Do YYYY, h:mm:ss a'));

