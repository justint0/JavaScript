"use strict";

console.log("----- Functions -----");

/* Functions

Functions allow us to write maintainable code and adhere to the DRY principle. All functions receive data, transform data, and output data.

There are three ways to write a function: function declarations, function expressions, and arrow functions.

Arrow functions are a special form of function expressions. Unlike function declarations and function expressions, they do not get a "this" keyword.

Declarations vs. Expressions
Function declarations can be called before they are defined (because of hoisting).
Function expressions (anonymous functions) do not have a name.
*/

function areaCircleDecl(radius) {
  const pi = 3.14;
  const answer = pi * radius ** 2;
  console.log(`Function declaration: The area of the circle is ${answer}.`);
  return answer;
}
areaCircleDecl(10);

const areaCircleExpr = function (radius) {
  const pi = 3.14;
  const answer = pi * radius ** 2;
  console.log(`Function expression: The area of the circle is ${answer}.`);
  return answer;
};
areaCircleExpr(15);

const areaCircleArrow = (radius) => {
  const pi = 3.14;
  const answer = pi * radius ** 2;
  console.log(`Arrow function: The area of the circle is ${answer}.`);
  return answer;
};
areaCircleArrow(20);

/* Arrow functions

In arrow functions with more than one parameter, we need to wrap the parameters in parentheses.
In arrow functions with more than one line, curly braces are needed.
*/
const addThreeInts = (a, b, c) => console.log(a + b + c);
addThreeInts(1, 2, 3);

// Functions can call other functions
function halveInt(integer) {
  return integer / 2;
}

function calcalateTax(integer) {
  const half = halveInt(integer);
  return half - 5;
}

// Function declaration with a switch statement - notice the function is called before it is defined!
agendaToday("Tuesday");
agendaToday("Saturday");
agendaToday("");

function agendaToday(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Go to work");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Hang out with my friends");
      break;
    default:
      console.log("Not a valid day of the week!");
  }
}
