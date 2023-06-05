
const dog = document.querySelector("#dog");
const cat = document.querySelector("#cat");
const victor = document.querySelector("#victor");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const loveCatsButton = document.querySelector("#loveCatsButton");
const signUpButton = document.querySelector("#signUpButton");

// event listeners to the radio buttons
dog.addEventListener('change', handleRadio);
cat.addEventListener('change', handleRadio);
victor.addEventListener('change', handleRadio);
yes.addEventListener('change', handleRadio);
no.addEventListener('change', handleRadio);

// general function to handle the radio button check
function handleRadio() {
    // dog, cat && victor handling
    if (dog.checked || cat.checked || (victor.checked && no.checked)) {
        signUpButton.disabled = false;
    } else {
        signUpButton.disabled = true;
    }

    // cat fact handling
    if (yes.checked) {
        loveCatsButton.disabled = false;
    } else {
        loveCatsButton.disabled = true;
    }
}

// event listener for buttons
loveCatsButton.addEventListener('click', function () {
    alert("Thank you, you've successfully signed up for cat facts");
});

signUpButton.addEventListener('click', function () {
    if (victor.checked && no.checked) {
        alert("Sigh, we still added you to the cat facts list");
    }
});
