// DOM loading
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const updatePost = document.querySelector(".postUpdateInfo");

    // Get the ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // Add a submit event listener to the form
    updatePost.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the entered title and URL values
        const title = updatePost.querySelector('textarea[name="title"]').value;
        const url = updatePost.querySelector('input[name="url"]').value;

        // Fetch data to backend
        const formData = {
            title: title,
            url: url
        };

        fetch(`http://localhost:8080/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                console.log("Thank you, you've successfully updated a Post");
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // Reset the form fields
        updatePost.reset();
    });
});
