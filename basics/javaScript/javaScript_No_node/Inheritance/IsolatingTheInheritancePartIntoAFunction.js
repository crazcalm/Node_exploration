/*
            Isolating the Inheritance PArt into a Function
            ----------------------------------------------

  Let's move the code that takes care of all of the inheritance details into a
reusable extend() function:
*/

function extend (Child, Parent){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

/*
  Using this function (or your own custom version of it) will help you keep
your code clean with regard to the repetitve inheritance-related task. This
way you can inherit by simply using:

    extend(TwoDShape, Shape);
and
    extend(Triangle, TwoDShape);

  This approach is the way the YUI (Yahoo! User Interface) library implements
inheritance through its extend() method. For example, if you use YUI and you
want your Triangle to inherit from Shape, you use:

    YAHOO.lang.extend(Triangle, Shape)
*/


