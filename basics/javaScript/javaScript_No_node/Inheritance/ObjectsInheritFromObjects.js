/*
                Objects Inherit from Objects
                ----------------------------

  Objects can start as a blank canvas by using var o = {}; and get properties
later. Instead of doing this, you can start by copying all of the properties
of an existing object. Here's a function that does exactly that: It takes an
object and returns a copy of it.
*/

function extendCopy(p){
  var c = {};
  for (var i in p){
    c[i] = p[i];
  }
  c.uber = p;
  return c;
}

/*
  Simply copying all of the properties is a very simple pattern, but it is
widely used. The code behind Firebug has an extend() function that works this
way. Also, some popular JavaScript libraries like jQuery and Prototype follow
this basic pattern in earlier versions.

  Let's see this function in action. You start by having a base object:
*/

var shape = {
  name : "shape",
  toString : function(){return this.name;}
};

/*
  In order to create a new object that buils upon the old one, you can call
the function extendCopy() which returns a new object. Then you can augment the
new object with additional functionality.
*/

var twoDee = extendCopy(shape);
twoDee.name = '2D shape';
twoDee.toString = function(){return this.uber.toString() + ', ' + this.name;};

/*
  A triangle object that inherits the 2D shape object:
*/

var triangle = extendCopy(twoDee);
triangle.name = "Triangle";
triangle.getArea = function(){return this.side * this.height /2;};

/*
  Using the triangle:
*/

triangle.side = 5; triangle.height = 10; console.log(triangle.getArea());

console.log(triangle.toString());

/*
  A possible drawback of this method is the somewhat verbose way of initializing
the new triangle object, where you manually set values for side and height, as
opposed to passing them as values to a constructor. But this is easily
resolved by having a function, for example called init() (or __construct()
if you come from PHP5) that acts as a constructor and accepts initialization
parameters.
*/
