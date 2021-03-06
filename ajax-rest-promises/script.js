// Button selectors:
let postButton = document.getElementById("get-posts");
let post10Button = document.getElementById("get-post-10");
let createButton = document.getElementById("create-post");
let replaceButton = document.getElementById("replace-post");
let updateButton = document.getElementById("update-post");
let deleteButton = document.getElementById("delete-post");

//post container
let posts = document.getElementById("post-container");

//Event listeners:
postButton.addEventListener("click", () => {
  posts.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      for (i = 0; i < json.length - 1; i++) {
        let postTitle = document.createElement("h3");
        let postID = document.createElement("p");
        let post = document.createElement("p");
        let userId = document.createElement("p");

        postTitle.innerHTML = json[i].title;
        postID.innerHTML = `Post ID: ${json[i].id}`;
        post.innerHTML = json[i].body;
        userId.innerHTML = `User ID: ${json[i].userId}`;

        posts.append(postTitle, postID, post, userId);
      }
    });
});

post10Button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => createPost(json));
});

createButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "This is a new post",
      body: "This is a test post to prove that I can create posts. Hooray.",
      userId: 000,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createPost(json));
});

replaceButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      id: 12,
      title: "This is a different post",
      body: "I didn't like the post that was there so I changed it!",
      userId: 000,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createPost(json));
});

updateButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PATCH",
    body: JSON.stringify({
      title: "New title to replace the last icky one",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createPost(json));
});

deleteButton.addEventListener("click", () => {
  posts.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  }).then(() => {
    let success = document.createElement("p");
    success.innerHTML = "Post has been successfully deleted.";
    posts.append(success);
  });
});

//moved post creation into helper function
function createPost(json) {
  posts.innerHTML = "";

  let postTitle = document.createElement("h3");
  let postID = document.createElement("p");
  let post = document.createElement("p");
  let userId = document.createElement("p");

  postTitle.innerHTML = json.title;
  post.innerHTML = json.body;
  postID.innerHTML = `Post ID: ${json.id}`;
  userId.innerHTML = `User ID: ${json.userId}`;

  posts.append(postTitle, postID, post, userId);
}
