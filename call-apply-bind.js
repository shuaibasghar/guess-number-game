// call apply bind

// step-------1
/*
let name = {
  firstName: "Shuaib",
  lastName: "Asghar",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Azhar",
  lastName: "Baloch",
};

// function borrowing
name.printFullName.call(name2);
*/

// step-------2
// if printfullname function is not in the object
let name = {
  firstName: "Shuaib",
  lastName: "Asghar",
};

let name2 = {
  firstName: "Azhar",
  lastName: "Baloch",
};

let printFullName = function (hometown, country) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + country
  );
};

printFullName.call(name, "Karachi", "Pakistan");

// differece between call and apply is the way sending arguments
// call: comma separated
// apply: array

printFullName.apply(name, ["Karachi", "Pakistan"]);

// bind ---looks same as call method
// bind will return a function
let printMyName = printFullName.bind(name, "Karachi", "Pakistan");
// it will create a copy of printFullName function and bind the name object to it
// it does not directly call that method
// and it can be invoked later on by calling printMyName() see call method is directly showing output
