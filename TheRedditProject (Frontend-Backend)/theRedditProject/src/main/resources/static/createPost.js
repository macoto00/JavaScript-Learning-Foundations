
// DOM loading
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ========== Create new Post ==========
    // =====================================

    // Get the form element
    const newPostForm = document.querySelector(".newPostInfo");

    // Add a submit event listener to the form
    newPostForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the entered title and URL values
        const title = newPostForm.querySelector('textarea[name="title"]').value;
        const url = newPostForm.querySelector('input[name="url"]').value;

        // Fetch data to backend
        const formData = {
            title: title,
            url: url,
            vote: 0,
            owner: "Anonymous"

            // pass the timestamp date of creation
        };

        fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                console.log("Thank you, you've successfully created a Post");
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // Reset the form fields
        newPostForm.reset();
    });
});

