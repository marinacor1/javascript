function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function speak() {
        console.log("Hello!");
    }


}
//With params
var user = new Person("Codecademy Student",false);
user.speak();


var james = {
    job: "programmer",
    married: false,
    speak: function(feelings) {
      console.log("Hello, I am feeling" + " " + feelings);
    }
};

james.speak("great");
james.speak("just okay");
