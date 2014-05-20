/*
  I skipped their examples of "the old way of doing things" AKA synchronous
programming.

  The following is an example of an asynchronous program.

Note:
-----

  asynchronous functions work by using callbacks. that is the last parameter
passed to the function will be a callback function.
*/

var fs = require('fs');

var file;
fs.open(
  'info.text', 'r',
  function (handle) {
    file = handle
  }
);

fs.read(
  file, buffer, 0, 100000, null,
  function(){
    console.log('buf.toString()');
    file.close(file, function(){/* I don't care*/});
  }
)

/*

Notes:
-----

  The 'require' function is a way to include additional functionality in your
Node.js programs. Node comes with a pretty impressive set of modules, each
of which you can include seperately as you need functionality.

  If you run the above program, it throws an error and terminates. How come?
Because the fs.open function runs asynchronously; it returns immediately, before
the file has been opened, and you have the handle value returned to you. The
file variable is not set until the file has been opened and the handle to it
has been received in the callback specified as the third parameter to the fs.open
function. Thus it is still undefined when you try to call the fs.read function
with it immediately afterwards.

Fixing this problem is easy:
*/

var fs = required('fs');

fs.open(

  'info.txt', 'r',
  function(err, handle) { // we'll see more about the err param later

    var buf = new Buffer(1000000);
    fs.read(

      handle, buf, 0, 100000, null,
      function(err, length) {

        console.log(buf.toString('utf8', 0, length));
        fs.close(handle, function(){/*don't care*/});
      }
    );
  }
);

/*

Notes:
------

  The key way to think of how these asynchronous functions work is something along
the following lines:

  * Check and Vvalidate parameters

  * Tell Node.js core to queue the call to the appropriate function for you,
    and to notify (call) the provided callback function when there is a result.

  * Return to the caller.


  You might be asking: If the open function returns right away, why doesn't
the node process exit immediately after that function has returned? 

  The answer is that Node operates with an 'event queue;' if there are pending
events for which you are awaiting a response, it does not exit until your code
has finished executing and there are no events left in that queue.

*/
