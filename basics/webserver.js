// Test scipt using: curl -i http://localhost:8080

// imports get passed into a variable
var http = require("http");

/*
function syntaxs is:

function name_of_function (variables, callback){ stuff};

Notes:
------

Callbacks are the return value (I think)
*/
function process_request(req, res){

  var body = 'Thanks for calling!\n';
  var content_length = body.length;

  //Writes the response to the http request
  // takes two variables: http response code and object (response content)
  res.writeHead(200, {
    "Content-Length" : content_length,
    "Content-Type"   : 'text/plain'
  });

  // method.end seems important.
  res.end(body);
};

// creates the server
var s = http.createServer(process_request);

// States the port it is listening on
s.listen(8080)
