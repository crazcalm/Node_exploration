/*
  So far we have discussed using anonymous functions as callbacks. Let's see
another application of an anonymous function -- calling this function right
after it was defined. Here's an example.
*/

(
  function(){
    console.log("boo");
  }
)();

/*
  The syntax may look a little scary at first, but it's actually easy--you
simply place an anonymous functions inside parentheses followed by another
set of parentheses. The second set basically says "execute now" and is also
the placeto put any parameters that your anonymous function might need.
*/

(
  function(name){
    console.log("Hello "+ name + "!");
  }
)("Marcus");

/*
  One good reason for using self-invoking anonymous functions is to have some
work done without creating global variables. A drawback, of course, is that you
cannot execute the same function twice (unless you put it inside a loop or
another function). This makes the anonymous self-invoking functions best
suited for one-off or initialization tasks.
*/
