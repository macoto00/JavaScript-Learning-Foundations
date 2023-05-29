
let body = document.querySelector("body");

// 1: Create a function that updates the <body> elements background-image's css property
// 2: The image value should be https://loremflickr.com/g/1280/800/hungary/

// function updateBackground () {
//     body.style.backgroundImage = "url(https://loremflickr.com/g/1280/800/hungary/)";
// }

// updateBackground();

// 3: Make sure every time you refresh the image, you add a cachebuster
// WTF is a cachebuster?
// http://www.adopsinsider.com/ad-ops-basics/what-is-a-cache-buster-and-how-does-it-work

function updateBackground() {
    let cachebuster = Date.now(); // Generate a unique timestamp as the cachebuster
    let imageUrl = `https://loremflickr.com/g/1280/800/hungary/?cachebuster=${cachebuster}`;
    body.style.backgroundImage = `url('${imageUrl}')`;
}

// let cachebuster = Math.round(new Date().getTime() / 1000);
// document.write('<scr'+'ipt type="text/javascript" src="external.js?cb=' +cachebuster+'"></scr' + 'ipt>');

updateBackground();

// 4: Create a timer function that refreshes the background every 5 seconds

let intervalId = setInterval(() => {
    updateBackground();
}, 5000);
