window.addEventListener("load", solve);

function solve() {
  document.querySelector("#publish-btn").addEventListener("click", Publish);
  function Publish() {
    const title = document.querySelector("#task-title").value;
    const category = document.querySelector("#task-category").value;
    const content = document.querySelector("#task-content").value;

    if (title === "" || category === "" || content === "") {
      return;
    }
    document.querySelector("#task-title").value = "";
    document.querySelector("#task-category").value = "";
    document.querySelector("#task-content").value = "";

    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    let p = document.createElement("p");
    p.textContent = "Category: " + category;
    article.appendChild(h4);
    article.appendChild(p);
    let p2 = document.createElement("p");
    p2.textContent = "Content: " + content;
    article.appendChild(p2);

    const li = document.createElement("li");
    li.setAttribute("class", "rpost");
    li.appendChild(article);
    li.appendChild(createButton("Edit", "action-btn", "edit"));
    li.appendChild(createButton("Post", "action-btn", "post"));

    document.querySelector("#review-list").appendChild(li);
  }

  function createButton(text, ...klas) {
    const button = document.createElement("button");
    button.setAttribute("class", klas.join(" "));
    button.textContent = text;
    if (text === "Edit") {
      button.addEventListener("click", Edit);
    } else {
      button.addEventListener("click", Post);
    }
    return button;
  }
  function Post(event) {
    const list = event.target.parentElement.firstChild;
    event.target.parentElement.remove();
    const li = document.createElement("li");
    li.setAttribute("class", "rpost");
    li.appendChild(list);
    const ps = Array.from(li.querySelectorAll("p"));
    let initalText = ps[0].textContent;
    ps[0].textContent = initalText;
    initalText = ps[1].textContent;
    ps[1].textContent = initalText;
    document.querySelector("#published-list").appendChild(li);
  }
  function Edit(event) {
    const elements = Array.from(
      event.target.parentElement.querySelectorAll("article *")
    );
    const textboxes = Array.from(
      document.querySelectorAll("form.newPostContent *")
    );
    textboxes[1].value = elements[0].textContent;
    textboxes[2].value = elements[1].textContent;
    textboxes[3].value = elements[2].textContent;
    event.target.parentElement.remove();
  }
}
