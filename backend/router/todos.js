const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todosController');

// GET all todos
router.get('/', getTodos);

// POST a new todo
router.post('/', createTodo);

// GET a todo
router.get('/:id', getTodo);

// PUT an edited todo
router.put('/:id', updateTodo);

// DELETE a todo
router.delete('/:id', deleteTodo);

module.exports = router;