const form = document.querySelector("form");
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const messages = [];
const numbers = "1234567890";
const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameInput = form.querySelector('input[name="username"]');
  const emailInput = form.querySelector('input[name="email"]');
  const passwordInput = form.querySelector('input[name="password"]');
  const passwordAgainInput = form.querySelector('input[name="passwordAgain"]');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const passwordAgain = passwordAgainInput.value;

  if (username === "" || email === "" || password === "" || passwordAgain === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== passwordAgain) {
    alert("Passwords do not match.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const passwordValidationMessages = validatePassword(password);
  if (passwordValidationMessages.length > 0) {
    alert("Password validation failed:\n" + passwordValidationMessages.join("\n"));
    return;
  }

  const formData = {
    name: username,
    email: email,
    password: password
  };

  fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      alert("Thank you, you've successfully signed up");
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

function validateEmail(email) {
  return emailPattern.test(email);
}

function validatePassword(password) {
  const validationMessages = [];

  if (!(password.length >= 6 && password.length < 100)) {
    validationMessages.push("Password length should be between 6 and 100 characters.");
  }

  if (!password.split("").some((letter) => capitals.includes(letter))) {
    validationMessages.push("Password should contain at least one capital letter.");
  }

  if (!password.split("").some((letter) => numbers.includes(letter))) {
    validationMessages.push("Password should contain at least one number.");
  }

  if (!password.split("").some((letter) => specialChars.includes(letter))) {
    validationMessages.push("Password should contain at least one special character.");
  }

  return validationMessages;
}
