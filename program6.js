var path = require('path');
var express = require('express');
var app = express();

/* 

/message/:id

PUT /message/526aa677a8ceb64569c9d4fb

*/

    app.put('/message/:id', function(req, res){...});
    
    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
      
//    app.put('/path/:NAME', function(req, res){...});

    req.params.NAME

app.listen(process.argv[2]);