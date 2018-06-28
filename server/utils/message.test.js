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