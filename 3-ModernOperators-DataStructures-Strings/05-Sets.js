"use strict";

console.log(`----- Sets -----`);

/* Sets

A set is unique, can hold different data types, and are iterable.
*/

const orders = [
  "pasta",
  "pizza",
  "burger",
  "pizza",
  "pizza",
  "fries",
  "pasta",
  "burger",
  "pasta",
];

const uniqueOrders = new Set(orders);
console.log(uniqueOrders, uniqueOrders.size);

console.log(`At least one order was pizza: ${uniqueOrders.has("pizza")}`);

// Add order
uniqueOrders.add("wrap");

// Delete order
uniqueOrders.delete("fries");

// Clear the whole set
// uniqueOrders.clear();
