/*
  As you already know, the prototype will be consulted when you try to access
a property that does not exist in the current object.

  Let's again have an object called monkey and use it as a prototype when
creating objects with the Human() constructor.
*/

var monkey = {
  feeds: "bananas",
  breathes: "air"
};
function Human(){}
Human.prototype = monkey;

/*
  Now let's create a developer object and give it some properties.
*/

var developer = new Human();
developer.feeds = "pizza";
developer.hacks = "JavaScript";

/*
  Now let's consult somw of the properties. hacks is a property of the
developer object.
*/

console.log(developer.hacks);

/*
  feeds could also be found in the object.
*/

console.log(developer.feeds);

/*
  breathes doesn't exit as a property of the developer object, so the prototype
is looked up, as if there is a secret link pointing to the prototype object.
*/

console.log(developer.breathes);

/*
  Can you get from the developer object to the prototype object? Well, you
could, using constructor as the middleman, so having something like
developer.constructor.prototype should point to monkey. The problem is that
this is not very reliable, because constructor is more for informational
purposes and can easily be overwritten at any time. You can overwrite it with
something that's not even an object and this will not affect the normal
functioning of the prototype chain.

  Let's set the constructor property to some string.
*/
developer.constructor = "junk";

/*
  It seems like the prototype is now all messed up.
*/

console.log(typeof(developer.constructor.prototype));

/*
  ...but it ins't, becsuse the developer still breaths "air"
*/

console.log(developer.breathes);

/*
  This shows that the secret link to the prototype still exits. The secret link
is exposed in Firefox as the __proto__ property
*/

console.log(developer.__proto__);

/*
  You can used this secret property for lerning purposes but it's not a good
idea to use it in your real scripts, because it does not exist in Internet
Explorer, so your scripts won't be portable.

  __proto__ is not the same as prototype. __proto__ is a property of the
instance, whereas prototype is a property of the constructor functions. 
*/
