/*

Language Constructs:
--------------------

  JavaScript contains nearly all the language operators and constructs you
would expect, including most logical and mathematical operators.

The ternary operator is supported:
EX: var pet = animal_meows ? "cat" : "dog"


  Even though numbers are implemented as double-precision floating-piont numbers,
bitwise operators are supported in JavaScript: The & (and), | (or), ~ (inverse),
and ^ (xor) operators all work by:

  1. First converting the operands into 32-bit integers.
  2. Performing the bitwise operation.
  3. Finally, converting the resulting number back to a JavaScript number.


  In addition to the standard while, do...while, and for loops, JavaScript also
supports the new language extensions for loop called the for...in loop (V8 JS).
This loop is used to get the names of all the keys on an object:

*/
var user = {

  first_name    : 'marc',
  last_name     : 'wandschneider',
  age           : Infinity,
  occupation    : 'writer'
};

for (key in user){

  console.log(key);
}

