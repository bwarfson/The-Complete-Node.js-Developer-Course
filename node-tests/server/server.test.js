const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

it('should return hello world', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Hello world!')
    .end(done);
});

it('should return users', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            id: 1,
            name: 'Brad'
        });
    })
    .end(done);
});