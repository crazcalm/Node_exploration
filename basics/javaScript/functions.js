/*

Functions:
----------

  JavaScript is a functional programming language, wherein functions are fully
typed objects that can be manipulated, extended, and passed around as data.

*/

// Basics:

// The simpliest kind of function is exactly as you expect:
function hello(name){

  console.log("hello" + name);
};

hello("Marcus") // hello Marcus

// To declare parameters for a function in JavaScript, you simply list them
// in the parentheses. There is, however, absolutely no checking of these
// parameters at runtime:

hello(); // hello undefined

hello("marc", "dog", "cat", 48295); // hello marc

// If too few parameters are passed into a fuction call, the resulting variables
// are assigned the value undefined. If too many are passed in, the extras are
// simply unused.


// All functions have a predefined array in the body called arguments. It has
// all the values that were passed in to this particular function call, and
// lets you do extra checking on the parameter list.


// Suppose you want to initialize a caching system you wrote. The function to
// do this takes a size to create the cache and uses default values for other
// things such as cache location, expiration algorithm, maximum cache item size
// and storage type.

// You can write the function as follows:
function init_cache(size_mb, location, algorithm, item_size, storage_type){

  ...
}

init_cache(100, null, null, null, null);

// However, it would be even cooler if you could have the function be 'smart'
// enough to give you a couple of different ways to call it:
function init_cache(){

  var init_data = {
    cache_size  : 10,
    location    : '/tmp',
    algorithm   : 'lru',
    item_size   : 1024,
    storage_type: 'btree'
  };

  // an array of the arugments passed to the function
  var a = arguments;

  for (var i = 0; i < a.length; i++;){

    // Allows you to pass your own init_data object
    if (typeof a[i] == 'object'){
      init_data = a[i];
      break;
    }else if (typeof a[i] == 'number'){ // Allows you to set the cache_size while
      init_data.cache_size = a[i];      // keeping the rest of the default values
      break;                            // from init_data the same
    }else{
      throw new Error("bas cache init param");
    }
  }

// etc

}

// Note: Name all anonymous functions

/*

Function Scope:
--------------

  Every time a function is called, a new variable scope is created. Variables
declared in the parent scope are available to that function, but variables
declared within the new scope are not available when the function exits.
Consider the following code.

*/

var pet = 'cat';

function play_with_pets(){

  var pet = "dog";
  console.log(pet);
}

play_with_pets(); // dog
console.log(pet); // cat

// Combining this scoping with ananymous functions can be a good way to do
// some quick or private work with private variables that will disappear when
// the ananymous function exits.

// Here's a contrived example to compute the volume of a cone.

var height = 5;
var radius = 3;
var volume;

//declare and immediately call anon function to create scope
(function(){

  var pir2 = Math.PI * radius * radius; // temp var
  volume = (pir2 * height)/ 3;
})();

console.log(volume);
