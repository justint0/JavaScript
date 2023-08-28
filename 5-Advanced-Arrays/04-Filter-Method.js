"use strict";

console.log(`----- Filter -----`);

/* Filter

The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const ages = [45, 11, 16, 24, 90, 32, 5, 7, 17, 27];
const adults = ages.filter((age, index, array) => age > 18);

console.log(adults);
