"use strict";

console.log(`----- Maps -----`);

/* Maps

A map is a data structure that maps values to keys. Keys can be any type in maps.
*/

const map = new Map();

// .set adds a key-value pair
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// Get size
console.log(map.size);

// Get value
console.log(map.get("a"));

// Check if key exists
console.log(map.has("b"));

// Delete
map.delete("a");

// Clear the entire map
// map.clear();

// Converting an object into a map
const myCity = {
  name: "Stamford",
  state: "Connecticut",
  population: 136309,
};

const myCityMap = new Map(Object.entries(myCity));
console.log(myCityMap);

// Converting a map into an array of arrays.
console.log([...myCityMap]);
