// var express = require('express');

// var app = express();

// //define routes here..

// var server = app.listen(5000, function() {
//     console.log('Node sever is running..');
// });

var express = require('express');
var app = express();


app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '.' });
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');
});

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

var server = app.listen(3000, function() {
    console.log('Node server is running..');
});