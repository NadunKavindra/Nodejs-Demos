var http = require('http')

var server = http.createServer(function (request, responce) {
    console.log('got a request');
    responce.write('Hi');
    responce.end();
});

server.listen(4004);