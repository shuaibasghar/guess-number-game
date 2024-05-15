// currying in javascript

let multiply = function (x, y) {
  console.log(x * y);
};

// let multiplyBytwo = multiply.bind(this, 2);
let multiplyBythree = multiply.bind(this, 3);

/***
// behind the scenes multiply.bind is working like below
//generating a copy of multiply function
let multiplyByTwo=function(y){
    let x=2
    console.log(x*y)
} 


 */

// so mmultiply.bind create a new copy of multiply function so we need to invoke it

// multiplyBytwo(5); // output is 10 x*y ----> 2*5
// multiplyBythree(5);

// so this is what currying

// now try add ing one more arguments
let multiplyBytwo = multiply.bind(this, 2, 3);
multiplyBytwo(5); //now output will be 6 because now it will ignore 5

// so currying by help of closures
let add = function (x) {
  return function (y) {
    console.log(x, " ", y);
    console.log(x + y);
  };
};

let addbytwo = add(2);
addbytwo(3);
