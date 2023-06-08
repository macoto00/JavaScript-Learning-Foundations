
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
        const dateString = new Date().toISOString().substring(0,10);

        // Fetch data to backend
        const formData = {
            title: title,
            url: url,
            vote: 0, 
            timestamp: dateString
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
                alert("Thank you, you've successfully created a Post");
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // Reset the form fields
        newPostForm.reset();
    });

    // Function to format the date 
    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    // =====================================
    // ========== Update Post ==========
    // =====================================

    // Get the form element
    const updatePostForm = document.querySelector(".postUpdateInfo");

    // Add a submit event listener to the form
    updatePostForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the entered title and URL values
        const title = updatePostForm.querySelector('textarea[name="title"]').value;
        const url = updatePostForm.querySelector('input[name="url"]').value;

        // Call a function to create the new post
        updatePost(title, url);

        // Fetch data to backend
        const formData = {
            title: title,
            url: url
        };

        fetch("http://localhost:8080/posts", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert("Thank you, you've successfully updated a Post");
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // Reset the form fields
        updatePostForm.reset();
    });

    function updatePost(title, url) {
        // Get elements of the Post for update
        const titleToUpdate = document.querySelector(".postTitle");
        const urlToUpdate = document.querySelector(".postURL");

        titleToUpdate.textContent = title;
        urlToUpdate.textContent = url;
    }

    // =====================================
    // ========== Delete Post ==========
    // =====================================

    // Get the delete buttons
    const removeButtons = document.querySelectorAll(".removeBtn");

    // Add a click event listener to each "Remove" button
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Get the parent post element
            const postElement = event.target.closest(".post");

            // Get the title and URL values of the post
            const title = postElement.querySelector(".postTitle").textContent;
            const url = postElement.querySelector(".postURL").getAttribute("href");

            // Fetch data to backend
            const formData = {
                title: title,
                url: url
            };

            fetch("http://localhost:8080/posts", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    alert("Thank you, you've successfully deleted a Post");
                })
                .catch(error => {
                    console.error("Error:", error);
                });

            // Remove the post 
            postElement.remove();
        });
    });

    // =====================================
    // ========== Upvote ==========
    // =====================================

    // Get the upvote buttons (img)
    const upvoteBtn = document.querySelectorAll(".arrowUp");

    // Add a click event listener to each upvote button
    upvoteBtn.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Get the parent post element
            const postElement = event.target.closest(".post");

            // Get the title and URL values of the post
            const title = postElement.querySelector(".postTitle").textContent;
            const url = postElement.querySelector(".postURL").getAttribute("href");
            const likes = postElement.querySelector(".likes").value;

            // Change content of likes (+1)
            upVote(likes);

            // Get the value of updated likes
            const newLikes = postElement.querySelector(".likes").value;

            // Fetch data to backend
            const formData = {
                title: title,
                url: url,
                vote: newLikes
            };

            fetch("http://localhost:8080/posts", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    alert("Thank you, you've successfully upvoted a Post");
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });
    });

    function upVote(likes) {
        likes.textContent += 1;
    }

    // =====================================
    // ========== Downvote ==========
    // =====================================

    // Get the upvote buttons (img)
    const downVoteBtn = document.querySelectorAll(".arrowDown");

    // Add a click event listener to each upvote button
    downVoteBtn.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Get the parent post element
            const postElement = event.target.closest(".post");

            // Get the title and URL values of the post
            const title = postElement.querySelector(".postTitle").textContent;
            const url = postElement.querySelector(".postURL").getAttribute("href");
            const likes = postElement.querySelector(".likes").value;

            // Change content of likes (+1)
            downVote(likes);

            // Get the value of updated likes
            const newLikes = postElement.querySelector(".likes").value;

            // Fetch data to backend
            const formData = {
                title: title,
                url: url,
                vote: newLikes
            };

            fetch("http://localhost:8080/posts", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    alert("Thank you, you've successfully downvoted a Post");
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });
    });

    function downVote(likes) {
        likes.textContent -= 1;
    }

    // =====================================
    // ========== Create User ==========
    // =====================================
});



// Call a function to create the new post
if (title === null && url === null) {
    return;
} else {
    createNewPost(title, url);
}

// Function to create a new post
function createNewPost(title, url) {
    // Create the elements for the new post
    const postContainer = document.querySelector(".postsContainer");
    const post = document.createElement("div");
    post.className = "post";

    const counter = document.createElement("div");
    counter.className = "counter";

    const arrowUp = document.createElement("div");
    arrowUp.className = "arrowUp";
    const arrowUpImage = document.createElement("img");
    arrowUpImage.src = "upvote.png";
    arrowUpImage.alt = "";

    const likes = document.createElement("div");
    likes.className = "likes";
    const likesCount = document.createElement("p");
    likesCount.textContent = "0";

    const arrowDown = document.createElement("div");
    arrowDown.className = "arrowDown";
    const arrowDownImage = document.createElement("img");
    arrowDownImage.src = "downvote.png";
    arrowDownImage.alt = "";

    const postBody = document.createElement("div");
    postBody.className = "postBody";

    const postTitle = document.createElement("h2");
    postTitle.className = "postTitle";
    postTitle.textContent = title;

    const postURL = document.createElement("a");
    postURL.className = "postURL";
    postURL.href = url;
    postURL.textContent = url;

    const postInfo = document.createElement("div");
    postInfo.className = "postInfo";

    const postDate = document.createElement("p");
    postDate.className = "postDate";
    postDate.textContent = formatDate(new Date());

    const postOwner = document.createElement("p");
    postOwner.className = "postOwner";
    postOwner.textContent = "Anonymous";

    const postOptions = document.createElement("div");
    postOptions.className = "postOptions";

    const modifyLink = document.createElement("a");
    modifyLink.href = "updatePost.html";
    modifyLink.textContent = "Modify";

    const removeButton = document.createElement("button");
    removeButton.className = "removeBtn";
    removeButton.textContent = "Remove";

    // Append the elements to build the new post
    counter.appendChild(arrowUp);
    counter.appendChild(likes);
    counter.appendChild(arrowDown);

    postInfo.appendChild(postDate);
    postInfo.appendChild(postOwner);

    postOptions.appendChild(modifyLink);
    postOptions.appendChild(removeButton);

    postBody.appendChild(postTitle);
    postBody.appendChild(postURL);
    postBody.appendChild(postInfo);
    postBody.appendChild(postOptions);

    post.appendChild(counter);
    post.appendChild(postBody);

    postContainer.appendChild(post);
}
