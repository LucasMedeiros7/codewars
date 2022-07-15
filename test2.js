// Testing for every function:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.every(num => typeof num === "string"));  // false
console.log(arr.every(num => typeof num === "number")); // true