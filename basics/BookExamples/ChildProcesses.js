/*
                        Child Processes
                        ---------------

  While client-side JavaScript is limited by whatever the browsers support,
Node development is completely the opposite. In addition to the wide variety
of modules available to Node, you can also access all of the functionality of
the operating system that Node is running upon. That means you can build just
about anything with Node.

  Accessing the operating system commands is as simple as including the
child_process module, which is part of the Node core. In particular, you'll
 want to use the spawn method, so call this as part of your require statement:

      var spawn = require("child_process").spawn;

Using Child Processes:
----------------------

  Now you can use this to call any OS command you'd like. For instance, you can
get a listing of the current directory using ls. The first step is to spawn a
child process for ls:

      // include the child_process
      var spawn = require('child_process').spawn;

      // spawn a child process for ls
      var ls = spawn("ls");

  Next, set up a couple events. First, a handler for standard output(stdout):

      // handle standard output
      ls.stdout.on("data", function(data){
        console.log(data.toString());
      });

  This outputs the results of ls to the Node console. However, that occurs only
if there isn't an error. You should also set up a standard error (stderr)
handler:

      // handle exit
      ls.stderr.on('data', function(data){
          console.log('Error: ' + data);
      });

  Finally, you should set up a handler for when the command exits. That way you
can get a success or fail message depending on whether it crashes:

      // handle exit
      ls.on('exit', function(code){
        console.log('child process exited with code ' + code);
      });

  Putting the script together
*/

// include the child_process module
var spawn = require('child_process').spawn;

// spawn a child process for ls
var ls = spawn('ls');

// handle standard output
ls.stdout.on("data", function(data){
  console.log(data.toString());
});

// handle error
ls.stderr.on("data", function(data){
  console.log("Error: " + data);
});

// handle exit
ls.on("exit", function(code){
  console.log("child process exited with code " + code);
});

/*
Passing Variables to a Child Process:
-------------------------------------

  You can also pass variables to your child process. For instance, to get a
listing of all the files in the directory (including hidden files), enter the
following into the command line:

      ls -a

  To execute the same command in Node, pass a second argument to spawn(). This
second argument is an array of any arguments you want to pass with the command:

      var ls = spawn('ls', ['-a']);
*/
