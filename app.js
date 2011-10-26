var express = require('express');
var app     = express.createServer();
var port    = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.send('Hello Engine Yard Cloud!');
});

app.listen(port);
