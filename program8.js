/* global res

 JSON ME
 Exercise 8 of 8
 
*/

var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function() {
    
    fs.readFile(process.argv[3], function (err, content) {
        if (err) {
            
            res.send(500);
        
        } try {
            
            var books = JSON.parse(content.toString());
            res.json(books);
         
        } catch(error) {
            
            res.send(500);
        }
        
    });
    
});

object = JSON.parse(string)



app.listen(process.argv[2]);