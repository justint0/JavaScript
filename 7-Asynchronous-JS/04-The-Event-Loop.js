/* The Event Loop

JavaScript is single-threaded, meaning that just one line of code may be run at once.

Asynchronous tasks run in the web API environment of the browser. Once those tasks are finished, they are added to the callback queue or the microtask queue.

The microtask queue has priority over the callback queue.
*/

console.log("Synchronous code"); // 1

setTimeout(() => console.log("Callback queue"), 0); // 3

Promise.resolve('Microtask queue').then(res => console.log(res)); // 2
