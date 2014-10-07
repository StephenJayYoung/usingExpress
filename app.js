var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');




app.get('/api/people', function(req, res) {
  
	var people = [{ firstName: 'Whitney', lastName: "Young", address: "Portland" }];
	res.json({ people: people });
});
app.post('/api/people', function(req, res) {
  // create a new person
});

// test a post request:
// curl -X POST --data "name=Whit" \
//    http://localhost:3030/api/people/1
var server = app.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});

// app.get('/', function(req, res){
//   res.send('Leslie, Kali, and Steve in da hizzouse');
// });

// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send('Leslie, Kali, and Steve in da hizzouse');
// });

// app.get('/api/people', function(req, res){
// 	// don't use send here
//   res.send('{ people: [] }');
// });
// app.get('/api/people', function(req, res){
//   // create new person
// });

// whitney made this comment. it's silly and should be removed.
// app.listen(3000);