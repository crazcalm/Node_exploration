function a() {
  console.log("A!");
  return function(){
    console.log("B!");
  };
}

/*
  Because a function can return a function, you can use the new function to
replace the old one. Continuing with the previous example, you can take the
value returned by the call to a() to overwrite the actual a() function:
*/

a = a();

/*
  The above console.log(A!), but the next time you call a() it console.log(B!)
*/

a();

/*
  This is usefule when a function has some initial one-off work to do. The
function overwrites itself after the first call in order to avoid doing
uneccessary repetitive work every time it's called.

  In the exmaple above, we redefined the function from the outside--we got the
returned value and assigned it back to the function. But the function can
actually rewrite itself from the inside.
*/

function a(){
  console.log("a!");
  a = function(){
    console.log("b!")
  }
}

/*
  If you call this function for the first time, it will:

    * Console.log(a!) (consider this as being the one-off preperatory work)
    * Redefine the global variable a, assigning a new function to it.

  Every subsequent time that the function is called, it will console.log(b!).

  Here's another example that combines several of the techniques discussed
in the last few sections of this chapter:
*/

var a = function(){
  function someSetup(){
    var setup = "done";
  }

  function actualWork(){
    console.log("Worky-worky");
  }

  someSetup();
  return actualWork;
}();

/*
  In this example:

    * You have private functions--someSetup() and actualWork().
    * You have self-invoking function
    * The function executes for the first time, calls someSetup() and then
      returns a reference to the variable actualWork, which is a function.
      Notice that there are no parentheses in the return, because it is
      returning a function reference, not the result of invoking the function.
    * Because the whole thing starts with var a = ..., the value returned by
      the self-invoked function is assaigned to a.
*/
