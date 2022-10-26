const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const courses = require('./data/Courses.json')
const coursesInfo = require('./data/CourseInfo.json')

app.get('/', (req, res) => {
    res.send('Learning API Running..');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
});
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    if(id === '07'){
        res.send(coursesInfo);
    }
    else{
      const course_category = coursesInfo.filter(c => c.course_id === id)
      res.send(course_category)
    }
})
app.get('/coursesInfo', (req, res) =>{
    res.send(coursesInfo);
});

app.get('/coursesInfo/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = coursesInfo.find(c => c.id === id)
    res.send(selectedCourse);
    console.log(req.params.id)
 })

app.listen(port, () => {
    console.log('Learning Platform running on port', port);
})