
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", handleInputFocus);
passwordInput.addEventListener("input", handleInputFocus);

function handleInputFocus(event) {
    const input = event.target;
    if (input.value !== "") {
        input.style.border = "#a7ce96 solid 2px"
    } else {
        input.style.border = "black solid 1px"
    }
}


