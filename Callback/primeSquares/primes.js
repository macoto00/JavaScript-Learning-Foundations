//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent

let section = document.querySelector("section");

for (let i = 2; i <= 100; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    section.appendChild(div);
}

//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

const divs = document.querySelectorAll('section div');

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function addClass(div) {
    let number = parseInt(div.textContent);
    if (isPrime(number)) {
        div.classList.add("prime");
    } else {
        div.classList.add("not-prime");
    }
}

// addClass();

//   3: Create a timer that keeps calling the prime validation function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

for (let i = 0; i < divs.length; i++) {
    setTimeout(() => {
        addClass(divs[i]);
    }, 100 * i);
}