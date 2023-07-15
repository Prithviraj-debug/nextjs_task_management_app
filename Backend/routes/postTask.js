import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const response = 'http://localhost:3001/tasks'; 
        return response;
    } catch(error) {
        console.log(error)
    }
})

export default router;