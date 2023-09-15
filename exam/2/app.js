window.addEventListener("load", solve);

function solve() {
  document.querySelector("#next-btn").addEventListener("click", Next);
  function Next() {
    const inputs = Array.from(document.querySelectorAll(".applyContent input"));
    let bool = true;
    inputs.forEach((element) => {
      if (!element.value) {
        bool = false;
        return;
      }
    });
    if (!bool) {
      return;
    }

    const li = document.createElement("li");
    li.setAttribute("class", "application");

    const article = document.createElement("article");
    article.appendChild(createEl("h4", inputs[0].value));
    article.appendChild(createEl("p", "University: " + inputs[1].value));
    article.appendChild(createEl("p", "Score: " + inputs[2].value));

    li.appendChild(article);
    li.appendChild(createButton1());
    li.appendChild(createButton2());

    document.querySelector("#preview-list").appendChild(li);

    ClearInput();
    document.querySelector("#next-btn").disabled = true;
  }
  function createEl(type, text) {
    const el = document.createElement(type);
    el.textContent = text;
    return el;
  }
  function createButton1() {
    const button = document.createElement("button");
    button.setAttribute("class", "action-btn edit");
    button.textContent = "edit";
    button.addEventListener("click", Edit);

    return button;
  }
  function createButton2() {
    const button = document.createElement("button");
    button.setAttribute("class", "action-btn apply");
    button.textContent = "apply";
    button.addEventListener("click", Apply);

    return button;
  }
  function ClearInput() {
    const inputs = Array.from(document.querySelectorAll(".applyContent input"));
    inputs.forEach((element) => {
      element.value = "";
    });
  }
  function Apply(element) {
    const el = element.target.parentElement;
    el.querySelector("button").remove();
    el.querySelector("button").remove();

    document.querySelector("#candidates-list").appendChild(el);
    document.querySelector("#next-btn").disabled = false;
  }
  function Edit(element) {
    document.querySelector("#next-btn").disabled = false;
    const elements = Array.from(
      element.target.parentElement.querySelectorAll("article *")
    );

    const inputs = Array.from(document.querySelectorAll(".applyContent input"));

    inputs[0].value = elements[0].textContent;
    inputs[1].value = elements[1].textContent.split(": ")[1];
    inputs[2].value = elements[2].textContent.split(": ")[1];
    element.target.parentElement.remove();
  }
}
