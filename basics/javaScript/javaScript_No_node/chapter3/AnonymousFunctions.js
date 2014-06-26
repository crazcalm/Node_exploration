/*
                    Anonymous Functions
                    -------------------

  In JavaScript, it's ok to have pieces of data lying around your program.
Imagine you have the following in yout code.
*/

"test"; [1,2,3]; undefined; null; 1;

/*
  This code may look a little odd, because it doesn't actually do anything,
but the code is valid and is not going to couse an error. You can say that this
code contains anonymous data--anonymous because the data peices are not
assigned to any variable and therefore don't have a name.

  As you now know, functions are like any other variable so they can also be
used without being assigned a name.
*/

// Node says that there is a syntax error!
//function(a){return a}

/*
  Now, these anonymous pieces of data scattered around your code are not really
useful, except if they happen to be functions. In this case, there can be two
elegant uses for them:

    * You can pass an anonymous function as a parameter to another function.
      the receiving funvtion can do something useful with the function that
      you pass.

    * You can define an anonymous function and execute it right away.

Let's see these two applications of the anonymous functions in more detail.
*/

/*
                    CallBack Functions
                    ------------------

  Because a function is just like any other data assinged to a variable, it can
be defined, deleted, copied, and why not also passed as an argument to other
functions?

  Here's an example of a function that accepts two parameters, exceutes them,
and returns the sum of what each of them returns.
*/

function invoke_and_add(a,b){
  return a() + b();
};

/*
  Now let's define two simple additional functions that only return hardcoded
values.
*/

function one(){
  return 1;
}

function two(){
  return 2;
}

/*
  Now we can pass those functions to the original function add() and get the
result.
*/

console.log("invike_and_add(one, two): " +invoke_and_add(one, two))

/*
  Another example of passing a function as a parameter is to use anonymous
functions. Instead of defining one() and two(), you can simple do:
*/

console.log("invoke_and_add with anonymous functions "+ 
                invoke_and_add(function(){return 1;}, function(){return 2;}))

/*
  When you pass a function A to another function B and B executes A, it's often
said that A is a callback function. If A doesn't have a name, then you can say
that it's an anonymous callback function.

  When are the callback functions useful? Let's see some examples that
demonstrate the benefits of the callback functions, namely:

    * They let you pass functions without the need to name them (which means
      there are less global variables)

    * You can delegate the responsibility of calling a function to another
      function (which means there is less code to write)

    * They can help with performance
*/


