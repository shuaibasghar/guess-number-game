
/*

//empty file is called shortest program
// javascript still creates a global execution context and put it in the call stack.
// The global execution context is the default execution context in JavaScript.
// It is the first execution context created when the JavaScript engine runs the code.
// The global execution context is the outermost execution context.
// It is the default execution context in JavaScript.


this is the shortest program in javascript
there is empty file no code but it still creates empty memory environment

javascript engine creates something called window object in the browser


so if you go inside the console and type window you will see the window object in browser

big object with lots of properties and methods

it also creates this for us which points to global object window



---------In case of browser this gloabl object is window

--------- because js not only runs in browser

--------- wherever js run it must creates any global object

--------- there is always a global object in js

--------- this===window in case of browser in the global execution of context or global scope

and if we declare some variables and functions by defult they are attached to the gloabl object window


like

var a=10;

function b(){   
    var x=100;
}

now go to browser console and type window you will see the a and b attached to the window object

so if you type window.a you will see 10
and if you type window.b you will see the function definition


x will not be there because it is the local scope of function



*/

