/*
  In the previous chapter you learned how to define constructor functions which
can be used to create (construct) new objects. The main idea was that inside a
function invoked with 'new' you have access to the value 'this,' which contains
the object to be returned by the contructor. Augmenting (adding methods and
properties to) this object is the way to add functionality to the object being
created.

  Let's take a look at the constructor function Gadget() which uses 'this' to
add two properties and one method to the object it creates.
*/

function Gadget(name, color){
  this.name = name;
  this.color = color;
  this.whatAreYou = function(){
    return "I am a " + this.color + " " + this.name;
  }
}

/*
  Adding methods and properties to the prototype property of the constructor
function is another way to add functionality to the objects this constructor
produces. Let's add to more properties, price and rating, and a getInfo()
method. Since prototype contains an object, you can just keep adding to it like
this:
*/

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function(){
  return "Rating: " + this.rating + ", price: " + this.price;
};

var test = new Gadget("Marcus", "black");
console.log(test.whatAreYou());
console.log(test.getInfo());

/*
  Instead of adding to the prototype object, another way to achieve the above
result is to overwrite the prototype completely, replacing it with an object of
you choice:


Gadget.prototype = {
  price: 1000,
  rating: 8,
  getInfo : function(){
    return "Price: " + this.price + ", rating: " + this.rating;
  }
*/
