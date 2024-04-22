
/**
 * -------temporal dead zone?
 * -------Are let & const hoisted?
 * -------SyntaxError Vs ReferenceError vs TypeError?
 * 
 */




/**
 * let & const are hoisted but hoisted very differently then the var declaration.
 * 
 * in interview if you say let and const are not hoisted then it is wrong. In-fact you can say that there are in the temporal dead zone for time being.
 * 
 */


console.log(b)
// console.log(a)

let a=10;
var b=100;

/**
 * -----------comparison between let and var in case of hoisting
 * before executing any single line of code the javascript engine will create a memory space for the variables and functions.
 * 
 * console.log(b) // undefined ------------we will not get any error because of hoisting.
 * 
 * but if we console.log to let a=10 we will get error --------
 * -----Uncaught ReferenceError: Cannot access 'a' before initialization----
 * ---you can use the variable after assigning value to a before initialization it will throw an error. ---
 * ---but that does not mean that variable-a is not hoisted.
 * 
 * 
 * 
 * ------let see in browser console put a debugger see that a is hoisted means it is created in the memory space with value undefined.
 * 
 * ------you see a and b both are in memory space with value undefined.
 * ------in case of var it is in the global memory space.
 * ------var-b attached to the window object.
 * ------in case of let it is in the block memory space -------we see a is inside a Script in Scope section.
 * ------so it tells that let and const are hoisted but hoisted very differently then the var declaration.
 * ------ they are stored in different memory space.
 * ------ And you can not access the variable before initialization before having them value.
 * 
 * 
 * 
 * 
 * ----------------temporal dead zone
 * ------temporal dead zone is the time between the creation of the variable and the initialization of the variable.
 * 
 * ------temporal dead zone is the time since when this let variable was hoisted and till initialized some value----so time between that is a temporal dead zone.
 * 
 * ---- in simple words when when the variable is hoisted and till it is initialized with some value that time is called temporal dead zone.------------
 * ----  initialization means assigning some value to the variable it will be happen only when that line let a=10; will be executed then it temporal dead zone will be ended.
 * 
 * 
 * ----- till the variable is inside the temporal dead zone it will throw reerence error.
 * 
 * ----- only access when variable has some value instead of hoisted value
 * 
 * 
 * ----- relation with window object -------------
 * 
 * ------incase of var it is attached to the window object.
 * ----- window.b will give 100 
 * 
 * 
 * 
 * ------- in case of let it is not attached to the window object.
 * ------- because they are in separate memory space.
 * ------- window.a will give undefined.
 * ------- this.b can be accessed but not this.a
 * ------- window object is the global object in the browser.
 * 
 * 
 * -----------syntax error-----
 * 
 * can not redeclare let a=10; and let a=20; it will throw syntax error. without executing any code line it will throw error immediately
 * ------you can not declare the same variable again with let keyword in the same scope.
 * 
 * 
 * 
 * ---------but it is possible in var we can redeclare in var a=10; var a=20; it will not throw any error.
 * 
 * 
 * --------const will also inside the temporal dead zone.
 * -------- can not change the value of const variable after initialization.
 * 
 * 
 * const b;
 * b=10;
 *  -----------this will throw error ---------Uncaught SyntaxError: Missing initializer in const declaration
 * 
 * if 
 * const b=10;
 * b=20;
 * ------------this will throw error ---------Uncaught TypeError: Assignment to constant variable.
 * ------------ 
 * 
 * let a=10;
 * let a=20 ------------this will throw error ---------Uncaught SyntaxError: Identifier 'a' has already been declared
 * 
 * but if
 * 
 * let a=10;
 * a=20; ------------this will not throw any error.
 * 
 * 
 * 
 * 
 * ------------best way to avoid temporal dead zone
 * ----only initialized the variables on top of the code.
 * 
*/











/**
 * 
 * alway
 */