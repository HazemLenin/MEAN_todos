const server = require('./index');
const supertest = require('supertest');
const requestWithSuperTest = supertest(server);
const mongoose = require('mongoose');
require('dotenv').config();


describe('Todos Endpoints', () => {
    let app;
    let todoId;
    it('Connect to the database', async () => {
        await mongoose.connect(process.env.MONGO_URI);
    });

    it('Start server', () => {
        app = server.listen(80);
    });

    it('GET /todos -> list all todos', async () => {
        const res = await requestWithSuperTest
        .get('/todos');
        expect(res.statusCode).toEqual(200);
    });

    it('POST /todos -> create new todo', async () => {
        const res = await requestWithSuperTest
        .post('/todos')
        .send({
            title: "Todo title",
            completed: true
        });
        todoId = res.body._id;

        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toContain("Todo title");
    });

    it('GET /todos/:id -> get todo', async () => {
        const res = await requestWithSuperTest
        .get(`/todos/${todoId}`);

        expect(res.statusCode).toEqual(200);
    });

    it('PUT /todos/:id -> edit todo', async () => {
        const res = await requestWithSuperTest
        .put(`/todos/${todoId}`)
        .send({
            title: "Todo Edited",
            completed: false
        });
        
        expect(res.statusCode).toEqual(200);
    });

    it('DELETE /todos/:id -> delete todo', async () => {
        const res = await requestWithSuperTest
        .delete(`/todos/${todoId}`);
        
        expect(res.statusCode).toEqual(204);
    });

    it('Stop server', () => {
        app.close();
    });

    it('Disconnect from database', async () => {
        await mongoose.disconnect();
    });
});