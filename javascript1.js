"first js file" 
// map in js

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
  return num * 2;
});

// console.log(doubled);

// reexp

let text = "welcome to kerala";
let pattern = /kerala/;   // Regular Expression

let result = pattern.test(text);  // Checks if "JavaScript" is in text
console.log(result);


// regexp with numbers

// let str = "My phone number is 98765";
// let pattern = /\d+/;   // \d means digit, + means one or more digits

// let result = str.match(pattern);
// console.log(result[0]);

// let person = {
//   Name: "Ramya",
//   lastname: "Krishna"
// };

// console.log(Object.keys(person));   // Prints the keys
// console.log(Object.values(person)); // Prints the values
