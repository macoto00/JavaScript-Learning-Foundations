let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function filter(numbers, callback) {
    let result = [];

    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }

    return result;
}

filter(numbers, n => n > 2);
filter(numbers, n => n < 0);
filter(numbers, n => n % 2 === 0);

console.log(filter(numbers, n => n > 2));
console.log(filter(numbers, n => n < 0));
console.log(filter(numbers, n => n % 2 === 0));