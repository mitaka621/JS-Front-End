window.addEventListener("load", solve);
function solve() {
  let taskNum = 1;
  document.querySelector("#delete-task-btn").disabled = true;
  document.querySelector("#label").selectedIndex = 0;
  const emoji = {
    Feature: "&#8865",
    "Low Priority Bug": "&#9737",
    "High Priority Bug": "&#9888",
  };
  const customClass = {
    feature: "feature",
    "low priority bug": "low-priority",
    "high priority bug": "high-priority",
  };
  document.querySelector("#create-task-btn").addEventListener("click", Create);
  document
    .querySelector("#delete-task-btn")
    .addEventListener("click", DeleteForReal);
  function DeleteForReal() {
    const taskid = document.querySelector("#task-id").textContent;
    Array.from(document.querySelectorAll("article"))
      .find((x) => x.getAttribute("id") === taskid)
      .remove();

    const p =
      Number(
        document
          .querySelector("#total-sprint-points")
          .innerHTML.split("Points ")[1]
          .split("pts")[0]
      ) - Number(document.querySelector("#points").value);

    document.querySelector("#total-sprint-points").textContent =
      "Total Points " + p + "pts";

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#points").value = "";
    document.querySelector("#assignee").value = "";
    document.querySelector("#label").selectedIndex = 0;

    document.querySelector("#title").disabled = false;
    document.querySelector("#description").disabled = false;
    document.querySelector("#points").disabled = false;
    document.querySelector("#assignee").disabled = false;
    document.querySelector("#label").disabled = false;

    document.querySelector("#create-task-btn").disabled = false;
    document.querySelector("#delete-task-btn").disabled = true;
  }
  function Create() {
    console.log("workign");
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#description").value;
    const label = document.querySelector("#label").value;
    const points = document.querySelector("#points").value;
    const assignee = document.querySelector("#assignee").value;

    const p =
      Number(
        document
          .querySelector("#total-sprint-points")
          .innerHTML.split("Points ")[1]
          .split("pts")[0]
      ) + Number(points);

    document.querySelector("#total-sprint-points").textContent =
      "Total Points " + p + "pts";
    if (
      title === "" ||
      desc === "" ||
      label === "" ||
      points === "" ||
      assignee === ""
    ) {
      return;
    }
    const article = document.createElement("article");
    article.setAttribute("id", "task-" + taskNum++);
    article.setAttribute("class", "task-card");

    article.appendChild(
      CreateElement(
        "div",
        label + " " + emoji[label],
        "task-card-label",
        customClass[label.toLowerCase()]
      )
    );

    article.appendChild(CreateElement("h3", title, "task-card-title"));
    article.appendChild(CreateElement("p", desc, "task-card-description"));
    article.appendChild(
      CreateElement("h3", "Estimated at " + points + " pts", "task-card-points")
    );
    article.appendChild(
      CreateElement("h3", "Assigned to: " + assignee, "task-card-assignee")
    );
    article.appendChild(CreateButton());

    document.querySelector("#tasks-section").appendChild(article);

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#points").value = "";
    document.querySelector("#assignee").value = "";
    document.querySelector("#label").selectedIndex = 0;
  }

  function Delete(event) {
    const id = event.target.parentElement.parentElement.getAttribute("id");
    const text = Array.from(document.querySelectorAll("#" + id + " *"));
    switch (text[0].getAttribute("class")) {
      case "task-card-label feature":
        document.querySelector("#label").selectedIndex = 0;
        break;
      case "task-card-label low-priority":
        document.querySelector("#label").selectedIndex = 1;
        break;
      case "task-card-label high-priority":
        document.querySelector("#label").selectedIndex = 2;
        break;
    }

    document.querySelector("#title").value = text[1].textContent;
    document.querySelector("#description").value = text[2].textContent;
    document.querySelector("#points").value = Number(
      text[3].textContent.split(" ")[2]
    );
    document.querySelector("#assignee").value =
      text[4].textContent.split(": ")[1];

    document.querySelector("#create-task-btn").setAttribute("disabled", true);
    document.querySelector("#delete-task-btn").disabled = false;

    document.querySelector("#title").disabled = true;
    document.querySelector("#description").disabled = true;
    document.querySelector("#points").disabled = true;
    document.querySelector("#assignee").disabled = true;
    document.querySelector("#label").disabled = true;

    document.querySelector("#task-id").textContent = id;
  }

  function CreateButton() {
    const div = document.createElement("div");
    div.setAttribute("class", "task-card-actions");
    const bt = document.createElement("button");
    bt.textContent = "Delete";
    bt.addEventListener("click", Delete);
    div.appendChild(bt);
    return div;
  }

  function CreateElement(element, text, ...clas) {
    const el = document.createElement(element);
    el.setAttribute("class", clas.join(" "));
    el.innerHTML = text;
    return el;
  }
}
