
var x=1;

a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}

/*

step------1
 so let see we have same varaible names how program behaves?
output is  
10,100,1

------now see behind the scene how it works

-----phase------1
1. all the variable and function will be hoisted
2. in global memory x=undefined
3. a=reference to function a shows functions as it is
4. b=reference to function b shows functions as it is

--------now it is pushed on the bottom of call stack i mean global context pushed is on the bottom of call stack
--------now it is in execution phase
--------executing of variable and function line by line
--------now it is executing the variable x=1 undefined will be replaced

--------when it reaches to a() it will create a new execution context and push it on the top of call stack
--------now it is in memory allocation phase 
--------in local memory x=undefined because it is hoisted
--------in local memory x=10--------now it is in execution phase----local means only limited to that function only can not access it outside of the function
--------when it reaches to console.log(x) it will print the value of x=10 javascript search this value of x inside this local memory

-------- when it reaches to b() it will create a new execution context and push it on the top of call stack
--------now it is in memory allocation phase
--------in local memory x=undefined because it is hoisted
--------in local memory x=100--------now it is in execution phase

--------when it reaches to console.log(x) it will print the value of x=1 javascript search this value of x inside this global memory before  this it was undefined now it is 1 now the golob scope is the local scope for the variable x

-------- after console it reaches to 
 the function defined   it see that there is no code to execute so it will pop out from the call stack
 
 

*/

