//Prototype and Prototypal inheritence
//Inheritance is a way to create a new object from an existing object. In JavaScript, inheritance is done through the prototype mechanism.
//Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

let arr = ["shuaib", "khan"];

let obj = {
  name: "shuaib",
  city: "bangalore",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

// obj.name //shuaib

// 1. how we are able to get obj.name---shuaib how we are able to access it this is because of Prototype
// -- so whenever you create a javascript object javascript-engine automatically without letting you know  attaching your object with some hidden properties and function
// -- these hidden properties and function are called prototype
// -- even a function can also have hidden properties and over all function is also an object
// -- so every object has a prototype and every function has a prototype

// we can see the prototype of object by using __proto__ property
// like arr.__proto__ or obj.__proto__

// prototype chain
arr.__proto__.__proto__; // null

// obj.__proto__.__proto__ //null

//everything in javascript is being inherited from Object.prototype
// so Object.prototype is the root of all the prototype chain

let obj2 = {
  name: "shuaib",
};

// obj2.__proto__ //Object.prototype

obj2.__proto__ = obj; //now obj2 is inheriting all the properties and methods of obj

//
console.log(obj2); // {name: "shuaib"}
console.log(obj2.city); //bangalore it is going to prototype chain and finding the city property

//Prototypal inheritence

// obj2 is inheriting from the obj2.proto which is pointing to obj1

Function.prototype.mybind = function () {
  console.log("sh");
};

// now this mybind function is available to all the functions in javascript
function abc() {}
