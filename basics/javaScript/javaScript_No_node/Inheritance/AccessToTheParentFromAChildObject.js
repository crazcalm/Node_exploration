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
