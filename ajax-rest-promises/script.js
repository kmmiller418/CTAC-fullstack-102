// Button selectors:
let postButton = document.getElementById("get-posts");
let post10Button = document.getElementById("get-post-10");
let createButton = document.getElementById("create-post");

//post container
let posts = document.getElementById("post-container");

//Event listeners:
postButton.addEventListener("click", () => {
  posts.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      for (i = 0; i < json.length - 1; i++) {
        let post = document.createElement("p");
        let postID = document.createElement("p");
        let postTitle = document.createElement("p");
        let userId = document.createElement("p");

        post.innerHTML = json[i].body;
        postID.innerHTML = json[i].id;
        postTitle.innerHTML = json[i].title;
        userId.innerHTML = json[i].userId;

        posts.append(post, postID, postTitle, userId);
      }
    });
});

post10Button.addEventListener("click", () => {
  posts.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => {
      createPost(json);
    });
});

createButton.addEventListener("click", () => {
  posts.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      createPost(json);
    });
});


//moved post creation into function for DRYer code
function createPost(json) {
  let post = document.createElement("p");
  let postID = document.createElement("p");
  let postTitle = document.createElement("p");
  let userId = document.createElement("p");

  post.innerHTML = json.body;
  postID.innerHTML = json.id;
  postTitle.innerHTML = json.title;
  userId.innerHTML = json.userId;

  posts.append(post, postID, postTitle, userId);
}
