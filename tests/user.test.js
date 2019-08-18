const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
    name: 'Jim',
    email: 'jim@example.com',
    password: '56What!'
}

beforeEach( async() => {
    await User.deleteMany();
    await new User(userOne).save();
});

test('Should sign-up new user', async () => {
    await request(app).post('/users').send({
        name: 'Mike',
        email: 'mike@example.com',
        password: 'MyPass777!'
    }).expect(201);
});

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);
})

test('Should not login nonexistant user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'this will fail'
    }).expect(200);
})