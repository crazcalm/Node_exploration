/*
                Copying Properties
                ------------------

  Now let's try a slightly different approach. Since inheritance is about
reusing code, you can simply copy properties from the parent to the child.
Keeping the same interface as the extend() function above, you can create
a function extend2() which takes two constructor functions and copies all
of the properties from the parent's prototype to the child's prototype. This
will include methods, as methods are just properties that happen to be functions.
*/

function extend2 (Child, Parent){
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p){
    c[i] = p[i]
  }
  c.uber = p;
}

/*
  As you can see, a simple loop through the properties is all it takes. As with
the previous example, you can set an uber property if you want to have easy
access to the parent's methods from the child. Unlike the previous example
though, it is not necessary to reset the Child.prototype.constructor because
here the child prototype is augmented, not overwritten completely, so the
constructor property will point to the correct value.

  This method may be a little inefficient compared to the previous method
because properties of the child prototype are being duplicated instead of
simply being looked up via the prototype chain during execution. Bear in mind
that this is only true for properties containing primitive types. All objects
(including functions and arrays) are not duplicated, because these are passed
by reference only.

  Let's see an example of using two constructor functions, Shape() and
TwoDShape(). Shape()'s prototype object contains a primitive property, name,
and a non-primitive one--the method toString():
*/

var Shape = function(){};
var TwoDShape = function(){};
Shape.prototype.name = "shape";
Shape.prototype.toString = function(){return this.name;};

/*
  If you inherit with extend2(), the prototype of the TwoDShape() will gets its
onw copy of the name prototype. It will also get its own copy of toString(),
but this is a reference copy, so the function will not be recreated a second
time.
*/

extend2(TwoDShape, Shape);
var td = new TwoDShape();

