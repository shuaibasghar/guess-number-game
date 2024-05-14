// 1. map() method
const arr = [5, 1, 3, 2, 6];

// transform the array into a new array

// Double the value of each element - [10, 2, 6, 4, 12] each value is transformed into double

//find binary of each element in array - [101, 1, 11, 10, 110]

// so map method is used to transform the array into a new array

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary); // here we are passing the reference of the function
// here new transformed array
console.log(output);

const output1 = arr.map(function binary(x) {
  return x.toString(2);
});

const output3 = arr.map((x) => x.toString(2));

// 2. filter() method
// filter method is used to filter the array based on some condition

const arr2 = [5, 1, 3, 2, 6];
// filter the array and return only the even numbers
const filterEven = arr2.filter((x) => x % 2 === 0);
console.log(filterEven);

// filter the array and return only the odd numbers
const filterOdd = arr2.filter((x) => x % 2 !== 0);
console.log(filterOdd);
// it will be returning the new array

// 3. reduce() method
// reduce method is used to reduce the array into a single value
// it is used to perform some operation on the array and return a single value
// it takes two arguments
// 1. callback function
// 2. initial value----optional argument

const arr3 = [5, 1, 3, 2, 6];
// sum or max num
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(arr3));

function maxNum(arr) {
  let max = arr[0];
  let min = arr[0]; // Initialize min with the first element of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}
console.log(maxNum(arr3));
// convert in reduce
const sum2 = arr3.reduce(function (acc, curr) {
  acc = acc + curr; //sum += arr[i];
  return acc;
}, 0);
console.log(sum2);

const maxNum2 = arr3.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxNum2);

// 4. find min max by reducer

const maxMin = arr3.reduce(
  (acc, curr) => {
    if (curr > acc.max) {
      acc.max = curr;
    } else if (curr < acc.min) {
      acc.min = curr;
    }
    return acc;
  },
  { max: arr3[0], min: arr3[0] }
);
console.log("min max", maxMin);

//

const users = [
  { firstName: "akshay", lastName: "kumar", age: 50 },
  { firstName: "amir", lastName: "khan", age: 30 },
  { firstName: "salman", lastName: "khan", age: 40 },
  { firstName: "shahrukh", lastName: "khan", age: 30 },
];

const output4 = users.map((user) => {
  return {
    fullname: `${user.firstName} ${user.lastName}`,
  };
});

console.log(output4);

// {50:1,30:2,40:1}

const output5 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output5);

//////////////
const output6 = users
  .filter((user) => user.age < 40)
  .map((user) => user.firstName);
console.log(output6);

// use reducer to get firstname whose age is less than 40
const output7 = users.reduce((acc, curr) => {
  if (curr.age < 40) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output7);
