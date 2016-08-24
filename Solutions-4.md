Master Express.js and have fun!
─────────────────────────────────

:~/workspace (master) $ expressworks verify program4.js
{ str: '!skcor sj.sserpxE' }

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "Express.js rocks!"                 ==    "Express.js rocks!"                

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to GOOD OLD FORM passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var bodyParser = require('body-parser')
    var app = express()

    app.use(bodyParser.urlencoded({extended: false}))

    app.post('/form', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You've finished all the challenges! Hooray!
