



getName();//Hello, World!------this function is invoked that why it is showing console.log
console.log(x); //undefined----because it is just initialized but not assigned any value it will assign value when it will be executed

console.log(getName); // [Function: getName]----it is showing function because it is not invoked yet
//getName2(); //Uncaught ReferenceError: getName2 is not defined----it is showing error because it is not hoisted because it is arrow function

var x=7;

function getName(){
    console.log("Hello, World!");
}




//now pasted these code on top of declaration  
getName();
// console.log(x);

// in most programming language you can not access the variables or function before declaration but in javascript you can access the function and variable before declaration 
//because of hoisting

// if you remove the var x it will show error Uncaught ReferenceError: x is not defined

//let suppose if we have a variable and function with same name then function will be hoisted first and then variable will be hoisted


//Phase 1 is called creation phase and phase 2 is called execution phase
//in creation phase all the variable and function will be hoisted and in execution phase all the code will be executed line by line
//in creation phase all the variable will be initialized with undefined and function will be initialized with function definition
//in execution phase all the variable will be assigned with value and function will be invoked
//in creation phase all the variable and function will be hoisted to the top of the code



//let put a debugger in the first line of code and see the hoisting in action
// go to browser developer tool and go to source tab and click on the file and put a debugger on the first line of code and refresh the page
// you will see the hoisting in action in Scope section of developer tool
// you will see the getName function and x variable in the scope section
//in the scope section you will see the getName function and x variable in the global scope
//in the global scope you will see the getName function and x variable in the local scope where getName function is initialized with function definition and x variable is initialized with undefined
 



//now let's see the hoisting in action with arrow function

var getName2=()=>{
    console.log("Hello, World!");
}

//now when you use arrow function it will not hoisted because arrow function is not hoisted
//if you use arrow function it will show error Uncaught ReferenceError: Cannot access 'getName' before initialization
//because it behaves like a variable 
//if you use function keyword it will hoisted because function keyword is hoisted
//if now you see the Global space memory it will show getName as undefined because it is initialized with undefined because we are using arrow function it does not contain function keyword


// now let see with named function expression
// will behave same like arrow function
var getName3=function(){
    console.log("Hello, World!");
}





//-------------------------CALL STACK-------------------------

// now call functions and variables below the initialization of function and variable

// put a breakpoint on var x=7: and getName function 

//let see now in Call Stack-------------global execution context is created and it has put in the call stack
// you see the Anonymous function in the call stack because it is the global execution context

//reaching on  next breakpoint
// we are in the global execution context and we are in the getName function and it is put in the call stack untill it executes and it creates a brand new execution context
// now put a debugger breakpoint inside the function you will see the getName function in the call stack and it will be executed and then it will be removed from the call stack or popped off from the call stack
//now when you see the getName function is invoked it will be put in the call stack and it will be executed and then it will be removed from the call stack




// simple precise definition of hoisting is that all the variable and function will be hoisted 
/**
 
Hoisting in JavaScript is a process where variable and function declarations are moved to the top of their containing scope during the compile phase.
 Only declarations are hoisted, not initializations. 
 This means you can use variables and functions before they are declared in the code. 
 However, using a variable before it's initialized will return undefined. 
 Function declarations are fully hoisted, allowing them to be called before they are declared.
 */