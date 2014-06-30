/*
  The functions in JavaScript are objects and they contain methods and
properties. Some of the methods that you are already familiar with are apply()
and cal() and some of the properties are length and constructor. Another
property of the function object is prototype.

  If you define a simple function foo() you can access its properties as you
would do with any other object:
*/

function foo(a, b){
  return a*b;
}
console.log(foo.length);
console.log(foo.constructor);

/*
  prototype is a property that gets created as soon as you define the function.
Its initial value is an empty object.
*/

console.log(typeof(foo.prototype));

/*
  It's as if you added this property yourself like this:

foo.prototype = {}

  You can augment this empty object with properties and methods. They won't
have any effect of the foo() function itself; they'll only be used when you use
foo() as a constructor.
*/
