// DOM loading
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ========== Show all Posts ==========
    // =====================================

    // Fetch data from backend
    fetch("http://localhost:8080/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.text())
        .then(data => {
            const posts = JSON.parse(data);

            posts.forEach(post => {
                const title = post.title;
                const url = post.url;
                const date = post.timestamp;
                const owner = post.owner;
                const id = post.id;
                const postLikes = post.vote;

                // Create the elements for the new post
                const postContainer = document.querySelector(".postsContainer");
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.dataset.postId = id;

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
                likesCount.textContent = postLikes;

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
                postDate.textContent = date;

                const postOwner = document.createElement("p");
                postOwner.className = "postOwner";
                postOwner.textContent = owner;

                const postOptions = document.createElement("div");
                postOptions.className = "postOptions";

                const modifyLink = document.createElement("a");
                modifyLink.href = "updatePost.html";
                modifyLink.textContent = "Modify";
                modifyLink.onclick = (event) => passPostId(event);

                const removeButton = document.createElement("button");
                removeButton.className = "removeBtn";
                removeButton.textContent = "Remove";

                // Append the elements to build the new post
                arrowUp.appendChild(arrowUpImage);
                likes.appendChild(likesCount);
                arrowDown.appendChild(arrowDownImage);

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

                postElement.appendChild(counter);
                postElement.appendChild(postBody);

                postContainer.appendChild(postElement);
            });

            // =====================================
            // ========== Delete Post ==========
            // =====================================

            // Get the delete buttons
            const removeButtons = document.querySelectorAll(".removeBtn");

            console.log(removeButtons);
            // Add a click event listener to each "Remove" button
            removeButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const postElement = button.closest(".post");
                    const postId = postElement.dataset.postId;
                    deletePost(postId, postElement);
                });
            });

            // =====================================
            // ========== Upvote Post ==========
            // =====================================

            // Get the upvote buttons
            const upvoteBtn = document.querySelectorAll(".arrowUp");

            console.log(upvoteBtn);
            // Add a click event listener to each "Remove" button
            upvoteBtn.forEach((button) => {
                button.addEventListener("click", () => {
                    const postElement = button.closest(".post");
                    const postId = postElement.dataset.postId;
                    upvotePost(postId, postElement);
                });
            });

            // =====================================
            // ========== Downvote Post ==========
            // =====================================

            // Get the downvote buttons
            const downvoteBtn = document.querySelectorAll(".arrowDown");

            console.log(downvoteBtn);
            // Add a click event listener to each "Remove" button
            downvoteBtn.forEach((button) => {
                button.addEventListener("click", () => {
                    const postElement = button.closest(".post");
                    const postId = postElement.dataset.postId;
                    downvotePost(postId, postElement);
                });
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // =====================================
    // ========== Delete Post ==========
    // =====================================

    function deletePost(postId, postElement) {
        // Fetch data from backend to delete the post
        fetch(`http://localhost:8080/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // Remove the element from DOM
        postElement.remove();
        console.log("You deleted a Post")
    }

    // =====================================
    // ========== Passing id to Update Post ==========
    // =====================================

    function passPostId(event) {
        event.preventDefault();

        const postElement = event.target.closest(".post");
        const postId = postElement.dataset.postId;

        const modifyLink = event.target;
        modifyLink.href = `updatePost.html?id=${postId}`;

        // Navigate to the updatePost.html page with the modified URL
        window.location.href = modifyLink.href;
    }

    // =====================================
    // ========== Upvote Post ==========
    // =====================================

    function upvotePost(postId, postElement) {
        // Get the likes element within the postElement
        const likesElement = postElement.querySelector('.likes p');
        let likes = parseInt(likesElement.textContent);

        likes += 1;

        // Fetch data from the backend to update the post likes
        fetch(`http://localhost:8080/posts/${postId}/upVote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("You upvoted a Post");
                likesElement.textContent = likes; // Update the likes count in the DOM
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    // =====================================
    // ========== Downvote Post ==========
    // =====================================

    function downvotePost(postId, postElement) {
        // Get the likes element within the postElement
        const likesElement = postElement.querySelector('.likes p');
        let likes = parseInt(likesElement.textContent);

        likes -= 1;

        // Fetch data from the backend to update the post likes
        fetch(`http://localhost:8080/posts/${postId}/downVote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("You downvoted a Post");
                likesElement.textContent = likes; // Update the likes count in the DOM
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

});
