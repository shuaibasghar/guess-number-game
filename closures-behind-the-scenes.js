//step--------1
/*
function x(){
    var a=7;
    function y(){
        console.log(a); //// ----------put a debugger here
    }
y();
}
x();
*/

// step--1----explanation

//closures means a function ran the function executed it is never going to execute again but it is going to remember that there are references to those variables so the child scope always has access to the parent scope


//-----closure means a function bind together with its lexical environment
//----function along with its lexical scope forms a closure----
/**
 * 
 * --- in above example
 * --- inside y it forms a closure with its lexical scope which is x
 */


// ----------step----2 -----code
/*
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    return y;
}
z=x();
console.log(z)//----------output ƒ y(){}
z()//---------output 7 this is because of closure

*/
// ----------step----2 -----explanation
/**
 * whenever the functions returned from an other functions they still maintains the lexical scope means they still have access to the variables of the parent scope
 */






// closures are the functions that are returned from another function and still maintains the lexical scope of the parent function

//functions along with its lexical scope bundled together forms a closure




// -------step--3----code

/*
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    a=100; //--------now value of a will be 100 
    return y;
}
z=x();
z()
*/
/**
 * value of a becomes 100 before returning the function y 
 * ok so when we return y from here we get f y(){console.log(a)}; it comes along with its lexical scope which is x so a does not refer to the value it is returning the a's reference not value so now when call z() it reference to a which is 100
 */

//------step----4

function z(){
    var b=900;
    function x(){
        var a=7
        function y(){
            console.log(a,b)
        }
        a=100; //--------now value of a will be 100 
        y();
    }
    x();
}
z()
// functions are bundled together means they are returned from another function and still maintains the lexical scope of the parent function means they have access to the variables of the parent function that is the closures
// a and b are retained not garbage collector


/**
 * use of closures
 * -- module design pattern
 * -- currying
 * -- function factories
 * -- memoization
 * -- maintaining state in async world
 * -- setTimeouts
 * -- Iterators
 * -- Recursion
 * 
 *  
 */