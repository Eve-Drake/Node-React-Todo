const express =  require('express')
const app =  express()
const cors = require('cors')

app.use(cors());
app.use(express.json())

var tasks =  []

app.get('/api', (req, res) =>{
    res.status(200).json(tasks)
})

app.post('/api', (req, res) =>{
    const data = req.body;
    tasks = [...tasks, req.body]
    res.status(201).json({ message: 'Resource created successfully', data: tasks})
})

app.delete('/api', (req, res) => {
    const { id } = req.body;
    tasks = tasks.filter((task) => task.id !== id);
    res.status(204).send();
});
  
app.patch('./api', (req, res) =>{
    const {id} = req.body;
    var updatedTask = tasks.find(task => task.id === id)
    updatedTask.completed = 
})

app.listen(5000, (console.log('live')))

module.exports = app;