... :~/workspace (master) $ expressworks verify program6.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "eb3748e0ac1a1d3b35cb3929f1901ba23910cbe3" ==    "eb3748e0ac1a1d3b35cb3929f1901ba23910cbe3"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to PARAM PAM PAM passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()

    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You have 2 challenges left.
Type 'expressworks' to show the menu.
