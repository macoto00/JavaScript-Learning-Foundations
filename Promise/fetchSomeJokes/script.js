let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", joke);

async function joke() {
    container.innerText = "";

    try {
        let fetchJoke = await fetch("https://api.chucknorris.io/jokes/random");
        let json = await fetchJoke.json();

        let value = json.value;
        let paragraph = document.createElement("p");
        paragraph.innerText = value;
        container.appendChild(paragraph);
    } catch (error) {
        console.error("Error happened", error);
        let errorMessage = document.createElement("p");
        errorMessage.innerText = "Failed to fetch joke. Please try again later.";
        container.appendChild(errorMessage);
    }
}
