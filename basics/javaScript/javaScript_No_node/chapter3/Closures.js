/*
  Before we get to closures, let's review and expand on the concept of scope
in JavaScript.

Scope Chain:
------------

  In JavaScript there is no curly braces scope, but there is function scope. A
variable defined in a function is not visible outside the function, but a
variable defined in a code block (an if or a for loop) is visible outside the
block. 
*/

var a = 1; function f(){var b =1; console.log(a);} // 1

//console.log(b); // b is not defined

/*
  The variable a is in the global space, whereas b is in the scope of the
function f(). So:

    * Inside f(), both a and b are visible.
    * Outside f(), a is visible, but b is not.

  If you define a function n() nested inside f(), n() will have access to
variables in its own scope, plus the scope of its "parents". This is known as
scope chain, and the chain can be as long (deep) as you need it to be.
*/

var a = 1;
function f(){
  var b = 1;
  function n(){
    var c = 3;
  }
}

/*
Lexical Scope:
--------------

  In JavaScript, functions have lexical scope. This means that functions create
their environment (scope) when they are defined, not when they are executed.
Let's see an example:
*/
function f1(){var z =1; f2();}
function f2(){return z;}
//f1(); // z is not defined

/*
  Inside the function f1() we call the function f2(). Because the local variable
z is also inside f1(), one might expect that f2() will have access to z, but
that's not the case. At the time when f2() was defined (as opposed to executed),
there was no z in sight. f2(), just like f1(), only has access to its own scope
and the global scope. f1() and f2() don't share their local scope.

  When a function is defined, it "remembers" it environment, its scope chain.
This doesn't mean that the function also remembers every single variable that
is in scope. Just the opposite--you can add, remove or update variables inside
the scope of the function and the function will see the lastest, up-to-date
state of the variables.

  If you continue with the example abovend declare a global variable z, f2()
will see it, because f2() knowns the pathto the global environment and can
access everything in that environment. Also notice how f1() includes a call
to f2(), and it works even though although f2() is not defined. All f1() needs
to know is its scope, so that everything that shows up in scope becomes
immediately available to f1().
*/

/*
Closure #1:
-----------

  Take a look at this function:
*/

function f3(){ // beware of overloading the namespace!
  var b = "b";
  return function(){
    return b;
  }
}
/*
  This function contains a variable b, which is local, and therefore
inaccessible from the global space:

  Check out the return value of f(): it's another function. This new function
has access to its private space, to f()'s space and to the global space. So
it can see b. Because f() is callable from the global space (it's a global
function), you can call it and assign the returned value to another global
variable. The result--a new global function that has access to f()'s
private space.
*/

var n = f3();
console.log(n());

/*
Closure #2:
-----------

  The final example of the next example will be the same as the previous
example, but the way to achieve it is a little different. f() doesn't return a
function, but instead it creates a new global function n() inside its body.

  Let's start by declaring a placeholder for the global function-to-be. This
is optional, but it's always good to declare your variables. Then you can
define the function f() like this:
*/

var n5;
function f5(){
  var b = "b";
  n5 = function(){
    return b;
  }
}

/*
  Now what happens if you invoke f()?
*/
f5(); // must remember to call the function first!!!!
console.log(n5());

/*
  A new function is defined inside f() and since it's missing the var statement,
it becomes a global. During definition time, n() was inside f(), so it had access
to f()'s scope. n() will keep its access to f()'s scope, even though n() becomes
part of the global space.
*/

