/*

Basics:
------

Node.js has a few core types: number, boolean, string, and object.

  The two other types, function and array, are actually special kinds of objects,
but because they have extra features in the language and runtime, some people
refer to these three --objects, function, and array--as complex types.

  The types null and undefined are also special kinds of objects and are also
treated specially in JavaScript.

*/

//the value undefined means that a value has not been set yet or
//simply does not exit

var x; // undefined

x = {};
x.not_valid; // undefined

//null, on the other hand, is an explicit assertion that there 'is no value':

var y; // undefined
y // undefined

y = null; // null

//To see the type of anything in JavaScript, you use the typeof operator

typeof 10 // number

typeof "hello" // string

typeof function(){var x = 20;} // function


/*

Constants:
----------

  While Node.js theoretically supports the 'const' keyword extension that some
modern JavaScript implementations have implemented, it's still not widely used.

  For constants, the standard practice is still to just uppercase letters and
variable declarations:

*/

var SECONDS_PER_DAY = 86400;

console.log(SECONDS_PER_DAY); // 86400

/*

Numbers:
--------

  All numbers in JavaScript are 64-bit IEEE 754 double-percision floating point
numbers. 

*/

//The tricky part of using the number type is that, for many numeric values,
//it is an approximation of the actual number. For example:

0.1 + 0.2 // 0.30000000000004

1 - 0.3 + 0.1 == 0.8 // false

//JavaScript is a bit different from other languages in that dividing a number
//by zero returns the value 'Infinity' or '-Infinity'

5/0 // Infinity

-5/0 // -Infinity


//Infinity and -Infinity are valid values that you can compare against in
//JavaScript:

var x = 10, y = 0;

x/y == Infinity // true

// You can use the functions parseInt and parse
