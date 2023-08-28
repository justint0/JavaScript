"use strict";

console.log(`----- Miscellaneous pt. 1 -----`);

/* Default Parameters

If no parameters are given when the function is called, the default parameters will be used.
*/

const multiply = function (a, b = 1) {
  return a * b;
};

console.log(multiply(5, 2));
console.log(multiply(5));

/* Pass-by-value vs. Pass-by-reference

JavaScript is always pass-by-value. Everything in JavaScript is a valye type and function arguments are always passed by value. Object types are reference types which are passed by value.

Changes to the object inside the function will affect the original object, as they both refer to the same object. However, reassigning the value of the variable holding the object originally will not affect the object referenced by the function.

https://www.30secondsofcode.org/articles/s/javascript-pass-by-reference-or-pass-by-value/
*/

/* First-class and Higher-order functions

First-class functions behave like variables. They can be stored in variables, can be passed as arguments, and can be returned from another function.

A higher-order function receives a function as an argument, returns a new function, or both.

A callback function is a function passed into another function as an argument.
*/
