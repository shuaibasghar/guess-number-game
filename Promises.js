// Promises are used to handle asynchronous operations in JavaScript.

// suppose we are building an ecommerce App

// const cart = ["laptop", "mouse", "keyboard", "headphone"];

//asynchronous operation
// createOrder(cart); // orderId

//asynchronous operation
// proceedToPayment(orderId); // paymentId

// these both functions are dependent on each other

// so how to manage dependency we need to use call back
/*
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});
*/
//there is issue of inversion of control
//because of blindly trusting on createOrder function it may run or not we dont know about what is written in createOrder function
// we are giving control to createOrder

// so solution is to use Promises

// Promises are used to handle asynchronous operations in JavaScript.

// const promise = createOrder(cart); //this will return a promise

//promise is nothing but empty object with some data value in it
// this data value will hold whatever the value is returned by the createOrder function

//createOrder is an async operation it will take some time to complete but we don't know how much time it will take
// but as soon as it is completed it will return an object with some undefined properties like below
// {data:undefined, status:pending, message:undefined} // this is the initial state of the promise object returned by the createOrder function
// but when the createOrder function is completed it will return an object with some data value in it like below
// {data:orderId, status:resolved, message:undefined} // this is the final state of the promise object returned by the createOrder function

//once we have this order id we can proceed to payment
// we will pass/attach a callback function
// this callback function will be called when the promise is resolved
//  {data:orderId, status:resolved, message:undefined}--------when data is present with some data then this call back will be called
/*
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
*/
// this is the best way to handle the async operations then using call back hell
// it is more readable and maintainable
//
/**
 createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

-- in this case we are blindly trusting on the createOrder function
-- but in promises case we attaching function to the promise object and this function will be called when the promise is resolved means data is present in the promise object

-- in call back hell we are passing
-- but here we are attaching the function to the promise object
-- so we are not blindly trusting on the createOrder function
-- and here we are sure that the function will be called when the promise is resolved 
-- and it will only called once 
 */

const GITHUB_API_URL = "https://api.github.com/users/SHUAIB";
//THIS fech function will return a promise object
const user = fetch(GITHUB_API_URL); // as soon as this line is executed the fetch function will start the async operation and it will return a promise object

// so make a breakpoint on const user = fetch(GITHUB_API_URL); and check the user object
// that will be a empty promise object
// {data:undefined, status:pending, message:undefined}

console.log(user); // this will print the promise object in the console result it will be a pending promise object but when you expand it you will see the state of the promise object is fulfilled this inconsistency is because of the browser console

// so when console.log(user) is executed the promise object is returned by the fetch function but the async operation is not completed yet that's why the promise object is in pending state
// fulfilled is the current state of the promise object and  the pending state was the initial state of the promise object

//attach a callback function

user.then(function (response) {
  //   console.log(response); //response will be readble stream
  // we need to convert the response to json
  console.log(response?.json());
});

// three states of the promise object
// 1. pending
// 2. resolved
// 3. rejected

// if the async operation is completed successfully then the promise object will be in resolved state
// if the async operation is failed then the promise object will be in rejected state
// so the promise object will be in pending state until the async operation is completed

// AND Promise object is immutable means once the promise object is in resolved state then it will not change its state
// like user.push("shuaib") // this will not work because the promise object is immutable

//--------------------Interview sections-------------------

// 1. What is a Promise?
// Ans: Promises are used to handle asynchronous operations in JavaScript.
// Promise is a placeholder for a value that we don't have yet or later will be filled with a value.
// Promise is a placeholder or container for a future value after promise resolved.

//mdn docs defination
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//--------Promise Chainning----------------
// we can chain the promises
// we can attach multiple then functions to the promise object
// this is called promise chaining
/**
 * CALLBACK HELL CreateOrder(cart, function (orderId) {
 * ProceedToPayment(orderId, function (paymentId) {
 * SendEmail(paymentId, function (emailId) {
 * console.log(emailId);}}});
 */
// Promise chaining
//

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); // we mostly forget to return the value from the then function
  })
  .then(function (paymentId) {
    return sendEmail(paymentId);
  })
  .then(function (emailId) {
    console.log(emailId);
  }); // this is the promise chaining we can attach multiple then functions to the promise object

///----------Mistake in the promise chaining----------------

// if we return a promise from the then function then the next then function will wait for the promise to be resolved
// what if we return a value from the then function // always reurn
// return sendEmail(paymentId);

// you can also use arrow function in the then function
// .then((paymentId) => sendEmail(paymentId));
// it is developer choice to use arrow function or normal function in the then function
