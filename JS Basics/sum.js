'use strict';

// Write a function called `sum()` that returns the sum of numbers
// from zero to the given parameter (as a number)
// Don't forget to export the function with module.exports at the end of the file
//
// Example: sum(5) should return 15, because 0 + 1 + 2 + 3 + 4 + 5 = 15

const number = 5;

console.log(sum(number));

function sum(number) {

    let sum = 0;

    // loop to print each number
    for (let i = 0; i <= number ; i++) {
        sum = sum + i;
    }

    return sum;
}