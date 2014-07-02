/*
  As explained above, for reasons of efficiency, you should consider adding
the reusable properties and methods to the prototype. If you do so, then it's
probably a good idea to inherit only the prototype, because all the reusable
code is there. This means that inheriting the object contained in
Shape.prototype is better than inheriting the object created with new Shape().
After all, new Shape() will only give you own shape properties which are not
meant to be reused (otherwise they would be in the prototype). You gain a little
more efficiency by:

  * Not creating a new object for the sake of inheritance alone, and
  * Having less lookups during runtime when it comes to searching for
    toString() for example.

  Here's the updated code:
*/

function Shape(){}
// augment prototype
Shape.prototype.name = "shape";
Shape.prototype.toString = function(){return this.name;};

function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = "2D shape";

function Triangle(side, height){
  this.side = side;
  this.height = height;
}

// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function(){return this.side * this.height/2;};

/*
  The test code will give the same result
*/

var my = new Triangle(5, 10)
console.log(my.getArea());
console.log(my.toString());

/*
  What's the difference in the lookups when calling my.toString()? First, as
usual, the JavaScript engine looks for a method toString() of the my object
itself. The engine doesn't find such a method, so it inspects the prototype.
The prototype turns out to be pointing to the same onject that TwoDShape's
prototype points to and also the same object that Shape.prototype points to.
Remember that objects are not copied by value, but only by reference. So the
lookup is only a two-step process as opposed to four (in the previous example)
or three (in the first example).

  Simply compying the prototype is more efficient but it has a side effect:
because all of the children and parents point to the same object, when a child
modifies the prototype, the parents get the changes, and so do the siblings.

  Look at this line:

    * Triangle.prototype.name = "Triangle";

  It changes the name property, so it effectively changes Shape.prototype.name
too. If you create an instance using new Shape(), its name property will say
"Triangle."
*/

var s = new Shape();
console.log(s.name);
