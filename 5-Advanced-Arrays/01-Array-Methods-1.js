"use strict";

console.log(`----- Array Methods pt. 1 ----- `);

// Slice method extracts part of an array.
let array1 = ["a", "b", "c", "d", "e"];
console.log(array1.slice(2, 4));

// Splice method deletes items from an array.
let array2 = ["a", "b", "c", "d", "e"];
console.log(array2.splice(1, 2));

// Reverse method reverses the items in an array.
let array3 = ["a", "b", "c", "d", "e"];
console.log(array3.reverse());

// Concat method concatenates two arrays.
let array4 = ["a", "b", "c"];
let array5 = ["d", "e"];
console.log(array4.concat(array5));

// Join method turns arrays into strings.
let array6 = [1, 2, 3, 4, 5];
console.log(array6.join(", "));

// At method gets the element at a given index.
let array7 = [1, 2, 3, 4, 5];
console.log(array7.at(0));
