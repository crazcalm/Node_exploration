/*
  There is another way to create objects: by using contructor functions. Let's
see an example:
*/

function Hero(){
  this.occupation = "Ninja";
}

/*
  In order to create an object using this function, you use the new operator,
like this:
*/

var hero = new Hero();
console.log(hero.occupation);

/*
  The benefit of using constructor functions is that they accept parameters,
which can be used when creating new objects. Let's modify the constructor to
accept one parameter and assign it to the name property.
*/

function Hero2(name){
  this.name = name;
  this.occupation = "Ninja";
  this.whoareyou = function(){
    return "I'm " + this.name +" and I'm a " this.occupation;
  }
}

/*
  Now you can create different objects using the same constructor:
*/

var h1 = new Hero2("Michelangelo");
var h2 = new Hero2("Donatello");
console.log(h1.whoareyou());
console.log(h2.whoareyou());

/*
  By convention, you should capitalize the first letter of your constructor
function so that you have a visual clue that this is not a normal function. If
you call a function that is designed to be a constructor, but you omit the new
operator, this is not an error, but it may not behave as you expect.
*/

var h = Hero2("Leonardo");
console.log(typeof(h));

/*
  What happened here? As there was no new operator, we didn't create a new
object.The function was caled like any other function, so h contans the value
that the function returns. The function does not return anything (there's no
return), so it actually returns undefined, which gets assigned to h.

  In this case, what does 'this' refer to? It refers to the global object.
*/

