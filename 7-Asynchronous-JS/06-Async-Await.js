/* Async/await

Async/await is an alternative method to consume promises.

try...catch() can help us handle errors in asynchronous Javascript with async/await.

We also look at how to return values from async functions
*/

const getDefinition = async function(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if(!res.ok) throw Error(`Custom Error`);

    const data = await res.json();
    return `${data[0].meanings[0].definitions[0].definition}`;
  } catch(err) {
    throw err;
  }
};

getDefinition('apple')
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log(`Thank you for using our dictionary.`));


