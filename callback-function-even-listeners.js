//what is callback functions?
//A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
//it gives us access to the whole asynchronous world in a synchronous single threaded language like javascript.
//callback functions are used in many ways in javascript.


// Javascript is a synchronous single threaded language. It means that it can only execute one statement at a time.

// But what if we want to execute a function after another function has finished executing? This is where callback functions come into play.


setTimeout(function(){
    console.log("timer");
}, 3000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

//---setTimeout function behaves asynchronously in javascript. It means that it will not block the execution of the code.


/**
 * see output in developer console in browser
 * 
 * put a debugger in console.log("timer") and console.log("x") and console.log("y") and see the output.
 * 
 * so javascript has  just one call stack and it is synchronous and single threaded. And you can call it also main thread.
 * 
 * every thing what ever executing inside your page just passing through this main thread /call stack only
 * 
 * now functions run in order x y and timer everything runs through the main thread.
 * 
 * so if any operation blocks this call stack that is known as blocking the main thread.
 * 
 * suppose if x function has some heavy operations which takes 30 to 40-sec then  javascript has only one call stack 
 * and it is synchronous and single threaded then it won't be able to execute other functions 
 * it will block the whole code main thread that's why never block the main thread.
 * 
 * 
 * we should alway use async operations to avoid blocking the main thread.
 * 
 * if javascript has not first class functions and did not have call back functions 
 * then we can able to pass function as an argument to another function so we could not able to perform async operations.
 * 
 * using this setTimeout webapis and call back functions we can able to perform async operations.
 * 
 * 
 * 
 * 
 */

///////////////////////////////////////////////////////////////////

//-----------------Even Listeners-------------------
/*
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("button clicked");
})

*/
/**
 * this is an example of event listener. It is a callback function. It is waiting for the click event to happen and then it will execute the function.
 * this is again a callback function which will be stored somewhere in the memory 
 * this call back function will automatically comes in main thread when the click event happens.
 * 
 */
///////////////////////////////////////////////////////////////////////

// data hiding and encapsulation

function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked",++count);
    })
}

attachEventListener()
/***
 * now this is a good example of data hiding and encapsulation.
 * 
 * put a debugger in console.log("button clicked",++count); and see the call back function xyz forms closure with count variable.
 * 
 * now got to elements tab in developer console select button element and see EventListeners tab and see the click event listener IT HAS PROPERTY handler 
 * which contains the function xyz and it has closure with count variable and also see scopes.
 * 
 */

///////////////////////////////////////////////////////////////////

// ------------------------------ Garbage Collection ----------------------------

/**
 * Event listeners too heavy means they take up a lot of memory.
 * 
 * if you have a lot of event listeners in your application then it will take up a lot of memory.
 * 
 * so if you have a lot of event listeners then you should remove the event listeners after use.
 * 
 * so when we remove event listeners all those variables which are in closure with event listeners will be garbage collected.
 */

//write code how to remove event listeners
