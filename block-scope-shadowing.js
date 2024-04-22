

// {
//     var a=10;
//     console.log(a);
// }


//block is defined by curly braces
// block is also known as Compound statement
// block is also known as code block
// block is also known as statement group


// -------A block is used to combine multiple statements into one group.

//-------for example 

// if(true)-----------this will give error because it expects one statement to complete code

// if(true) true; //---------if you want to write multiple statements then you have to use block
//----so for multiple statement use block---which will wrap or group together mutiple statements ----so that we can use in a place where only one statement is expected by javascript like if (true) or while(true) or for loop etc.


// lets see hoisting inside block put var and let inside block and see the difference
//debugger inside block and see in browser in scope section you will see that b and c will be inside block scope and a will be in global scope 
//-------this is a separate space in memory where variables are hoisted
//------thats why let and const are in block scoped and var is in global scope

/*
{
        var a=10;
        let b=20;
        const c=10
    }
    a=100
    console.log(a);

 */  

//   ------- shadowing -------  // 
/* 
var a=100;
{
    var a=10;//this is shadowing the variable a outside block scope which is in global scope
    let b=20;
    const c=10
}
console.log(a);//----output will be 10
*/

/**
 * if you have a same named variable in block and outside block then the variable inside block will shadow the variable outside block
 * 
 * ----in case of let and const it will not shadow the variable outside block because let and const are block scoped outisde of block  the same let variable is defined it has its own memory space inside the Script ---they are not pointing the same memory space
 * 
 * ----in case of function scope shadowing behave same as we have discussed above
 * 
 * 
 */


//  * ---- illegal shadowing 

// this gives error because we are trying to shadow the variable a with let which is already defined with var
/*
let a=100;
{
  var a=10
}
 */
// to fix the issue wrap var in function scope becuase var has function scope now it will not interfere with the outside varibale which is declared with let with same name

let a=100;
function test(){
  var a=10
}



// block scope also follows lexical scope--------lexical means one inside another
//----it follows scope chain pattern
//---- put   a debugger inside nested block these both have different block scope paretn to child that makes sense like scope chaining 
const x=10;
{
    const x=100
{
    const x=1000
    // console.log(x);
}
console.log(x);

}



//-------- scope is same in arrow function as well 


