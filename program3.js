/*global res*/ 
    var path = require('path')
    var express = require('express')
    var app = express()
    var path = "/"
    
    app.set('views', path.join(__dirname, 'templates'));
    
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()});
    })
    
    
    
    app.listen(process.argv[2]);