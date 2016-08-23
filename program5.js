/* STYLISH CSS: Exercise 5 of 8 */
var express =  require('express');

var app = express();

app.use(require('stylus').middleware(__dirname + '/public'));


app.listen(process.argv[2]);
