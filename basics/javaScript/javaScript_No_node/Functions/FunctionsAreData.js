/*
                Functions Are Data
                ------------------

  This is an important concept that we'll need later on--functions in
JavaScript are actually data. This means that the following two ways to define
a function are exactly the same:
*/

function f(){return 1};
var f = function(){return 1};

/*
  The second way of defining a function is known as function literal notation.

  When you use the typeof operator on a variable that holds a function value,
it returns the string "function"
*/

console.log("typeof(f): " +typeof(f))

/*
  So JavaScript functions are data, but a special kind of data with two
important features:

    * They contain code
    * They are executable (can be invoked)

  As you saw before, the way to execute a function is by adding parentheses
after its name. AS the next example demonstrates, this works regardless of how
the function was defined. In the example, you can also see how a function is
treated as a normal variable--it can be copied to a different variable and
even deleted.
*/

var sum = function(a, b){return a + b};
var add = sum;
console.log("delete sum:" + delete(sum));
console.log("sum: " + sum);
console.log("add: " + add);
console.log("add(1,2): " + add(1,2))
