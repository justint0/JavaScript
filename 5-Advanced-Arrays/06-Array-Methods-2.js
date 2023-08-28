"use strict";

console.log(`----- Array Methods pt. 2 -----`);

const array1 = [-2, -1, 0, 1, 2];

// Find method finds the first element that satisfies a condition.
const firstNegative = array1.find((number) => number < 0);

// findIndex method finds the index of the first element that satisfies a condition.
const firstNegativeIndex = array1.findIndex((number) => number < 0);

// some checks if any element in the array satisfies a certain condition.
console.log(array1.some((number) => number < 0));

// every checks if every element in the array satisfies a certain condition.
console.log(array1.every((number) => number > 0));

// Flat creates a new array with the sub-array elements concatenated.
const array2 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array2.flat());

// flatMap maps all array elements and creates a new flat array.
const array3 = [1, 2, 3, 4, 5, 6];
const array4 = array3.flatMap((number) => number * 2);

// Sorting
const array5 = [4, 1, 5, 2, 3];

// Ascending
array5.sort((a, b) => a - b);

// Descending
array5.sort((a, b) => b - a);

// Creating arrays
const array6 = Array.from({ length: 7 }, () => 1);
console.log(array6);

const array7 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(array7);

const array8 = new Array(7);
array8.fill(1, 3, 5);
console.log(array8);
