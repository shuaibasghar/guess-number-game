/**
 --------undefined is very special keyword in javascript which is not present in other programming languages
 --------undefined is a type and value in javascript
 --------undefined is a type of undefined
 --------undefined is a value of variable which is not assigned 
 --------undefined is a value of property which is not assigned
 --------undefined is a value of function which is not assigned
 --------undefined is a value of variable which is assigned with undefined


 */

 var a =7;


 /**
  ------ Put a debugger on the first line the value will be undefine until it executes the  var a=7
  */

  var x;

  /**
   * a will be hoisted and x will be hoisted but x will be initialized with undefined through out the code a will be replaced with value because we have assigned it a value
   */

  if(x===undefined){
      console.log("x is undefined");}
  else{
        console.log("x is defined");
    }


    /**
     javascript is losely typed language-------or----weakly typed language--------or----dynamically typed language
     because it does not need to attach variable to any specific data type  like int,float,string

     
     */



     /*
     
----- it is totally possible to assign undefined to a variable but it is kind of mistake and a bad thing to do it
----- it s bad practice
----- it is better to assign null to a variable


     */