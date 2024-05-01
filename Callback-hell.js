console.log("hello ---one");

console.log("hello ---two");

// console.log("hello ---three");

//for printing this line console.log("hello ---three") after 5-seconds we can use call back functions
//we can use setTimeout functio

// using callback to do asynchronous thing in javascript

setTimeout(function () {
  console.log("hello --------three");
});

// /////////////////////////////////////////////////////////////////////

// suppose we are building an ecommerce App
const cart = [
  { name: "laptop", price: 1000 },
  { name: "mouse", price: 100 },
];

// api.createOrder()

// api.proceedToPayment()

// api.showOrderSummay()
// api.updateWallet()
// so here proceedToPayment is dependent on createOrder only payment can be proceed after creating Order

// so how to manage dependency we need to use call back

/*
api.createOrder(cart, function(){
    api.proceedToPayment(
        function(){
            api.showOrderSummary(
                function(){
                    api.updateWallet()
                
                }
            )
        }
    )
})

// this becomes an async operation and we can use callback to manage the dependency
createORder will call back the api.proceedToPayment() after creating the order

*/

// so the above nested call back functions are called as callback hell
// our code started to grow horizontally instead of growing vertically
// this type of code structure is very unreadable and unmaintainable

// so it is the structure of PYRAMID OF DOOM in Programming

/* -------     Inversion of control     -----------    */
/**
 * Inversion of control is an other problem which we get by using call back hell
 *
 * Inversion of control means you loose the control of your code when we are using call back hell
 * 
 * 
 * 
 *
 
api.createOrder(cart, function(){
    api.proceedToPayment()
})

// so we are blindly trusting that createOrder will create order some time  and  call back the proceedToPayment
// is not is risky ------ so it is very very risky
// because this is an important piece of our code isn't it proceedToPayment so we gave the control of our program to createOrder API
// NOW It is the responsibility of createOrder to call back the proceedToPayment
// now we dont know api may must have in some other service  
// we are blindly trusting the createOrder api because we dont know what code is written inside the createOrder api we are just blindly trusting
// what if our call back function is called back twice or thrice
// payment happen twice because we are not in control of our code
// so we are loosing the control of our code

 */

// so how this inversion of control can be solved
// we can solve this by using promises
// promises are the solution to the callback hell

// issues with callback hell
// 1. pyramid of doom
// 2. inversion of control
// 3. error handling is difficult
// 4. code is not readable
// 5. code is not maintainable
// 6. code is not reusable
// 7. code is not testable
// 8. code is not scalable
