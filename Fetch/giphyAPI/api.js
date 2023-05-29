const apiKey = "API-key";
const searchQuery = "cute";

// Function to display the static thumbnails
function displayThumbnails(gifs) {
    const container = document.getElementById("thumbnails-container");

    gifs.forEach((gif) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = gif.images.fixed_height_still.url;
        thumbnail.alt = gif.title;

        // Event listener for clicking on the thumbnail
        thumbnail.addEventListener("click", () => {
            thumbnail.src = gif.images.fixed_height.url;
        });

        container.appendChild(thumbnail);
    });
}

// Function to fetch and display the gifs
function fetchGifs() {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=16`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const gifs = data.data;
            displayThumbnails(gifs);
        })
        .catch((error) => {
            console.error("Error fetching gifs:", error);
        });
}

fetchGifs();
