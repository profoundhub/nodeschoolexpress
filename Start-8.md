Master Express.js and have fun!
─────────────────────────────────
 JSON ME
 Exercise 8 of 8

Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.

-------------------------------------------------------------------------------

## HINTS

For reading, there's an fs module, e.g.,

    fs.readFile(filename, callback)

While the parsing can be done with JSON.parse:

    object = JSON.parse(string)


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help
