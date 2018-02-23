
//nodemon --exec "npm test"
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(33, 11);
    expect(res)
    .toBe(44)
    .toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    });
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    const res = utils.square(4);
    expect(res)
    .toBe(16)
    .toBeA('number');
});


it('should verify that first and last names are set', () => {

    var user = {
        location: 'Idaho',
        age: 37
    }

    var res = utils.setName(user, 'Brad Wight');
    expect(user).toEqual(res);
    expect(res)
    .toInclude({
        firstName: 'Brad',
        lastName: 'Wight'
    })
    .toBeA('object');
});

// expect assertion lib

it('should expect some values', () => {
    //expect(12).toNotBe(12);
    //expect({name: 'brad'}).toNotEqual({name: 'Brad'});
    expect([2,3,4]).toInclude(4);
    expect([2,3,4]).toExclude(5);
});


