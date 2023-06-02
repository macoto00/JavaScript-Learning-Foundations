
let inputElement = document.querySelector(".input");
let messageDiv = document.querySelector(".message");
let submitButton = document.querySelector(".submit");
let resultList = document.querySelector(".resultList");
let charStats = document.querySelector(".charStats");

function fetchCharacter(characterId) {
    if (!Number.isInteger(+characterId) || characterId === "") {
        return Promise.reject('characterId must be an integer');
    } 
    return fetch(`https://swapi.dev/api/people/${characterId}`)
        .then((response) => response.json());
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let characterId = inputElement.value;

    fetchCharacter(characterId)
        .then((characterJSON) => {
            // character stats
            const characterName = characterJSON.name;
            const characterHeight = characterJSON.height;
            const characterMass = characterJSON.mass;
            const characterHomeworldUrl = characterJSON.homeworld;

            // clear existing list items
            charStats.innerText = '';

            // create new li elements and fill them with values
            let nameToShow = document.createElement("li");
            nameToShow.textContent = "Name: " + characterName;

            let heightToShow = document.createElement("li");
            heightToShow.textContent = "Height: " + characterHeight;

            let massToShow = document.createElement("li");
            massToShow.textContent = "Mass: " + characterMass;

            // append li elements to charStats list
            charStats.appendChild(nameToShow);
            charStats.appendChild(heightToShow);
            charStats.appendChild(massToShow);

            // display the character stats list
            resultList.style.display = "block";

            // fetch and display character's home world
            fetch(characterHomeworldUrl)
                .then((response) => response.json())
                .then((homeworldJSON) => {
                    const homeworldName = homeworldJSON.name;

                    let homeworldToShow = document.createElement("li");
                    homeworldToShow.style.border = "solid red 2px";
                    homeworldToShow.style.width = "fit-content";
                    homeworldToShow.textContent = "Home World: " + homeworldName;

                    charStats.appendChild(homeworldToShow);
                })
                .catch((error) => {
                    console.error("Error fetching homeworld:", error);
                    displayErrorMessage("Error fetching character's home world.");
                });
            
            removeErrorMessage();
        })
        .catch((error) => {
            console.error("Something went wrong", error);
            displayErrorMessage("The character ID must be a valid integer.");
        });
});

function displayErrorMessage(message) {
    removeErrorMessage();
    let errorParagraph = document.createElement("p");
    errorParagraph.textContent = message;
    errorParagraph.style.color = "red";
    errorParagraph.style.fontWeight = "bolder";

    messageDiv.appendChild(errorParagraph);
}

function removeErrorMessage() {
    let errorParagraph = messageDiv.querySelector("p");
    if (errorParagraph) {
        errorParagraph.remove();
    }
}