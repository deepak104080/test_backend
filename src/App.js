const express = require('express');

const app = express();

const cors = require('cors');

const db = require('../db.js');

const usersRoute = require('./users.js');

app.use(express.json());
app.use(cors());

//sample api
//http://localhost:4000/
app.get('/', (req, res) => {
    try {
        console.log('ExamHub API is running.........');
        res.send('<h1>ExamHub API is running.........</h1>');
    }
    catch{

    }
})


//middleware for route
app.use('/users', usersRoute)





//code to run server
app.listen(4000, function() {
    console.log('App running on port 4000.');
    db.connect(function(err) {
        if(err) {
            console.log('db connection error', err);
        }
    })

});







// ./ - same folder
// ../ - one folder back
// / - same folder
// /name - name folder


// routes
//middleware