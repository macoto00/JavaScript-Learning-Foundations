'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
// - Don't forget to export the function with module.exports at the end of the file
//
// - Example: calculateFactorial(5) should return 120, because 1 * 2 * 3 * 4 * 5 = 120

const number = 5;

console.log(calculateFactorial(number));

function calculateFactorial(number) {
    let result = 1;
    for (let index = 1; index <= number; index++) {
        result *= index;
    }
    return result;
}

module.exports = calculateFactorial;
// one or another (both are equivalent)
export default calculateFactorial;