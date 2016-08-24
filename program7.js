/* 
WHAT'S IN QUERY
Exercise 7 of 8 
*/
var express = require('express');
var app = express();

app.get('/search', function (req, res) {
  var query = req.query;
  res.send(query);
});

app.listen(process.argv[2]);