const express = require('express');

const app = express();





app.get('/', (req, res) => {
    try {
        console.log('ExamHub API is running.........');
        res.send('<h1>ExamHub API is running.........</h1>');
    }
    catch{

    }
})








app.listen(4000, function() {
    console.log('App running on port 4000.');
    // db.connect(function(err) {
    //     if(err) {
    //         console.log('db connection error', err);
    //     }
    // })

});