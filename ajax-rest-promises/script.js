// Button selectors:
let postButton = document.getElementById("get-posts");
let post10Button = document.getElementById("get-post-10");

let posts = document.getElementById("post-container");
let post = document.getElementById("post");
let postID = document.getElementById("post-id");
let postTitle = document.getElementById("post-title");
let userId = document.getElementById("user-id");

//Event listeners:
postButton.addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        
        for (i = 0; i < json.length-1; i++){
            post.innerHTML = json[i].body;
            postID.innerHTML = json[i].id;
            postTitle.innerHTML = json[i].title;
            userId.innerHTML = json[i].userId;
        }
    });
});

