// Recursion in Functional Programming
function recurse(start, end) {
  if(start === end) {
    console.log(end);
    return;
  } else {
    console.log(start);
    return recurse(start+1, end)
  }
}
recurse(1, 10);



// Currying in Functional Programming
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

// Lets curry this function

function curryAdd(firstNum) {
  return function(secondNum) {
    return firstNum + secondNum;
  }
}

let add10 = curryAdd(10);
add10(2); // Return 12

let add20 = curryAdd(20);
add20(2); // Returns 22



// Partial application in Functional Programming
const module = {
  height: 42,
  getComputedHeight: function(height) {
    return this.height + height
  }
};

const unboundGetComputedHeight = module.getComputedHeight;
console.log(unboundGetComputedHeight(32)); // The function gets invoked at the global scope
// outputs: NaN

const boundGetComputedHeight = unboundGetComputedHeight.bind(module);
console.log(boundGetComputedHeight(32));
// expected output: 74



// Function composition in Functional Programming

// If we have these two functions

function add10(num) {
  return num + 10;
}

function add100(num) {
  return num + 100;
}

// We can compose these two down to =>
function composed(num) {
  return add10(add100(num));
}

composed(1) // Returns 111
