/**
---in javascript everything happens inside of execution context
--- i.e:> execution context is like a big box and whole javascript is inside of this context

 this box contains two components
1- Memory Component or it is also called Variable Environment
 --> all of our variable lies here  in the form of key value pairs
 --> a:10;
2- Code Component--this is also called Thread of execution
--> this is the place where code executed one line at a time
--> in thread whole code is executed one line of code at a time



-->--- javascript is a synchronous single - threaded language

---> Single-threaded means that javascript will run only single command at a time
---> Synchronous single threaded means --that javascript will run only single command at a time and in a specific order  that means it can only go to the next line once the current line has been finished executing.
*/

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n) -----ans;

var square4 = square(4);

/**
 * Phase---1---memory allocation
 * so when it encounters line 1 var n --it allocates memory to variable n it will reserve memory for n: and it stores a special value which is undefined
 * on second line it allocates memory to square which is the name of function  square and it stores whole code of the function
 *  same for square2---this is a variable it will store like square2:undefined
 * and also same for square 4 ---this is a variable it will store like square4:undefined
 * ----undefined is like a place holder and its a special keyword in javascript
 *
 * Phase---2---code execution phase
 * now javascript once again runs this whole program line by line and it executes hte code now , so this is the point when all these functions and every calculations in the program is done.
 * as soon as the first line executes the undefined value of n will be replaced with actual value 2
 *
 * when it reaches to the function square there is nothing to do because the function is not yet invoked/called/
 *
 * it then move to the square2 which have a square2 named function assigned which is invoked
 * functions are the heart of javascript they behave very different in javascript then any other language.
 * functions over here are like a mini program
 *
 * so when ever a function is invoked an altogether new execution context is created
 *
 * must remember that the whole thing that we were running this whole program was inside the global execution context
 *
 * ok so when we invoke a function a brand new execution context is created
 *
 * this execution context again has two components memory component and code component
 * there will be again two phases memory creation phase and code execution phase
 *
 * phase -------1 memory allocation
 * so now num is parameter but it is also a variable num and ans
 * when reaches to return it will tell the function that you are done with you work now just return the whole control back to the execution context, where the function was invoked
 * it is returning the value of ans which will be assigned to square2 undefined will be replaced with ans
 *
 * one more thing that happens when the whole function is executed is that this whole execution context for that instance of that function will be deleted.
 * means that this whole execution context will be completely deleted.
 * means after returning the value there will be no execution context.
 *
 * and now will go to the square4 it is also a function assigned same here will be a brand new execution context will be created.
 *
 *
 *
 *
 * so the whole process is very tough to mange js engine creating the execution context again and if it is callback hell so there will be many nested execution context
 * it handles everything to manage this execution context creation, deletion and the control it  manages  a stack so this is known as the call stack
 *
 *
 *------------Call Stack---------
 *
 * Call Stack----> Inside of stack in bottom of the stack we have our global execution context
 * that means when ever any  JS program is run, this call stack is populated with this Global Execution Context.
 * means the whole global execution context is pushed inside the CallStack
 *
 * And when a new function is invoked or a new execution context is created as of above square2 and square4 functions so this execution context is pushed inside the stack
 * so when the execution of the context is done then that execution context will pop out and control goes back to the global execution context
 *
 *
 *
 * Call Stack maintains the order of execution of execution contexts
 *
 *
 * Call Stack is also know or called by other names like
 * Execution context stack
 * Program Stack
 * Control Stack
 * Runtime Stack
 * Machine Stack
 */
