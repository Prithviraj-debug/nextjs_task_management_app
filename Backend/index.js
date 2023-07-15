import express from 'express';

import getTasks from './routes/getTasks.js';
import postTask from './routes/postTask.js';

const app = express();

app.use('/api/v1/tasks', getTasks)
app.use('/api/v1/tasks', postTask)

app.get('/', async (req, res) => {
    res.send("helooodww..")
});


const startServer = async () => {
    try {
        app.listen(8080, () => console.log('Server has started on port 8080...'))
    } catch (error) {
        console.log(error)
    }
}

startServer();