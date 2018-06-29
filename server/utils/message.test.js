var expect = require('expect');

var { generateMessage } = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
      var from = 'me';
      var text = 'Some message from me';
      var message = generateMessage(from, text);

      expect(typeof message.createdAt).toBe('number');
      expect(message).toMatchObject({from, text});
    })

})

var {generateLocationMessage} = require('./message');
describe('generateLocationMessage',()=>{
  it('should generate correct location object', () => {
    var lat = 14.8474398;
    var lng =  120.290424;
    var from = 'Olongapo';
    var url = `https://www.google.com/maps?q=${lat},${lng}`
    var location = generateLocationMessage(from,lat,lng);
    expect(location).toMatchObject({from,url});
    expect(typeof location.createdAt).toBe('number');
  });
});

