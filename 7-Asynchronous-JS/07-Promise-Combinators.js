/* Promise combinators

Promise.all, Promise.race, Promise.allSettled, and Promise.any

Resource: https://v8.dev/features/promise-combinators
*/

// Promise.all lets you know when either all input promises have fulfilled or when one of them rejects.

// Helper
const getJSON = async function(url) {
  try {
    const response = await fetch(url);
    if(!response.ok) throw Error(`Couldn't access URL`);
    return response.json();
  } catch(err) {
    throw err;
  }
};

const getFlags = async function(country1, country2) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`)
    ]);
    console.log(...data.map(country => country[0].flag));
  } catch(err) {
    console.log(err);
  }
};
getFlags('Canada', 'Mexico');


// Promise.race is useful if you want to run multiple promises, and either ...
// 1. do something with the first successful result that comes in 
// 2. do something as soon as one of the promises rejects

const countryRace = async function(country1, country2) {
  try {
    const result = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
    ]);

    const name = result[0].name.common;
    const flag = result[0].flag;
    console.log(`${name} ${flag} has won the race!`);
  } catch(error) {
    console.log(error);
  }
};
countryRace('Canada', 'Mexico');


// Promise.allSettled gives you a signal when all the input promises are settled, which means they're either fulfilled or rejected.

Promise.allSettled([
  getJSON(`https://restcountries.com/v3.1/name/canada`),
  getJSON(`https://restcountries.com/v3.1/name/mexico`),
]).then(() => console.log('All promises settled! 🇨🇦 🇲🇽'));


// Promise.any gives you a signal as soon as one of the promises fulfills.

Promise.any([
  Promise.resolve("Resolved."),
  Promise.reject("Rejected"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
