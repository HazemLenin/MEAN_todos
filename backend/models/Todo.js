const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;