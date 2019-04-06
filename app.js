/*
LANDWAR Unit Builder - V0.0.1
author: Peter Roohr
overview
    simple server for the application
*/

var http = require('http');
var fileSystem = require('fs');

http.createServer(function(req, res){
    fileSystem.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

