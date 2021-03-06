const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
    _id: userOneId,
    name: 'Jim',
    email: 'jim@example.com',
    password: '56What!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach( async() => {
    await User.deleteMany();
    await new User(userOne).save();
});

test('Should sign-up new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Mike',
        email: 'mike@example.com',
        password: 'MyPass777!'
    }).expect(201);

    //Assert that the db was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Mike',
            email: 'mike@example.com'
        },
        token: user.tokens[0].token
    });
    expect(user.password).not.toBe('MyPass777!');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);

});

test('Should not login nonexistant user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'this will fail'
    }).expect(400);
});

test('Should get profile for user', async () => {
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401);
});

test('Should deleted account for user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

    //validate that the user was removed
    const user = await User.findById(userOneId);
    expect(user).toBeNull();

});

test('Should not deleted account for unauthenticted user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401);
});