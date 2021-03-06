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

/*
                Callback Examples
                -----------------

  Take a look at this common scenario: you have a function that returns a
value, which you then pass to another functions. In our example, the first
function, multiplyByTwo(), accepts three parameters, loops through them,
multiplying by two and returns an array containing the result. The second
function, addOne(), takes a value, adds one to it and returns it.
*/

function multiplyByTwo(a, b, c){
  var i, ar = [];
  for(i = 0; i < 3; i++){
    ar[i] = arguments[i] * 2;
  }
  return ar;
}

function addOne(a){
  return a +1;
}

/*
  Testing the functions we have so far:
*/

console.log("multiplyByTwo(1,2,3): " +multiplyByTwo(1,2,3))
console.log("addOne(100):  "+addOne(100))

/*
  Now let's say we want to have an array that contains three elements, and each
of the elements is to be passed through both functions. First, let's start
with a call to multiplyByTwo().
*/

var myarr = multiplyByTwo(10, 20,30)

/*
  Now loop through each element, passing it to addOne().
*/

for(var i = 0; i <3; i++){myarr[i] = addOne(myarr[i]);}
console.log("for loop plus addOne(): "+myarr);

/*
  As you see everything works fine, but there's still room for improvement. One
thing is that there was two loops. Loops can be expensive if they go through
a lot of repetitions. We can achieve the result we want with one loop only.
Here's how to modify multiplyByTwo() so that it accepts a callback function
and invokes callbacks on every iteration:
*/

function multiplyByTwo2(a,b,c, callback){
  var i, ar= [];
  for(i =0; i <3; i++){
    ar[i] = callback(arguments[i]*2);
  }
  return ar;
}

/*
  By using the modified function, the whole work is now done with just one
function call, which passes the start values and the callback.
*/

myarr = multiplyByTwo2(1,2,3, addOne);
console.log("multiplyByTwo2 with callback addOne: " + myarr);

myarr = multiplyByTwo2(1,2,3, function(a){return a+1;});
console.log("multiplyByTwo2 with anonymous function: " + myarr);

