import express from 'express';
import getTasks from './routes/getTasks.js';
import postTask from './routes/postTask.js';
import fetch from 'node-fetch';

const app = express();

app.use('/api/v1/tasks', getTasks)
app.use('/api/v1/tasks', postTask)

app.get('/', async (req, res) => {
    try {
        const response = await fetch(`http://localhost:3001/tasks`);
        const tasks = await response.json();
        res.send(tasks)
        return tasks; 
    } catch (error) {
        console.log(error)
    }
});


const startServer = async () => {
    try {
        app.listen(8080, () => console.log('Server has started on port 8080...'))
    } catch (error) {
        console.log(error)
    }
}

startServer();