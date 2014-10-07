var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Leslie, Kalie and Steve in da hizzouse');
});



app.listen(3000);