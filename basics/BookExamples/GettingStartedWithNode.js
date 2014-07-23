/*
                    Getting Started with Node
                    -------------------------

  Although Node might seem intimidating at first, getting started is actually
pretty easy. No intro to Node would be completed without the ubiquitous "Hello
World" example.
*/

/*
Creating the Server:
--------------------

  The first step is to open up a text editor and include the http module, which
you use to create the HTTP server.
*/

// load http module
//var http = require('http');

/*
  Here you use the require() method to include the module. The http module is
one of the core Node modules. ( Later this chapter you learn more about
modules and how to include external modules in your app.) Next, use the http
module to create the server.
*/

// create http server
//var server = http.createServer( function(request, response){});

/*
  Here the createServer() method accepts a callback, which passes objects for
the request and response.
*/

/*
Adding the Content: (I put all the code here)
-------------------

  Next, use response to create your page content:
*/

// load http module
var http = require('http');

var server = http.createServer(function(request, response){
  // header
  response.writeHead(200, {
    "Content-type": 'text/plain'
  });

  // write content
  response.write("Hello World");

  // send the response
  response.end();
});

// Listen on port 8000
server.listen(8000);

// Log it to the console
console.log('Server running on port 8000');


/*
  There are a few things going on in this code block:

    1. The writeHead() method defines the HTTP headers for the page. In this
case, it uses a response code 200 (for OK) and passes the plain-text 
content-type.

    - Other repsonse codes might be 404 (file not found), and other headers
      might be 'cache-control': 'max-age=3600, must-revalidate' (to cache the
      the page for an hour).

    2. The write() method writes the actual 'Hello World' message to the page.

    3. The end() method closes the response and sends the header and content
       to the client.
*/

/*
Wrapping Things Up:
-------------------

  Now the Hello World script is creating the server and all the content for
the page, but you're not done yet. You still need to create a path to access
the script, which you can do using the listen() method:
*/

