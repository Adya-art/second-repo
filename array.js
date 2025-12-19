"new file" 

// // 1. Array Indexing
// let colors = ["red", "green", "blue"];
// console.log(colors[0]); // red
// console.log(colors[2]); // blue
// colors[1] = "yellow";   // modify
// console.log(colors);    // ["red", "yellow", "blue"]

// Array with shift
// let fruits = ["apple", "banana", "cherry"];

// let firstFruit = fruits.shift();

// console.log(firstFruit); // "apple"
// console.log(fruits);     // ["banana", "cherry"]

//array with unshift
// let fruits = ["banana", "cherry"];

// let newLength = fruits.unshift("apple");

// console.log(fruits);    // ["apple", "banana", "cherry"]
// console.log(newLength); // 3



// //array with indexof
// let fruits = ["apple", "banana", "cherry", "mango"];

// let position = fruits.indexOf("banana");

// console.log(position); // 1



// array with foreach

// let fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function(aaa) {
//   console.log(aaa);
// });

// array with pop
// let fruits = ["apple", "banana", "cherry"];

// let lastFruit = fruits.pop();

// console.log(lastFruit); // "cherry"
// console.log(fruits);    // ["apple", "banana"]


// array for push 
// let fruits = ["apple", "banana"];
// let newLength = fruits.push("cherry");

// console.log(fruits);    // ["apple", "banana", "cherry"]
// console.log(newLength); // 3

// array with concact
// let fruits = ["apple", "banana"];
// let moreFruits = ["apple", "mango"];

// let allFruits = fruits.concat(moreFruits);

// console.log(allFruits); // ["apple", "banana", "cherry", "mango"]

// array with copywithin

// let numbers = [10, 20, 30, 40, 50];

// // Copy elements starting from index 0, to start at index 3
// numbers.copyWithin(3, 0);

// console.log(numbers); // [10, 20, 30, 10, 20]

// array with includes
let fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

