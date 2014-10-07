var _ = require('lodash');
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// it parses the stuff that was sent in the request and puts it in the body
app.use(bodyParser.json());
// urlencoded is the style with key=value&
app.use(bodyParser.urlencoded({ extended: true }));

var id = 1;
var people = {};

app.get('/api/people', function(req, res) {
  res.json({ people: _.values(people) });
});
app.post('/api/people', function(req, res) {
  var person = {
  	//the id variable lets us assign a unique id to each person, ++ increments id by 1 (post increment vs preincrement)
    id: id++,  //id = id +1
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address
  };
  people[person.id] = person;
  res.json({ person: person });
});

app.put('/api/people/:id', function(req, res) {
  var person = people[req.params.id];
  if (person) {
    person.id = req.params.id;
    person.firstName = req.body.firstName;
    person.lastName = req.body.lastName;
    person.address = req.body.address;
    people[person.id] = person;
  };
  res.json({ person: person });
});

app.delete('/api/people/:id', function(req, res) {
  var person = people[req.params.id];
  if (person) {
    delete people[person.id];
  }
  res.json({ person: person });
});

// curl -X GET http://localhost:8000/api/people
// curl -X POST --data "firstName=Whitney&lastName=Young&address=Chicago" http://localhost:8000/api/people
// curl -X GET http://localhost:8000/api/people
// curl -X PUT --data "firstName=Whitney&lastName=Young&address=Portland" http://localhost:8000/api/people/1
// curl -X GET http://localhost:8000/api/people
// curl -X DELETE http://localhost:8000/api/people/1
// curl -X GET http://localhost:8000/api/people
// curl -X PUT --data "firstName=Whitney&lastName=Young&address=Nowhere" http://localhost:8000/api/people/1
// curl -X DELETE http://localhost:8000/api/people/1

var server = app.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});




























////////////////////////////////////////////////////////////////////////////////
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');


var people = [{ firstName: 'Kali', lastName: "Oxford", address: "321 here" }];


app.get('/api/people', function(req, res) {
<<<<<<< HEAD
=======
  
	var people = [{ firstName: 'Whitney', lastName: "Young", address: "Portland" }];
>>>>>>> 698e98eb6d1b1d102e945a7a88a9542caced1cd8
	res.json({ people: people });

});


app.post('/api/people', function(req, res) {
	var people = [{ firstName: 'Whit', lastName: "Oxford", address: "321 here" }];
		res.json({ people: people });
  // create a new person
});

// test a post request:
// curl -X POST --data "name=Whit" \
//    http://localhost:3030/api/people/1

app.delete('/api/people/1', function(req, res) {
 // next(new Error('not implemented'));
 res.send('deleted');
});

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