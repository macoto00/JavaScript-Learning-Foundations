let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

filterLargerThanTwo(numbers);
filterNegative(numbers);
filterEven(numbers);

function filterLargerThanTwo(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number > 2) {
      result.push(number);
    }
  }

  return result;
}

console.log(filterLargerThanTwo(numbers));

function filterNegative(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number < 0) {
      result.push(number);
    }
  }

  return result;
}

console.log(filterNegative(numbers));

function filterEven(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}

console.log(filterEven(numbers));