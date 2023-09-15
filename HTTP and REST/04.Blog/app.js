function attachEvents() {
  document.querySelector("#btnLoadPosts").addEventListener("click", loadPosts);
  document.querySelector("#btnViewPost").addEventListener("click", viewPosts);

  let postsObj = "";
  async function loadPosts() {
    postsObj = await (
      await fetch("http://localhost:3030/jsonstore/blog/posts")
    ).json();
    console.log(postsObj);
    const selectPosts = document.querySelector("#posts");
    Object.keys(postsObj).forEach((key) => {
      selectPosts.appendChild(createOption(postsObj[key].title, key));
    });
  }
  async function viewPosts() {
    const commentsObj = await (
      await fetch("http://localhost:3030/jsonstore/blog/comments")
    ).json();
    console.log(commentsObj);
    const currentComments = Object.values(commentsObj).filter(
      (comment) => comment.postId === document.querySelector("#posts").value
    );
    console.log(currentComments);
    const currentPost = postsObj[document.querySelector("#posts").value];
    const postTitle = document.querySelector("#post-title");
    const postBody = document.querySelector("#post-body");
    const postComments = document.querySelector("#post-comments");

    postTitle.textContent = currentPost.title;
    postBody.textContent = currentPost.body;
    currentComments.forEach((comment) => {
      postComments.appendChild(createLi(comment.text, comment.id));
    });
  }
}
function createLi(text, id) {
  const li = document.createElement("li");
  li.setAttribute("id", id);
  li.textContent = text;
  return li;
}
function createOption(text, value) {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  option.textContent = text.toUpperCase();
  return option;
}
attachEvents();
