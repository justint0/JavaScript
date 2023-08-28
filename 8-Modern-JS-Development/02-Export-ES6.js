/* Default export (1 export per module)

export default function(name) {
  console.log(`Hello, my name is ${name}`);
};
*/

const actor = 'Arnold Schwarzenegger';

const fruits = ['Apple', 'Banana', 'Cherry'];

const introduce = function(name) {
  console.log(`Hello, my name is ${name}.`);
}

// Named exports allow us to export more than one variable
export { actor, fruits, introduce };
