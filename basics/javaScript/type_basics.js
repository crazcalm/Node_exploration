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

// You can use the functions parseInt and parseFloat to convert strings
// to numbers

parseInt('32523523626263'); // 32523523626263

parseFloat('82959.248945895'); // 82959.248945895

parseInt('234.43634'); // 234

parseFloat('10'); // 10

// Finally, to test whether a given number is a valid finite number, use the
// isFinite function

isFinite(10/5); // true

isFinite(10/0); // false


/*

Booleans:
---------

  Values can be either be true or false, and although you technically can
convert values to boolean with the Boolean function, you almost never use it
because the language converts everything to boolean when needed, according to
the following rules:

1. false, 0, empty string(""), NaN, null, and undefined all evaluate to false.

2. All other values evaluate to true.

*/


/*

Strings:
--------

  Strings in JavaScript are sequences of Unicode characters that can represent
a vast majority of the characters in the world, including these used in most
Asian languages.

  There is no seperate char or character data type in the language; you just
use a string of length 1 to represent these.


  Strings can be wrapped in single or double quotation marks. They are
functionally equivalent, and you are free to use whatever you want.

*/


// To get the length of a string in JavaScript, just use the length property

var x = "cat"; // undefined

x.length; // 3

"cat".length // 3


// To add two strings together, you an use the + operator

"cats" + " go " + "meow"; // cats go meow

// If you start throwing other types into the mix, JavaScript converts them as
// best it can:

var distance = 25;

"I ran " + distance + " kilometers today"; // I ran 25 kilometers today

// Note that this can provide some interesting results if you start mixing
// expressions a bit too much

5 + 3 + " is my favorite number"; // 8 is my favorite number

// if you really want "53" to be your favorite number, you can just prefix
// it all with an empty string to force the conversion earlier.

"" + 5 + 3 + " is my favorite number"; // 53 is my favorite number

/*

String Functions:
----------------

*/
