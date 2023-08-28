/* Promisification

"Promisification" is the conversion of a function that accepts a callback into a function that returns a promise.
*/

let lottery = new Promise(function(resolve, reject) {
  console.log(`Lottery is happening`);

  setTimeout(() => {
    if (Math.random() >= 0.5) resolve("You won!")
    else reject(new Error ("Better luck next time"))
  }, 5000);
})

lottery
.then(response => console.log(response))
.catch(err => console.log(err));

// Geolocation example
const position = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

position
.then(response => console.log(response.coords.latitude, response.coords.longitude))
.catch(err => console.log(err));
