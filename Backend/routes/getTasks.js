import express from 'express';
import fetch from "node-fetch";

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const response = await fetch(`http://localhost:3001/tasks`);
        const tasks = await response.json();
        res.send(tasks)
        return tasks; 
    } catch (error) {
        console.log(error)
    }
})

export default router;