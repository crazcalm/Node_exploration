/*
  A solution to the problem outlined above, where all prototypes point to the
same object and the parents get children's properties, is to use an intermediary
to break the chain. The intermediary is in the form of a temporary constructor
function. Creating an empty function F() and setting its prototype to the
prototype of the parent constructor, allows you to call new F() and create
objects that have no properties of their own, but inherit everything from the
parent's prototype.

  Let's take a look at the modified code:
*/

function Shape(){}
// augment prototype
Shape.prototype.name = "shape";
Shape.prototype.toString = function(){return this.name;};

function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = "2D shape";

function Triangle(side, height){
  this.side = side;
  this.height = height;
}
// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function(){return this.side * this.height/2;};

/*
  Creating my triangle and testing the methods
*/

var my = new Triangle(5, 10);
console.log(my.getArea());
console.log(my.toString());

/*
  Using this approach, we keep the prototype chain in place and the parents'
properties are not overwritten by the children:
*/

console.log(my.__proto__.__proto__.__proto__.constructor);

var s = new Shape();
console.log(s.name);

/*
  At the same time, this approach supports the idea that only properties and
methods added to the prototype should not be inherited. The rationale behind
this are that own properties are likely to be too specific to be reusable.
*/
