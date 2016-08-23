var path = require('path');
var express = require('express');
var app = express();

/* 

/message/:id

PUT /message/526aa677a8ceb64569c9d4fb

*/

    app.put('/message/:id', function(req, res){

      var id = req.params.id;
      var str = require('crypto')
                .createHash('sha1')
                .update(new Date()
                    .toDateString()
                    .toString() + id)
                        .digest('hex');
      res.send(str);
      
    });

app.listen(process.argv[2]);