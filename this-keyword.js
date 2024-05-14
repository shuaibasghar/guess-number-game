// "use strict";
// --------- THIS IN GLOBAL SPACE ---------

// console.log(this); // output is window object
// this  keyword in global space is to global object
// in browser it is window object
// in node it is global object
// in strict mode it is undefined
// in global space this is global object

// in case of browsers this is window object

// this keyword behaviour is different in strict mode and non-strict mode
// functional space of this

//we found this in global space is window object and same also in function space
// function space is also global space but it is inside function
// function x() {
//   console.log(this); // window object----------but in strict mode it is undefined
// }
// x(); //undefined-----in strict mode--------window object in non strict mode
// window.x(); // window object -in strict mode---------window object in non strict mode both are same

// this in non strict mode - (this substitution)

/***
 * according to this substitution rule
 * suppose the value of this keyword is undefined or null then this will be replaced with global object
 * it also depends on how the function is called
 * if you call function like x() then this will be global object
 * but if you call function like window.x() then the value of this will be window object
 */

// ----------------- this in side object's method -----------------

//differecen betweeen method and function
// method is a function which is inside object
// function is a standalone function
//but if the function is inside object then it is called method
const obj = {
  a: 10,
  x: function () {
    console.log("value of this keyword", this, this.a); // obj { a: 10, x: [Function: x] }
  },
};
obj.x(); // obj

// call apply bind
// this will be used when we want to share method

//suppose we want to share the method of obj x with obj2------this can be done by call apply bind
const obj2 = {
  a: 20,
};

// an other example

const student = {
  name: "john",
  printName: function () {
    console.log(this.name);
  },
};

student.printName(); // john
const student2 = {
  name: "depeeka",
};

//share the printName method of student with student2
student.printName.call(student2); // deepika-------here student2 becomes this keyword which holds student2 object
// basically here we are trying to override the value of this keyword

// apply method is same as call method but the only difference is that apply method takes the arguments in array
// write example of apply method
student.printName.apply(student2); // deepika

// bind method is used to create a new function with the value of this keyword

const printName = student.printName.bind(student2);
printName(); // deepika

// arrow function and this keyword

// arrow function does not have its own this keyword
// they have their lexical environment this keyword which is the value of this keyword of the parent function

const obj3 = {
  a: 30,
  x: () => {
    console.log("value of this", this); //here it will not show the object it will show the window object because it lexical context is global space
  },
};

// lexical context is the context in which the function is written here it is in global space
// so the value of this keyword will be global object

// obj3.x(); // window object

const obj4 = {
  a: 30,
  x: function () {
    const y = () => {
      console.log("value of this", this); //here it will  show the object because it is now enclose inside a function which is obj4 object method and this x function is it lexical context which contains object
    };
    y();
  },
};

obj4.x(); // obj4 object

// this keyword behaves in DOM
// SEE IN INDEX.HTML FILE

// this inside class, constructors  it behaves differently
