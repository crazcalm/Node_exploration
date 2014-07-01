/*
  When you create objects using a constructor function. own properties are
add using 'this'. This could be inefficient in cases where properties don't
change across instances. In the example above, Shape() was defined like so:
*/

function Shape(){
  this.name = "shape";
}

/*
  This means that every time you create a new object using new Shape() a new
name property will be created and stored somewhere in memory. The other option
is to have the name property added to the prototype and shared among all the
instances:
*/

function Shape(){}
Shape.prototype.name = "shape";


/*
  Now every time you create an object using new Shape(), this object will not
have its own name, but will use the one added to the prototype. This is more
efficient, but you should only use it for properties that don't change from one
instance to another. Methods are ideal for this type of sharing.

  Let's improve on the example above by adding all methods and suitable
properties to the prototype. In the case of Shape() and TwoDShape() everything
is meant to be shared:
*/

function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){return this.name;};

function TwoDShape(){}
// Take care of the inheritance
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = "2D shape";

/*
  As you can see you have to take care of inheritance first before augmenting
the prototype, otherwise anything you add to TwoDShape.prototype will be wiped
out when you inherit.

  The Triangle constructor is a little different, because every object it
creates is a new trangle, which may have different dimensions. So it's good to
keep side and height as its own properties and share the rest. The method
getArea(), for example, is the same regardless of the actual dimensions of each
triangle. Again, you do the inheritance bit first and then augment the prototype
*/

function Triangle(side, height){
  this.side = side;
  this.height = height;
}
// Take care of inheritance
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function(){return this.side * this.height /2;};

