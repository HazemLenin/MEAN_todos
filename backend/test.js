const server = require('./server');
const supertest = require('supertest');
const requestWithSuperTest = supertest(server);


describe('Todos Endpoints', () => {
    it('GET /todos should list all todos', async () => {
        const res = await requestWithSuperTest.get('todos');
        expect(res.statusCode).toEqual(200);
    });
});