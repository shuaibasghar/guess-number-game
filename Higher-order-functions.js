// one of the most important part of javascript is functional programming. It is a style of programming where we use functions as values.
// which is impossible without higher order functions.

//let see little part of functional programming.

// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.

// In simple words, A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

function x() {
  console.log("Hello world");
}

function y(x) {
  x();
}
//function y is a higher order function because it takes another function as an argument.
// function x is a callback function because it is passed as an argument to another function.

// ///////////////////////////////////////////////////////////////////
//calculate the area of these circles
// formula of area of circle is PI*r*r
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

/////////////////////////////////////////////////////////////////////

// calculate the circumference of circles with these radius
// formula of circumference of circle is 2*PI*r

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calculateCircumference(radius));

/////////////////////////////////////////////////////////////////////

// also calculate diameter of these circles

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));

/////////////////////////////////////////////////////////////////////
/***
 * Above code is fine but we are repeating the same code again and again.
 *
 * dry principle - don't repeat yourself.
 *
 * all these function has 90% same code. we are just changing the formula or logic.
 *
 *
 *
 */

// let optimize the code
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// ///////////////////////////////////////////////////////////////////

// similar to map function in javascript
// map function is a higher order function because it takes another function as an argument.
radius.map(area); // this is similar to calculate(radius, area)
// map is iterating over the array and applying the function to each element of the array.

// if we write same like map function in javascript then it will be like below
Array.prototype.calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
// now we can use this calculate function on any array
// because whenever we write Array.prototype it will be available to all the arrays.

console.log(radius.calculate(radius, area)); //same as map but it is still taking two arguments radius and area

// ///////////////////////////////////////////////////////////////////

// now we can write the calculate function like below
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    // this keyword points here on which the array is called like radius.calculate(area) so this will point to radius
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calculate(area)); // now we are calling calculate function on radius array so this will point to radius array
// now this is exact same like map function in javascript
