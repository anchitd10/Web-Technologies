const express = require('express');
const mongoose = require('mongoose');

const app = express();

const uri = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('MongoDB connection established');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
