/*
                            Deep Copy
                            ---------

  The function extendCopy() creates what is called a shallow copy of an object.
The opposite of a shallow copy would be a deep copy. As discussed above (
in the section "Heads-up When Copying by Reference"), when you copy objects
you only copy pointers to the location in memory where the object is stored.
This is what happens in a shallow copy. If you modify an object in the copy,
you also modify the original. The deep copy avoids this problem.

  The deep copy is implemented the same way as the shallow copy: you loop
through the properties and copy them one by one. Only when you encounter a
property that points to an object, do you call the deep copy function again:
*/

function deepCopy (p, c){
  var c = c || {};
  for (var i in p){
    if (typeof(p[i]) === "object"){
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    }else{
      c[i] = p[i];
    }
  }
  return c;
}

/*
  Let's create an object that has arrays and a sub-object as properties.
*/

var parent = {
  numbers : [1,2,3],
  letters : ['a', 'b', 'c'],
  obj : {
    prop: 1
  },
  bool: true
};

/*
  Let's test this by creating a deep copy.
*/

var mydeep = deepCopy(parent);
mydeep.numbers.push(4,5,6);

console.log("child:" + mydeep.numbers);
console.log("parent: " + parent.numbers);

/*
  The idea of the deep copy inheritance is implemented in more recent versions
of jQuery.
*/
