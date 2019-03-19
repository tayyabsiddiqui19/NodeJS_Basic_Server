
// Call the http library
var http = require("http")
// Create the server using the http library
var server = http.createServer(
    (function (request, response) {
        //set the content header
        response.writeHead(200, { "Content-Type": "text/plain" })
        //send the string to the response
        response.end("Hello World\n")
       
    }
    )
)
//make the server listen on port 4000
server.listen(4000);


