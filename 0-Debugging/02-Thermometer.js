// The debugger statement stops the execution of JavaScript, and calls the debugger.
// debugger;

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees celsius: ")),
  };

  // B) FIND
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

/* Using Breakpoints Step-by-Step

1. Right click on the web page and click 'Inspect'. This opens Google Chrome DevTools.
2. Go to the Sources tab (to the right of the Console tab).
3. Open the script you want to debug.
4. Click on a line of code to set a breakpoint. Breakpoints pause debugger execution. The code will execute until it gets to the line with the breakpoint.
5. Refresh the page.
6. Click the step button to continue execution. Examine how the variables in the scope change. Use this to figure out where the bug is coming from.
*/
