"use strict";

console.log(`----- Loops -----`);

/* Loops

For loops automate repetitive tasks. Every for loop has a start point, end point, and step.
*/
for (let i = 1; i < 6; i++) {
  console.log(`Let's count to 5: ${i}`);
}

for (let i = 5; i > 0; i--) {
  console.log(`Let's count down from 5: ${i}`);
}

/*
The continue keyword exits the current iteration of the loop and continues to the next one
The break keyword exits the entire loop.
*/

// Log odd numbers.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  if (typeof digits[i] !== "number") break;
  if (digits[i] % 2 === 0) continue;
  console.log(digits[i]);
}

// Loop inside a loop
for (let i = 1; i < 4; i++) {
  console.log(`Starting set ${i}`);
  for (let j = 1; j < 6; j++) {
    console.log(`Set ${i}: Rep ${j}`);
  }
}

/* While loop

In a while loop, a condition must stay true for the loop to run. 
In a do...while loop, the condition is evaluated after executing the statement.
*/

let a = 0;
let b = 10;

while (a != b) {
  console.log(`a is ${a} and b is ${b}`);
  a += 1;
  b -= 1;
}
