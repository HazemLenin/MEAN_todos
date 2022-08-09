const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const todosRoutes = require('./router/todos');
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: [
        'http://localhost:4200'
    ]
};

app.use(cors(corsOptions))

app.use(express.json());

app.use(morgan('tiny'));

app.use('/todos', todosRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

if (!process.env.NODE_ENV === 'test' || process.env.NODE_ENV === undefined) {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
            app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`));
        })
    .catch(err => {
        console.error(err);
    });
}

module.exports = app;