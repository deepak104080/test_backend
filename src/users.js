const express = require('express');

const router = express.Router();

const db = require('../db');

//http://localhost:4000/users
router.get('/', (req, res) => {
    try {
        console.log('ExamHub API is running.........');
        res.send('<h1>Users....</h1>');
    }
    catch{

    }
})

//http://localhost:4000/users/allusers
// router.get('/allusers', (req, res) => {
//     try {
//         console.log('ExamHub API is running.........');
//         // res.send('<h1>All Users....</h1>');
//         res.json({
//             name: 'Deepak',
//             city: 'ggn'
//         })
//     }
//     catch{

//     }
// })

router.get('/allusers', async(req, res) => {
    //console.log('---------------Allusers Route---------------')
    try {
        //console.log('---------------Allusers Route Try Start---------------')
        const data = await db.promise().query('SELECT * FROM users');
        //console.log(data[0]);
        //console.log('---------------Allusers Route Try End---------------')
        // res.json(data[0]);
        res.status(200).json(data[0]);
    }
    catch(err){
        //console.log('Error - ', err);
        //res.json(err);
        res.status(400).json(err);
    }
})


module.exports = router;