/*

Classes:
-------

  Object-oriented programming in JavaScript is a bit different from other
languages in that there is no explicit class keyword or type. Instead, classes
are all declared functions:
*/

function shape () {

  this.X = 0;
  this.Y = 0;

  this.move = function (x,y){

    this.X = x;
    this.Y = y;
  }

  this.distance_from_origin = function(){

    return Math.sqrt(this.X * this.X + this.Y * this.Y);
  }
}

var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin)
