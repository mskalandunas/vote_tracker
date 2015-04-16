'use strict';

//stick express into variable.  anytime using something from another file, use require statement
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/js/'));
app.use(express.static(__dirname + '/img/'));
app.use(express.static(__dirname + '/deps/'));

app.get('/', function(request, response) {
  response.status(200).send('<h1>Hello Stranger!</h1>');
});

app.get('/img', function(request, response) {
  response.send('<h1>Hello ' + request.params.person + '<h1>');
});

app.get('/secret', function(request, response) {
  response.status(200).send('OHH YOU FOUND ME');
})

app.get('/*', function(request, response) {
  response.status(404).sendFile(__dirname + '/404.html');
});

app.listen(5000, function() {
  console.log('server running');
});
