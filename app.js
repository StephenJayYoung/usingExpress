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
  // i have no clue how to make this work.
});

// test a post request:
// curl -X POST --data "name=Whit" \
//    http://localhost:3030/api/people/1
var server = app.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});

console.log(server);