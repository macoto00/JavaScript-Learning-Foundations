'use strict';

// Write a program that prints the numbers from 1 to 100 to separate lines
// but for multiples of three print 'Fizz' instead of the number
// and for the multiples of five print 'Buzz'
// For numbers which are multiples of both three and five print 'FizzBuzz'

function fizzBuzz() {
  let firstNumber = 1;

        // write numbers from 1 to 100
        while (firstNumber <= 100) {

            // For numbers which are multiples of both three and five print "FizzBuzz".
            if (firstNumber % 3 == 0 && firstNumber % 5 == 0) {
                console.log("FizzBuzz");
            }

            // but for multiples of three print "Fizz" instead of the number
            else if (firstNumber % 3 == 0) {
                console.log("Fizz");
            }

            // and for the multiples of five print "Buzz".
            else if (firstNumber % 5 == 0) {
                console.log("Buzz");
            }

            // Prints firstNumber
            else {
                console.log(firstNumber);
            }
            firstNumber += 1;
        }
}

fizzBuzz()

module.exports = { fizzBuzz }