const cart = ["shoes", "pants", "kurta"];

//create promise
// const promise = createOrder(cart);

// console.log(promise);
//consumer part
// promise.then(function (orderId) { so .then .then this is called promise chaining
createOrder(cart)
  .then(function (orderId) {
    //must return from here because the next promise chain will accept that and handle accordingly
    console.log("Order Created", orderId);
    // proceedToPayment(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentinfo", paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// here we have promise chain means there are three steps .then and there is catch
// so the catch at the end will handle any error down here when generate from any chain or .then function
function validateCart(cart) {
  return true;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}
//return a promise Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is Empty");
      reject(err); //rejecting the promise
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId); //resolving the promise
      }, 5000);
    }
  });
  return pr;
}

// this is the way to create promise
//this is a promise constructor which has a callback function with a resolve and reject parameter
// these parameters are given by javascript to build promises
// resolve is a function that is called when the promise is resolved
// reject is a function that is called when the promise is rejected

// if you will call .then after catch it wil definitely be called no mater it is called after catch.
