/*
                Heads-up When Copying by Reference
                ----------------------------------

  The fact that objects (including functions and arrays) are copied by
reference could sometimes lead to results you don't expect.

  Let's create two constructor functions and add some properties to the
prototype of the first one:
*/

var A = function(){}, B = function(){};
A.prototype.stuff = [1,2,3];
A.prototype.name = "a";

/*
  Now let's have B inherit from (either extend() or extend2() will do):

*/

function extend2 (Child, Parent){
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p){
    c[i] = p[i]
  }
  c.uber = p;
}

extend2(B,A);

/*
  Using extend2(), B's prototype inherited A.prototype's properties as its own
properties.
*/

console.log(B.prototype.hasOwnProperty('name'));
console.log(B.prototype.hasOwnProperty("stuff"));

/*
  The name property is primitive so a new copy is created. The property stuff
is an array object so it is copied by reference:
*/

console.log(B.prototype.stuff);
console.log(B.prototype.stuff === A.prototype.stuff);

/*
  Changing B's copy of name doesn't affect A:
*/

B.prototype.name += "b";
console.log(B.prototype.name);
console.log(A.prototype.name);
