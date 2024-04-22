// --------------------------------------------------------------------------------


// step----1-code 
// function a(){
// console.log(b)
// }

// var b=10;
// a()

// step---1---explaination
/**
 when function execution context created it will have a reference to the outer environment for finding the variables which are not in the current function scope or local memory.
 */



//  step----2-code
 function a(){
    var b=10;
   
    c()
    function c(){
        console.log(b)  
}}
    
    // var b=10;
    a()
    
    // step---2---explaination
    /**
     * still able to access 
     still able to access var b because of the lexical environment of the function c is created in the function a and it has a reference to the outer environment of the function a.
     */


     // =-----------------lexical enviroment

     /**
      * whenever a function is created it will have a reference to the outer environment for finding the variables which are not in the current function scope or local memory.
      * a nex execution context is created when a function is called.
      * a new lexical environment is also created when a function is called.
      * the lexical environment of the function is created in the function where it is defined.
      * 
      * 
      * lexical enviroment in the local memory of the function along with the lexical environment of the parent function.
      * 
      * 
      * lexical is a term that means in hierarchy or order.
      * c function  lexicall sitting in the a function.
      * where that specific code is written. like c is inside a
      * 
      * 
      * when ever execution context is created it will have a reference to the outer environment for finding the variables which are not in the current function scope or local memory.
      * 
      * 
      * when it reaches to global lexical environment if it does not find any varaible you need then it will throw an error that the variable is not defined.
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * 
      * -----------------scope chain----------------
      * 
      * moving from the current execution context to the outer environment to find the variables.
      * 
      * step by step coming to the parent lexical environement to find the variables this is making a chain that chain is called scope chain.
      * 
      */

// -----------------see broswer console for lexical environment-----------------
     /**
      * 
      * now lets put debugger at console.log(b) and see the lexical environment in the browser console.
      * and also remove var b from the global scope and add it in a function.
      * now see the lexical environment of a in scope section of console
      * so it will show lexical environment of a function is local memory of a along with lexical environment of parent .
      * 
      * 
      * 
      * let see -----lexical environment of c function
      * 
      * c is enclosed inside a function this is what closure is  this is the lexical environment of a-func in which c-func has access.
      */