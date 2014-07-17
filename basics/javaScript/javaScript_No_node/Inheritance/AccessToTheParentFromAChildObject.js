/*
  Classical OO languages usually have a special syntax that gives you access
to the parent class, also referred to as superclass. This could be convenient
when a child wants to have a method that does everything the parent's method
does plus something in addition. In such cases, the child calls the parent's
method with the same name and works with the result.

  In JavaScript, there is no such special syntax, but it's easy to achieve the
same functionality. Let's rewrite the last example and, while taking care of
inheritance, also create an uber property that points to the parent's
prototype object.
*/

function Shape(){}
// augment prototype
Shape.prototype.name = "shape"
Shape.prototype.toString = function(){
  var result = [];
  if (this.constructor.uber){
    result[result.length] = this.constructor.uber.toString();
  }
  result[result.length] = this.name;
  return result.join(", ");
};

function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.uber = Shape.prototype;
// augment prototype
TwoDShape.prototype.name = "2D shape";

function Triangle (side, height){
  this.side = side;
  this.height = height;
}

// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;
//augment prototype
Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function(){return this.side * this.height /2;}


/*
  The new things here are:

    * The way the uber property is set to point to the parent's prototype.
    * The updated toString()

  Previously, toString() only returned this.name. Now, in addition to that,
there is a check to see whether this.constructor.uber exisits and, if it does,
call its toString() first. this.constructor is the function itself, and
this.constructor.uber points to the parent's prototype. The result is that
when you call toString() for a Triangle instance, all toString() methods
up the prototype chain are called.
*/

var my = new Triangle(5, 10);
console.log(my.toString());

/*
  The name of the property uber could've been "superclass" but this would
suggest that JavaScript has classes. Ideally it could've been "super"
(as in Java), but "super" is a reserved word in JavaScript. The German word
"uber" suggested by Douglass Crockford, means more or less the same as "super"
and, you have to admit, is sounds uber-cool.
*/
