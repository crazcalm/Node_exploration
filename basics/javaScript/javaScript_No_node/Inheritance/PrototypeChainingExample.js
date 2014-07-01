/*
  Prototype chaining is the defult way to implement inheritance, and is
described in the ECMAScript standard. In order to implement our heirarchy,
let's define three constructor functions.
*/

function Shape(){
  this.name = "shape";
  this.toString = function() {return this.name;};
}

function TwoDShape(){
  this.name = "2D shape";
}

function Triangle(side, height){
  this.name = "Triangle";
  this.side = side;
  this.height = height;
  this.getArea = function(){
    return this.side * this.height / 2;
  };
}

/*
 The code that performs the inheritance magic is as follows:
*/

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

/*
  What is happening here? You take the object contained in the prototype
property of TwoDShape and instead of augmenting it with individual properties,
you completely overwrite it with another object, created by invoking the Shape()
constructor with new. The same for Triangle: it's prototype is replaced with an
object created by new TwoDShape().

  The important thing to note, especially if you are already familiar with
a language such as Java, C++, or PHP, is that JavaScript works with objects,
not classes. You need to created an instance using the new Shape() constructor
and after that you can inherit its properties; you don't inherit from Shape()
directly.

  Additionally, after inheriting, you can modify Shape(), overwrite it or
even delete it, and this will have no effect on TwoDShape, because all you
needed was one instanceto inherit from.

  As you know from the previous chapter, when you completely overwrite the
prototype (as oposed to just augmenting it), this has some negative side
effects on the constructor property. Therefore, it's a good idea to reset the
constructor after inheriting:
*/

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

/*
  Now let's test what we have so far. Creating a Triangle object and calling
its own getArea() method works as expected:
*/

var my = new Triangle(5, 10);
console.log(my.getArea());
console.log(my);

/*
  Although the my object doesn't have its own toString() method, it inherits
one and can call it. Note how the inherited method toString() binds the
this object to my.
*/

console.log(my.toString());
