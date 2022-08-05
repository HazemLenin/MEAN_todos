const Todo = require('../models/Todo');

// List
async function getTodos (req, res) {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
}

// Create
async function createTodo (req, res) {
    const { title, completed } = req.body;

    try {
        const todo = await Todo.create({title, completed});
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// Read
async function getTodo(req, res) {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
    } else {
        res.status(200).json(todo);
    }
}

// Update
async function updateTodo(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    try {
        const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!todo) {
            res.status(404).json({ error: 'Todo not found' });
        } else {
            res.status(200).json(todo);
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// Delete
async function deleteTodo(req, res) {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);
    
    if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
    } else {
        res.status(204).json({});
    }

}

module.exports = {
    getTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
};