"use strict";

console.log(`----- forEach -----`);

/* forEach

The forEach() method executes a provided function once for each array element.

The function's first parameter is the current element, the second parameter is the current index, and the third parameter is the entire array.
*/

const employees = ["Jack", "Amy", "Tony"];

employees.forEach((employee, i, arr) => {
  console.log(`Employee ${i + 1}: ${employee}`);
});

// forEach can be called on maps with value, key, map.
const myMap = new Map();
myMap.set("a", 10).set("b", 20).set("c", 30);

myMap.forEach(function (value, key, map) {
  console.log(`Key: ${key}, value: ${value}`);
});

// forEach can be called on sets with value, key, map.
const mySet = new Set().add(1).add(2).add(3).add(4).add(5);

mySet.forEach(function (value, _, map) {
  console.log(`Value: ${value}`);
});
