
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;

  const formData = {
    username: username,
    email: email
  };

  fetch('http://localhost:8080/signup', {
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
      console.error('Error:', error); 
    });
});
