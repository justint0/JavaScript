"use strict";

/* Callback hell

Callback hell refers to the situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.

https://medium.com/techfront/javascript-callback-hell-simply-explained-93c3cf4be884
*/


/* Promises and the Fetch API

The Promise object represents the eventual completion (of failure) of an asynchronous operation and its resulting value.

We can chain promises for a sequence of asynchronous operations, escaping callback hell.

Cool resource: https://www.freecodecamp.org/news/asynchronous-javascript/
*/

// .then and response.json() return promises
const getDefinition = function(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => {
    if (['fuck', 'shit'].includes(word)) throw Error(`Sorry, I don't define inapproriate words.`);
    return response.json();
  })
  .then(data => {
    console.log(data[0].meanings[0].definitions[0].definition);
  })
  // Handle rejected promises
  .catch(err => {
    console.error(`${err}`);
  })
  .finally(() => console.log(`Thank you for using our dictionary!`))
};

getDefinition("telescope");
