/**/
Master Express.js and have fun!
─────────────────────────────────
 PARAM PAM PAM
 Exercise 6 of 8

Create an Express.js server that processes PUT '/message/:id' requests.

For instance:

    PUT /message/526aa677a8ceb64569c9d4fb

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:

    require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')

-------------------------------------------------------------------------------

## HINTS

To handle PUT requests use:

    app.put('/path/:NAME', function(req, res){...});

To extract parameters from within the request handlers, use:

    req.params.NAME

 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help
