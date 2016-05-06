var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i< array.length; i++) {
  if (array[i]%3 === 0 && array[i] %5 === 0) {
   console.log("FizzBuzz");
  }
  else if (array[i]% 3 === 0){
    console.log("Fizz");
  }
  else if (array[i]%5 === 0){
    console.log("Buzz");
  }
  else
   console.log(array[i]);
};
