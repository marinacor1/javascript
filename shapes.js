var square = new Object();
square.sideLength = 6;

square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
  return this.sideLength* this.sideLength;
};

var p = square.calcPerimeter(3, 2);
var a = square.calcArea(4);
