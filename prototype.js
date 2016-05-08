function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

// create your Animal class here
function Animal (name, numLegs) {
 this.name= name,
 this.numLegs= numLegs
};

Animal.prototype.sayName = function () {
 console.log("Hi my name is " + this.name);
};

// create the sayName method for Animal





// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();


function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
  console.log("Hello this is a " + this.breed + " dog");
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();
