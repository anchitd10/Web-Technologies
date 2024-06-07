const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const uri = 'mongodb://localhost:27017/schoolDB';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
});

const Student = mongoose.model('Student', studentSchema);

app.use(express.static('public'));

app.post('/students', (req, res) => {
    const newStudent = new Student(req.body);
    newStudent.save((err, savedStudent) => {
        if (err) {
            res.status(500).send('Error saving student');
        } else {
            res.status(201).json(savedStudent);
        }
    });
});

app.get('/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) {
            res.status(500).send('Error fetching students');
        } else {
            res.json(students);
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
