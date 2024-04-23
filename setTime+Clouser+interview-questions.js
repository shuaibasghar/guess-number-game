/*
function x(){
    var i =1;
    setTimeout(function(){ // this will be executed after 1 sec
      console.log(i)
    },1000)
    console.log('Hello')// this will be printed immediately it will not wait for setTimeout
}
x();
*/

/**
 * setTimeout functions forms a closure and it will remember the reference of i wherever the function will go
 * 
 * and it take the callback function and attaches a timer to it  
 * once a timer expire means after 1 sec it will take that callback function and put it in the call stack
 * 
 * 
 */





/////////////////////////////////////////////////////////////////


// print  1,2,3,4,5  after each second
/*
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log('Hello')
}
// x();
*/
/**
 * the above code will print 6,6,6,6,6 after each seconds but expected was 1,2,3,4,5
 * 
 * this is because of the closure property of the setTimeout function
 * 
 * when call back function is executed it remembers the reference of i 
 * 
 * so when the loop is completed the value of i is 6 because 
 * 
 * 
 * 1. callback function send to separate place and it will remember the reference of i this function will be placed 5 times pointing to the same reference of i because environment is same for all the callback functions 
 * 2 . javascript does not wait for the setTimeout to complete it will just send the callback function to the web api and will continue with the next line of code
 * 3. so when the setTimeout time expire it was too late because the loop was constantly running and till that the value of i became 6
 * 4. so when the time expire 1 seconds it will print 6 because now i becomes 6 because of closure property it is remembering the reference of i because of loop constantly running and updating the value of i
 * 
 * 
 * 
*/

/*
function x2(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log('Hello')
}
x2();
*/
// to fix the above issue we can use let instead of var
//because let has block scope and var has function scope
// so when the let is used it will create a new scope for each iteration
// so the value of i will be different for each iteration








/**
 * each time the setTimeout run it has new copy of i because of let
 * 
 * each time the loop runs and setTimeout called this function makes a closure and remember the reference of new variable of i
 * 
 * so when i =1 it setTimeout function will form a closure and remember the reference of i =1
 * so when i =2 it setTimeout function will form a closure and remember the reference of i =2
 * so when i =3 it setTimeout function will form a closure and remember the reference of i =3
 * so when i =4 it setTimeout function will form a closure and remember the reference of i =4
 * so when i =5 it setTimeout function will form a closure and remember the reference of i =5
 *  after time expires it will print the value of i on each function has a new copy of i
 * 
 */



////////////////////////////////////////////////////////////////////////

//----------how to fix it with var itself without using let


function x3(){
    for(var i=1;i<=5;i++){
        (function(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        })(i)
    }
    console.log('Hello')
}
x3()
/**
 * so by using the iife we can fix the above issue because iife will create a new scope for each iteration
 * means every time a new copy will be created for i in memory with new value
 */







//Data hiding and encapsulation using closures

//no boyd else can access to manipulate the counter value
function counter(){
    var counter=0;

   return function incrementCounter(){
        counter++;
        console.log(counter)
    }

}

/*
var counter1 = counter()();
*/
// or
var counter1 = counter();
counter1()
counter1()
counter1()


// if we create another counter it will have its own copy of counter this is also called as data hiding and encapsulation it happens because of closures
var counter2 = counter();
counter2()


//

function count(){
    var counter = 0;
    return {
        incrementCounter:function(){
            counter++;
            console.log(counter)
        },
        decrementCounter:function(){
            counter--;
            console.log(counter)
        }
    }
}

// var counter=counter()


//how to do with contructor function
function Counterr(){
    var counter = 0;
    this.incrementCounter = function(){
        counter++;
        console.log(counter)
    }
    this.decrementCounter = function(){
        counter--;
        console.log(counter)
    }
}

var counter3 = new Counterr();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.decrementCounter();


//disadvantages of closures
// there would be over consumption of memory because every time form a closure
// because those variables are not garabage collected because they are still in memory
// so it will consume the memory
// so we need to be careful while using closures
// so we need to use closures only when it is necessary

// Garabage Collector?
// it is a part of javascript engine which is responsible to remove the unused variables from memory
// it is a part of memory management
// it is a part of V8 engine
// it is a part of browser
// it is a part of node js
// it is a part of javascript engine





// relation between closures and garbage collector
// when a function is executed it forms a closure and it will remember the reference of the variables


function a(){
    var x=0, z=0; // this z becomes hte smartly grabage collected value because it is not used by any function if you will console it it will give error this will be removed smartly by modern browsers
    return function b(){
        console.log(a)
    }
}
// a()

//after executing a()-function a is executed and it will form a closure and it will remember the reference of x  now the x will be garbage collected
// because it is not used by any function

var y=a(); // this y is copy of b function becuase b function is returned by a function
y();

// some modern browsers are smart enough to remove the unused variables from memory
// smartly garbage collector