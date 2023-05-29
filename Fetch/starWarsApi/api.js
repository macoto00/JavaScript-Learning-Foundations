function searchCharacters() {
    const searchInput = document.getElementById("searchInput").value;
    const characterList = document.getElementById("characterList");
    const movieList = document.getElementById("movieList");

    // Clear previous results
    characterList.innerHTML = "";
    movieList.innerHTML = "";

    // Fetch characters
    fetch(`https://swapi.dev/api/people/?search=${searchInput}`)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((character) => {
                const characterName = character.name;
                const characterItem = document.createElement("li");
                characterItem.textContent = characterName;
                characterItem.addEventListener("click", () => {
                    fetchCharacterMovies(character.url);
                });
                characterList.appendChild(characterItem);
            });
        })
        .catch((error) => console.log(error));
}

function fetchCharacterMovies(characterUrl) {
    const movieList = document.getElementById("movieList");

    // Clear previous results
    movieList.innerHTML = "";

    // Fetch character movies
    fetch(characterUrl)
        .then((response) => response.json())
        .then((character) => {
            character.films.forEach((filmUrl) => {
                fetch(filmUrl)
                    .then((response) => response.json())
                    .then((film) => {
                        const movieItem = document.createElement("li");
                        movieItem.textContent = `${film.title} (${film.release_date})`;
                        movieList.appendChild(movieItem);
                    })
                    .catch((error) => console.log(error));
            });
        })
        .catch((error) => console.log(error));
}