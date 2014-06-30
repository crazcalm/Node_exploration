/*
  Let's see two more examples of using closures. The first one involves the
creation of getter and setter functions. Imagine you have a variable that
will contain a very specific range of values. You don't want to expose this
variable because you don't want just any part of the code to be able to alter
its value. You protect this variable inside a function and provide two
additional functions--one to get the value and one to set it. The one that sets
it couls contain some logic to validate a value before assigning it to the
protected variable (let's skip the validation part for the sake of keeping the
example simple).

  You place both the getter and the setter functions inside the same function
that contains the secret variable, so that they share the same scope:
*/

var getValue, setValue;
(function(){
  var secret = 0;
  getValue = function(){
    return secret;
  };
  setValue = function(v){
    secret = v;
  };
})()

/*
  In this case, the function that contains everything is a self-invoking
anonymous function. It defines setValue() and getValue() as global functions,
while the secret variable remains local and inaccessible directly.
*/

console.log(getValue());
setValue(123);
console.log(getValue());
