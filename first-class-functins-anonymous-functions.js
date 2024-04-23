
//function statement Also known as Function Declaration
function a(){
    console.log("a called");
}


//--------------difference is hoisting and function expression is not hoisted if you call the function before the function expression it will throw error TypeError: b is not a function
//function expression
var b=function(j){
    console.log("b called",j);

    return function(m){
        console.log("inner function",m);
    }   
}

console.log(b("lll")("inner function called"));
//Anonymous Function
/*
function(){
    console.log("Anonymous Function");
}
*/
/**
 * 
 * Anonymous Function is a function without a name 
 * it does not have its own identity 
 * these are used as a callback function
 * or used as an argument to another function
 * or used as an IIFE
 * when the functions are used as value like function expression
 * 
 */




//functions are first class citizens in javascript





//first class functions

//-----ability to use functions as values-----can be passed as arguments to other functions, can be returned by other functions, and can be assigned as a value to a variable---treated as values

//---first Class citizens ability to use functions as values
//---if someone talks about first class citizen means it is refering to first class function