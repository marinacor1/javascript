function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
   return (this.height * 2) + (this.width * 2)
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit ("fluffy");
var rabbit2 = new Rabbit ("happy");
var rabbit3 = new Rabbit ("sleepy");

rabbit1.describeMyself
rabbit2.describeMyself
rabbit3.describeMyself
