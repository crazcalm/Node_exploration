/*
                    Anonymous Functions
                    -------------------

  In JavaScript, it's ok to have pieces of data lying around your program.
Imagine you have the following in yout code.
*/

"test"; [1,2,3]; undefined; null; 1;

/*
  This code may look a little odd, because it doesn't actually do anything,
but the code is valid and is not going to couse an error. You can say that this
code contains anonymous data--anonymous because the data peices are not
assigned to any variable and therefore don't have a name.

  As you now know, functions are like any other variable so they can also be
used without being assigned a name.
*/

function(a){return a};

/*
  Now, these anonymous pieces of data scattered around your code are not really
useful, except if they happen to be functions. In this case, there can be two
elegant uses for them:

    * You can pass an anonymous function as a parameter to another function.
      the receiving funvtion can do something useful with the function that
      you pass.

    * You can define an anonymous function and execute it right away.

Let's see these two applications of the anonymous functions in more detail.
*/


