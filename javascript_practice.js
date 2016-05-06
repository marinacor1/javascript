var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "2312321233",
        address: ["One Microsoft Lane", "Redmond", "WA", "98954"]
        },
        steve: {
         firstName: "Steve",
         lastName: "Jobs",
         number: "920384032",
         address: ["lsdjfs", "lskjf", "lsdkj", "sa", "sldfj"]
        }
    };

var list = function(friends){
  for(var key in object) {
   console.log("Hi");
  }
};

var search = function (name){
    for (var key in friends) {
        if (friends[key].firstName === name) {
  console.log(friends[key]);
  return friends[key];
    }
}
};
