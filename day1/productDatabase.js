// # Product database

// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a `products` map with the following key-value pairs:

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |

// - Create an application which prints out the answers to the following
//   questions:
//   - [How much is the fish?](https://www.youtube.com/watch?v=cbB3iGRHtqA)
//   - What is the most expensive product?
//   - What is the average price?
//   - How many products' price is below 300?
//   - Is there anything we can buy for exactly 125?
//   - What is the cheapest product?

// The full output should be the following:

// ```text
// 400
// Chicken
// 258.33334
// 4
// no
// Bread
// ```

const products = new Map([
    ["Eggs", 200],
    ["Milk", 200],
    ["Fish", 400],
    ["Apples", 150],
    ["Bread", 50],
    ["Chicken", 550]
]);

console.log(answers(products));

function answers(products) {
    // price of fish
    console.log(products.get("Fish"));

    // Most expensive product
    let mostExpensive = 0;
    let mostExpensiveProduct = "";
    for (const [key, value] of products.entries()) {
        if (value > mostExpensive) {
            mostExpensive = value;
            mostExpensiveProduct = key;
        }
    }
    console.log(mostExpensiveProduct);

    // average price
    let sum = 0;
    for (const value of products.values()) {
        sum += value;
    }
    let averagePrice = sum / products.size;;
    console.log(averagePrice);

    // products with price is below 300
    let productsBelow300 = 0;
    for (const value of products.values()) {
        if (value < 300) {
            productsBelow300 += 1;
        }
    }
    console.log(productsBelow300);

    // product for exactly 125
    let productFor125 = false;
    for (const value of products.values()) {
        if (value === 125) {
            productFor125 = true;
        }
    }
    console.log(productFor125 ? "yes" : "no");

    // the cheapest product
    let cheapest = Number.MAX_VALUE;
    let cheapestProduct = "";
    for (const [key, value] of products.entries()) {
        if (value < cheapest) {
            cheapest = value;
            cheapestProduct = key;
        }
    }
    console.log(cheapestProduct);
}