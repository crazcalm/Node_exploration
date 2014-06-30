/*
  The last closure example shows the use of a closure to accomplish Iterator
functionality.

  You already know how to loop through a simple array, but there might be cases
where you have a more complicated data structure with different rules as to
what the sequence of values is. You can wrap the complicated "who's next" logic
into an easy-to-use next() function. Then you simply call next() every time
you need the consecutive value. For this example, we'll just use a simple
array, and not a complex data structure.

  Here's an initialization function that takes an input array and also defines
a private pointer i that will always point to the next element in the array.
*/

function setup(x){
  var i =0;
  return function(){
    return x[i++];
  };
}

/*
  Calling the setup() function with a data array will create the next() function
for you.
*/

var next = setup(['a', 'b', 'c']);

/*
  From there it's easy and fun: calling the same function over and over again
gives you the next element.
*/
console.log(next ());
console.log(next());
console.log(next());
