var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.get('/Home', function (req, res) {
    res.json({ message: 'hooray! welcome Home!' });
});

var server = app.listen(7001, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

//app.listen(process.env.PORT || 7001);