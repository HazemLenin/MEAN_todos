const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./router/todos');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/todos', todosRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`));
})
.catch(err => {
    console.error(err);
});