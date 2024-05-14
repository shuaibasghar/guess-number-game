// Promise apis
// 1.Promise.all()

// suppose if we have to make parallel api calls and get the results

// suppose there are 10 user ids and you want to make a parallel api call to get userinfo of all the users

// it is used to handle multiple promises to gether

// it takes an array of promises and returns a single promise
// array or it is an iterable object

// Promise.all([p1, p2, p3, p4]).then((res) => console.log(res));
/*
// suppose p1 takes 3s
// p2 takes 1s
// p3 takes 2s
// all the api calls were sucess and no one fails

// output will be an array of all the results
// [res1, res2, res3, res4] ------with value of all the results
// after 3s it will give results  because it is a parallel call it will wait for all of them to be finished and it will collect the result

--------------- what if one of promise get rejected ------------

// suppose p1 takes 3s
// p2 takes 1s -------------and it get rejected

// so as soon as any of the promise get rejected it will through all promise.all() will be failure
// it will not wait for other promises to be finished

// it will give the error of the promise which get rejected


// immediately  as soon as error happened it will give the error



//--------- what will happen to p1 and p3 now? ------------
// those calls were made
// those calls will not cancelled


// ------now suppose p1 and p2 were success
// but i want to get the results of p1 and p2 only which were success for this scenario we use Promise.allSettled()






2. Promise.allSettled()
Promise.allSettled([p1, p2, p3, p4]).then((res) => console.log(res));

* if all the promises were settled then it will give the results of all the promises

* but what if one of the promise get rejected like p2 get rejected
* if p2 is rejected but still it will wait for all the promises to settled weather they are success or failure no matter
* it will give the results of all the promises
* all of these things are happening in parallel
*  the result res will be an array of objects
*  each object will have the status of the promise and the value of the promise
*  status will be either fulfilled or rejected
*  value will be the value of the promise

use case: 
* if you want to get the results of all the promises no matter they are success or failure
* you want to get the results of all the promises
* you want to get the status of all the promises
* you want to get the value of all the promises





3. Promise.race()

Promise.race([p1, p2, p3, p4]).then((res) => console.log(res));

* it is used to handle multiple promises to gether
* but it will race and the promise who will be settled first will be the result

* as soon as first promise is resolved it will give the result fo that promise


* what  is the first promise is rejected failed???????????????
* if the first promise is rejected then it will give the error of the first promise
* ok error will be thrown of the first promise which get rejected

does not care about any of the promise is resolved or rejected


use case:
* if you want to get the result of the first promise which get resolved


///////////////////////////////////////////////////////////

4. Promise.any()

* it is very much similar to race
* here you will wait for the first success promise but in race you will wait for the first settled promise


* it is a success seekig race 
* but what if all the promises get rejected
* returned result will be an AggregateError object
* and this object will have all the errors of the promises in array

*/

// 1. Promise.all();
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 success");
    // reject("p2 failed"); // IT will fail after 1 s
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 success");
    reject("p3 failed"); // IT will fail after 2 s
  }, 2000);
});

// Promise.all([p1, p2, p3]).then((res) => console.log(res)); // for rejected case we are getting uncaught error because we are not handling the error we should use catch block to handle the error to see the error messages
Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) =>
    //   console.log(err) // // it will give the error of the promise which get rejected but does not looks like error so use console.err to make it feel of error

    console.error(err)
  );

// uncaught error means you are not aware of error always use catch the error
*/

// 2. Promise.allSettled();
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p1 success");
    reject("p3 failed"); // IT will fail after 3 s
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 success");
    reject("p2 failed"); // IT will fail after 1 s
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 success");
    reject("p3 failed"); // IT will fail after 2 s
  }, 2000);
});

/*
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) =>

    console.error(err)
  );
*/
//output
/*
  [
    {
        "status": "fulfilled",
        "value": "p1 success"
    },
    {
        "status": "fulfilled",
        "value": "p2 success"
    },
    {
        "status": "rejected",
        "reason": "p3 failed"
    }
]
*/
// this is the safest option to get the results of all the promises no matter they are success or failure
// it will return array of objects

// 3. Promise.race();
// gives only first one promise which is settled no matter it is success or failure

/*
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/
// result will be first settled promise no matter it is success or failure

// lingo ---------is used in promise world
// settled means either success or failure

// promise setlled means either success or failure results you have got

// once promise is settled --- means it can either be success or failure  either it can be fulfilled or rejected or resolve rejected

//////////////////////////////////////////////

// 4. Promise.any();

//will wait for first settled resolved promise and give the result of that promise
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // for errors array use errors property err.errors because it creates error object
    /*
    [
        "p3 failed",
        "p2 failed",
        "p3 failed"
    ]
    */
  });

// if all fails it will show aggregate error  which will be an array of all the errors
// it will give the error of all the promises

// AggregateError: All promises were rejected
