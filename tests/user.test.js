const request = require('supertest');
const app = require('../src/app');

test("Should sign-up new user", async () => {
    await request(app).post('/users').send({
        name: 'Mike',
        email: 'mike@example.com',
        password: 'MyPass777!'
    });
});