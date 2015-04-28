var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/deps/'));

app.get('/secret', function(request, response) {
  response.status(200).send('OHH YOU FOUND ME');
})

app.get('/*', function(request, response) {
  response.status(404).sendFile(__dirname + '/404.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
