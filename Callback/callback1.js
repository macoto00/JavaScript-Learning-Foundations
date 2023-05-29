'use strict';

const mapWith = (array, callback) => {
    let output = [];

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    for (let number of array) {
        output.push(callback(number))
    }

    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
    let filteredWord = "";

    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            filteredWord += word[i];
        }
    }

    return filteredWord;
};

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']