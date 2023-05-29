
let display = document.querySelector(".display");
let button = document.querySelector("button");
let counter = display.innerHTML;

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds

let timeoutId = setTimeout(() => {
    display.innerHTML = "Bomb exploded";
}, 10000);

// If you click on the button set the display to "Bomb defused" and stop the timeout

function defused() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    display.innerHTML = "Bomb defused";
}

button.addEventListener("click", defused);

// Extra: create an interval which will update the remaining seconds in the display

let intervalId = setInterval(() => {
    if (counter > 0) {
        counter--;
        display.innerHTML = counter;
    } else {
        display.innerHTML = "Bomb exploded";
    }
}, 1000);
