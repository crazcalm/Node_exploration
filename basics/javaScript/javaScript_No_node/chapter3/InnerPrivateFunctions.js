/*
  Bearing in mind that a function is just like any other value, there's nothing
that stops you from defining a function inside another function.
*/

function a(param){
  function b(theinput){
    return theinput *2;
  }

  return "The result is " + b(param);
}

/*
  Using the function literal notation, this can also be written as:
*/

var a = function(param){
  var b = function(theinput){
    return theinput *2;
  }
  return "The result is " + b(param);
}

/*
  When you call the global function a(), it wil internally call the local
function b(). Since b() is local, it's not accessable outside a(), so we can
say it's a private function.
*/

console.log("a(2): "+a(2));
console.log("a(8): " + a(8));
console.log("b(2): "+ b(2));

/*
  The benefit of using private functions are as follows:

    * You keep the global namespace clean.
    * Privacy--you expose only the functions you decide to the "outside world,"
      keeping to yourself functionality that is not meant to be consumed by
      the rest of the application.
*/
