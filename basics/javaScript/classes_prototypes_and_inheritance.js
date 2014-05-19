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


