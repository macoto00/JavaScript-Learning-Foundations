'use strict';

// change the number here to test out different sizes
const height = 4;

// Write a program that draws a triangle of the specified height
//
// Example output when height is 4:
//
// *
// **
// ***
// ****
//
function drawTriangle(height) {
    // Rows
    for (let i = 1; i <= height; i++) {
        // Columns
        for (let j = 1; j <= i; j++) {
            // Print on line
            process.stdout.write("* ");
        }
        // New line
        console.log();
    }
}

drawTriangle(height)

module.exports = { drawTriangle }