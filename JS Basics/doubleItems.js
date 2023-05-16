"use strict";

// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, and print the result.
// - Use a built in array method instead of a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

console.log(drinks.map(doubleItems));

function doubleItems(item) {
  return item + item;
}

module.exports = { doubleItems };
