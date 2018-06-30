const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Anna',
            room: 'Node'
        },
        {
            id: '2',
            name: 'Mari',
            room: 'React'
        },
        {
            id: '3',
            name: 'Me',
            room: 'Node'
        }];
    });

    it('should add new user', () => {
        users = new Users();
        var user = {
            id: '1234',
            name: 'Rhcard',
            room: 'My fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {

    });
    it('should not remove a user', () => {

    })
    it('should find user', () => {
        
    })
    it('should return names for node course', () => {
        var userList = users.getUserList('Node');
      
        expect(userList).toEqual(['Anna', 'Me']);
    })
    it('should return names for React course', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Mari']);
    })
})