var express = require('express');

var app = express();

var contacts = [{
  firstName: 'Marnix',
  LastName: 'Harderwijk'
},
{
  firstName: 'John',
  lastName: 'Doe'
}];

app.get('/contacts', function(req, res) {
  res.status(200).json(contacts);
});

app.listen(9001);