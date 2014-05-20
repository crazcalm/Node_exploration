/*

Error handling with asynchronous programming:
---------------------------------------------

  I am skipping the example where the asynchronous function that uses the 
setTimeout method is written within a try and accept clause. When that program
runs, it thows and error.

code:
-----

try {

  setTimeout(function(){
    throw new Error('Uh oh!');
  }, 2000)
}catch (e) {
  console.log('I caught the error: ' + e.message);
}

  In reality, the call to setTimeout does execute within the try...catch block.
If that function were to throw and error, the catch block would catch it, and
you would see the message that you hoped to see. Howeverm the setTimeout function
just adds an event to the Node event queue (intructing it to call the provided
function after the specified time interval), and then return. 

  The provided callback function actually operates within its own entirely new
context and scope. As a result, when you call asynchronous functions for
nonblocking IO, very few of them throw errors, but instead use a seperate
way of telling you that something has gone wrong.

  In Node, you use a number of core patterns to help you standardize how you
write code and avoid errors. These patterns are not enforced syntactically by
the language or runtime, but you will see them used frequently and even use
them yourself.

*/

/*

The callback function and Error Handling:
-----------------------------------------

  One of the first patterns you will see is the formate of the callback
function you pass to most asynchronous functions. It always has at least one
parameter, the success or failure status of the last operation, and very
commonly a second with some sort of additional results or information from the
last operation (such as handle, database connection...); some callbacks are
given more than two.

EX:
--

do_something(param1, param2, ..., paramN, function (err, result){...});

The 'err' param is either:

  * null, indicating the operation was a success, and (if there should be one)
    there will be a result.

  * An instance of the Error object class. 

Throughout this book, I demonstrate two common coding styles for handling erros
in callbacks. Here's the first:

EX1:
----

fs.open(

  'info', 'r',
  function(err, handle) {

    if (err){
      console.log("ERROR: " err.code + "(" + err.message + ")");
      return;
    }
    // success! continue working here

  }
);


In this style, you check for errors and return if you see one; otherwise, you
continue to process the result. And now here's the other way:


*/
