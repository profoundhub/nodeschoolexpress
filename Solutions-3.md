Master Express.js and have fun!
─────────────────────────────────


 Master Express.js and have fun!
─────────────────────────────────
 JADE
 Exercise 3 of 8

Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.

-------------------------------------------------------------------------------

## HINTS

The Jade template file index.jade is already provided:

    h1 Hello World
    p Today is #{date}.

This is how to specify path in a typical Express.js app when the folder is
'templates':

    app.set('views', path.join(__dirname, 'templates'))

However, to use our index.jade, the path to index.jade will be provided as
process.argv[3].  You are welcome to use your own jade file!

To tell Express.js app what template engine to use, apply this line to the
Express.js configuration:

    app.set('view engine', 'jade')

Instead of Hello World's res.end(), the res.render() function accepts
a template name and presenter data:

    res.render('index', {date: new Date().toDateString()})

We use toDateString() to simply return the date in a human-readable format
without the time.

-------------------------------------------------------------------------------

## NOTE

When creating your projects from scratch, install the jade dependency with npm.

Again, the port to use is passed by expressworks to the application as process.argv[2].


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help


... :~/workspace (master) $ expressworks verify program3.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "<h1>Hello World</h1><p>Today is Wed Aug 24 2016.</p>" ==    "<h1>Hello World</h1><p>Today is Wed Aug 24 2016.</p>"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to JADE passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    app.set('view engine', 'jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You've finished all the challenges! Hooray!
