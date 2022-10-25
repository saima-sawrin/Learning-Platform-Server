const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/Courses.json')
app.use(cors());
const coursesInfo = require('./data/CourseInfo.json')

app.get('/', (req, res) => {
    res.send('Learning API Running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
});
app.get('/coursesInfo', (req, res) =>{
    res.send(coursesInfo);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c => c._id === id);
    res.send(selectedCourses);
});
app.get('/coursesInfo/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c => c._id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('Learning Platform running on port', port);
})