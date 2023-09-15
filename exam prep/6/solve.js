// TODO:
function attachEvents() {
  const statuses = {
    ToDo: "Move to In Progress",
    "In Progress": "Move to Code Review",
    "Code Review": "Move to Done",
    Done: "Close",
  };

  const classSelect = {
    ToDo: todo,
    "In Progress": inProgress,
    "Code Review": codeReview,
    Done: Close,
  };

  Load();
  document.querySelector("#load-board-btn").addEventListener("click", Load);
  document
    .querySelector("#create-task-btn")
    .addEventListener("click", CreateTask);
  async function CreateTask() {
    const inputs = Array.from(
      document.querySelectorAll("fieldset input[type=text], fieldset textarea")
    );
    console.log(inputs);

    await fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "POST",
      body: JSON.stringify({
        title: inputs[0].value,
        description: inputs[1].value,
        status: "ToDo",
      }),
    });
    inputs[0].value = "";
    inputs[1].value = "";
    Load();
  }
  let response;

  async function todo(event) {
    const modifiedRes = Object.values(response).find(
      (x) =>
        x.title === event.target.parentElement.querySelector("h3").textContent
    );
    modifiedRes.status = "In Progress";
    console.log(modifiedRes);

    await fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "PATCH",
      body: JSON.stringify({ [modifiedRes._id]: modifiedRes }),
    });
    document.querySelector("#form-section").style["background-color"] = "white";
    Load();
  }
  async function inProgress() {
    const modifiedRes = Object.values(response).find(
      (x) =>
        x.title === event.target.parentElement.querySelector("h3").textContent
    );
    modifiedRes.status = "Code Review";
    console.log(modifiedRes);

    await fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "PATCH",

      body: JSON.stringify({ [modifiedRes._id]: modifiedRes }),
    });

    Load();
  }
  async function codeReview(event) {
    const modifiedRes = Object.values(response).find(
      (x) =>
        x.title === event.target.parentElement.querySelector("h3").textContent
    );
    modifiedRes.status = "Done";
    console.log(modifiedRes);

    await fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "PATCH",

      body: JSON.stringify({ [modifiedRes._id]: modifiedRes }),
    });

    Load();
  }
  async function Close(event) {
    const modifiedRes = Object.values(response).find(
      (x) =>
        x.title === event.target.parentElement.querySelector("h3").textContent
    );
    await fetch("http://localhost:3030/jsonstore/tasks/" + modifiedRes._id, {
      method: "DELETE",
    });

    Load();
  }

  async function Load() {
    Array.from(document.querySelectorAll("article ul")).forEach(
      (e) => (e.innerHTML = "")
    );
    //document.querySelector("#form-section").style["background-color"] = "red";
    response = await (
      await fetch("http://localhost:3030/jsonstore/tasks/")
    ).json();
    console.log(response);
    Object.values(response).forEach((element) => {
      const li = document.createElement("li");
      li.setAttribute("class", "task");

      li.appendChild(Create("h3", element.title));
      li.appendChild(Create("p", element.description));
      li.appendChild(CreateButton(element.status, statuses[element.status]));

      document
        .querySelector(
          "#" +
            element.status.toLowerCase().split(" ").join("-") +
            "-section ul"
        )
        .appendChild(li);
    });
    function CreateButton(type, text) {
      const button = document.createElement("button");
      button.addEventListener("click", classSelect[type]);
      button.textContent = text;
      return button;
    }
    function Create(type, text) {
      const el = document.createElement(type);
      //el.setAttribute("class", classes.join(" "));
      el.innerHTML = text;
      return el;
    }
  }
}

attachEvents();
