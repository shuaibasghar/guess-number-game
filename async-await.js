/**
 * what is async?
 * async is a keyword that is used to write before a function declaration to make it an asynchronous function.
 *  async function will always return a promise
 * either you can return a promise or if you don't return a promise and suppose you return a value
 * so that value will be wrapped in a promise and returned a promise
 * this function will always return a promise
 *
 *  */

/*
//  async function

// async function will always return a promise
async function getData() {
  //   return "Hello World"; // this value will be wrapped in a promise and returned a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 5000);
  });
}

const data = getData();
console.log(data); //Promise { 'Hello World' }

// how you will get the value from the promise
data.then((res) => console.log(res)); //Hello World
*/

/////////////////////////////////////////////////////////////
/////////////////////////// STEP-2 //////////////////////////
/**
 * await with async
 *
 * async and await combo is used to handle the promises
 * but before async and await how do we handle promises?
 * why do we need async await?
 *
 *
 */
// 1.
// but before async and await how do we handle promises?

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 5000);
});

// normal function
/*
function getData() {
  p.then((res) => console.log(res));
}
*/
// await is only can be used inside the async function

//async function hanlde promise
/*
async function hanldePromise() {
  const data = await p; //you will use the await keyword InFront of the Promise            // with using await promise will be resolved and you will be able to see data
  console.log(data);
}
*/
// hanldePromise();

// 2. why we need async await? async await vs normal promise handling
/*
//here promise is resolved after 5 seconds but we see console first
function getData() {
  p.then((res) => {
    console.log(res);
  });
  console.log("I am the next line"); //displayed first
}
// getData();

// it will work look like  in synchronous way
async function handlePromise() {
  console.log("I am the first line before await"); //this will be quickly displayed

  const data = await p;
  console.log("I am the next line"); //displayed after 5 seconds it was waiting for the promise to be resolved
  console.log(data);

  const data2 = await p;
  console.log("I am the next line"); //displayed after 5 seconds it was waiting for the promise to be resolved
  console.log(data2);
}



handlePromise();
*/
// 3. create two promises
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World 2");
  }, 5000);
});
async function handlePromise() {
  console.log("I am the first line before await");
  //  10s ----------but  it takes 10s to resolve the promise but it will hold p2 also to first complete the p1
  const data = await p1;
  console.log("I am the next line");
  console.log(data);

  // 5s
  const data2 = await p2;
  console.log("I am the next line");
  console.log(data2);
}

handlePromise();
*/
// now make p1 promise to 5s and p2 promise to 10s

//---------now it will take 5s to resolve the p1 and 10s to resolve the p2
//-------handlePromise(); IS Not in the callStack when it is waiting over here to resolve the p1 promise
//-------It looks like js-engine is waiting but it is not waiting.
//-----------------It is waiting for the promise to be resolved and then it will be added to the callStack

//////////////////////// behind the scenes ////////////////////////

//---when handlePromise is executed it will go line by line
//----go in sources and add a break point on first line of handlePromise and after  p1 console and p2 promise console
/**
 * first time call stack is empty
 * as soon as handlePromise(); is called it seems that there are two promises p1 and p2 must be resolved
 * and these promises are taken their own time in resolution
 * so there are two promises p1 and p2 they will be resolved at some point of time
 *
 * so when handlePromise is called it will come in callStack and it log the first   console.log("I am the first line before await");
 * after that it will go to next line and see there is an await keyword with p1 here
 * so javascript engine will not wait for this await promise to be resolved it will suspend the handlePromise function execution and comes outside fo callStack.
 * so handlePromise function is suspended on p1 promise and now it will wait for this p1 promise to be resolved
 * once this p1 promise resolved then it will move ahead
 * so this p1 will be resolved in 5 seconds
 * so after 5 seconds p1 promise will be resolved and then handlePromise function  will be added to the callStack and start execution where it left callStack .
 *
 * so same for p2 promise  and suspend again execution and come out callStack and wait for p2 promise to be resolved and after resolved promise it will come back in callStack and start execution where it left.
 *
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////////////////

/////////////%%%---------> RealWorld example of async await  <--------%%%////////////////////
const API_URL = "https://api.github.com/users/shuaibasghar";

async function handlePromise() {
  try {
    const data = await fetch(API_URL); //after this promise is resolved then it will move ahead
    //fetch promise is resolved it gives a response object which is a readable stream
    //so we have to convert this readable stream to json and again this json is a promise we need to use await again

    const res = await data.json();
    console.log("response", res);
    /*
  // simple method to get the data from the promise
  fetch().then(data=> data.json()).then(res=>console.log(res)).catch(err=>console.log(err)) )
  */
  } catch (error) {
    console.log(error);
  }
}
handlePromise();
// handlePromise().catch((err) => console.log(err));  ------you can use this also for error handling instead of trycatch

/////////////////////////////////////////////////////////////////////////////

// async is a keyword that is used before a function declaration
// and async functions are different thing
// await can only be used inside async functions
// async function will always return a promise
// can be used await to handle promises

//////////////////////////////////////////////////

// both of them are better
// it is a syntax play
// get rid of promise chaining
// async await is more readable
// async await is more understandable
// async await is more maintainable
// it is a new way
