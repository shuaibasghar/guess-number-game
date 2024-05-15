// Polyfill for bind method old browsers does not support bind method

// Pollyfill is a piece of code that is used to provide modern functionality on older browsers that do not natively support it.
//

let name = {
  firstName: "Shuaib",
  lastName: "Asghar",
};

let printName = function (hometown, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + country
  );
};

let printMyName = printName.bind(name, "Karachi", "Pakistan");
printMyName();

// create own bind method which behaves exactly like builtin bind method

//every function should have access to my bind method

Function.prototype.mybind = function (...args) {
  // this-->points to printname method
  let obj = this;
  console.log("obj", obj);
  console.log("args", args);

  //handling the other arguments
  params = args.slice(1); //remove first argument and return the  other arguments
  return function (...args2) {
    // console.log("mybind method");
    // printName();
    // obj.call(args[0]);
    obj.apply(args[0], [...params, ...args2]); //es6 spread operator
  };
};

// let printMyName2 = printName.mybind(name, "Karachi", "Pakistan");
let printMyName2 = printName.mybind(name, "Karachi");

printMyName2("Pakistan");

/**
 * add mybind in Prototype then it will be accessed to every function
 * so when we write printName.bind(name, "Karachi", "Pakistan"); then printMYName2 gets a function which can be later invoked by calling printMyName2(); and it will show the output
 * so when we call printName.bind() it returns a function
 * another thing if we call printMyName2() then printName() method should be executed
 * so in return function printName() should be invoked over here
 * we can get this printName function in side my bind by this keyword because it points to printName
 *  store it in obj variable let obj=this;
 * and in return function we can call obj() method by referencing to name object that means when we call we have accessed to the name object
 * for this we can extract it from arguments mybind(...args) this args will be the array of the arguments passed
 * so here args[0] will be the name object
 * so in retrun function we can directly write obj.call(args[0]);
 * but untill now my bind show undefined for other params like Karachi and Pakistan
 * so we will extact the other arguments by using slice method
 * we will pass  the params to obj.call(args[0],params); but it will show error because call method does not accept array
 * so we should remove call method with apply method because it accepts array
 * so obj.apply(args[0],params);
 * and there is one problem now if we call printMyName2('developer')
 * this developer argument can be receveid in our retruned function(...args2) and pass this arg2 to obj.apply(args[0],params.concat(args2));
 *
 *
 *
 */
