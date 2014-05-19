/*

Classes:
-------

  Object-oriented programming in JavaScript is a bit different from other
languages in that there is no explicit class keyword or type. Instead, classes
are all declared functions:
*/

function Shape () {

  this.X = 0;
  this.Y = 0;

  this.move = function (x,y){

    this.X = x;
    this.Y = y;
  }

  this.distance_from_origin = function(){

    return Math.sqrt(this.X * this.X + this.Y * this.Y);
  }
}

var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin())

// You can add as many properties and methods to your classes as you like, at
// any time:

var s = new Shape(15,35);
s.FillColor = 'red';

// The function that declares the class also serves as its constructor

/*

  There are two problems with this scheme for creating classes, however.

  First, it seems a bit inefficient to have to carry around the method implementations
with every single object. (Every time you create a new instance of Shape, you
are creating the move and distance_from_origin functions from scratch)

  Secondly, you might like to extend this class to create circles and squares
and have them inherit the methods and properties from the base class without
you having to do extra work.

*/


/*

Protoypes and Inheritance:
--------------------------

  By default, all objects in JavaScript have a prototype object, which is the
mechanism through which they inherit properties and methods.

  Change the Shape (Shape2) class created earlier so that all inheriting
objects also get the x and y properties, as well as the methods you have declared
on it:
*/

function Shape2 () {
}

Shape2.prototype.x = 0;
Shape2.prototype.y = 0;

Shape2.prototype.move = function(x,y) {

  this.X = x;
  this.Y = y;
}

Shape2.prototype.distance_from_origin = function () {

  return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

Shape2.prototype.area = function () {

  throw new Error("I do not have a shape yet");
}

var s = new Shape2();
s.move(10,10);
console.log(s.distance_from_origin());


// We have set ourselves up to easily extend the Shape2 class.

function Square () {
}

Square.prototype = new Shape2();
Square.prototype.__proto__ = Shape2.prototype;

Square.prototype.Width = 0;
Square.prototype.area = function () {
  return this.Width * this.Width;
}

var sq = new Square();
sq.move(-5, -5);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distance_from_origin());

/*

  The code for this new Square class makes use of a new JavaScript language
feature seen in V8 and a few other implementations: the __proto__ property.
It lets you tell JavaScript that a new class you are declaring should have the
base prototype of the specified type, and then you can extend it from there.

*/

