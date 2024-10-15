/**
 * Array is a data structure. It stores data in a continous memory block. Array is a object in JS.
 * If we bind 1D Array inside another another then we get 2D Array.
 */

// This is a 2D Array
const arrayOfTwoD = [
  [1, 5, 7],
  [65, 89, 5],
  [15, 36],
];

// const arr = Array(10).fill(0); By this we can create 1D Array

// How to create 2D Array
// Lets create 5*6 array 2D Array (5 row and 6 coloum) and every cell of the array should be 0
// coloum means outer array. row means inner 1D Array

let outer = Array(5); // outer array
for (let i = 0; i < 5; i++) {
  inner = Array(6).fill(0);
  outer[i] = inner;
}

console.log(outer)


