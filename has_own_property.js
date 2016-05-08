var myObj = {
    name: "Herman",
    type: "creature"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
  console.log(suitcase.shorts);
} else {
    suitcase.shorts = "khaki";
    console.log(suitcase.shorts);
  }
