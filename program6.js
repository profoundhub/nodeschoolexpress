/* 

/message/:id

PUT /message/526aa677a8ceb64569c9d4fb

*/

    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
      
    app.put('/path/:NAME', function(req, res){...});

    req.params.NAME
