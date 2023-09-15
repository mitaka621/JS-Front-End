let res;
let id;
function attachEvents() {
  document.querySelector("#load-vacations").addEventListener("click", Load);
  document.querySelector("#add-vacation").addEventListener("click", Add);
  document.querySelector("#add-vacation").setAttribute("type", "button");

  document.querySelector("#edit-vacation").addEventListener("click", Edit);
  document.querySelector("#edit-vacation").setAttribute("type", "button");
  Load();
}
async function Edit() {
  await fetch("http://localhost:3030/jsonstore/tasks/" + id, {
    method: "PUT",
    body: JSON.stringify({
      name: document.querySelector("#name").value,
      days: document.querySelector("#num-days").value,
      date: document.querySelector("#from-date").value,
    }),
  });

  Load();

  const buttons = Array.from(document.querySelectorAll("form button"));
  buttons[0].disabled = false;
  buttons[1].disabled = true;
  ClearInputs();
}
async function Add() {
  await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify({
      name: document.querySelector("#name").value,
      days: document.querySelector("#num-days").value,
      date: document.querySelector("#from-date").value,
    }),
  });
  ClearInputs();
  Load();
}
function ClearInputs() {
  document.querySelector("#name").value = "";
  document.querySelector("#num-days").value = "";
  document.querySelector("#from-date").value = "";
}

async function Load() {
  document.querySelector("#list").innerHTML = "";
  res = Object.values(
    await (await fetch("http://localhost:3030/jsonstore/tasks/")).json()
  );
  console.log(res);
  res.forEach((elemet) => {
    const div = document.createElement("div");
    div.setAttribute("class", "container");

    div.appendChild(create("h2", elemet.name));
    div.appendChild(create("h3", elemet.date));
    div.appendChild(create("h3", elemet.days));
    createButtons(div);
    document.querySelector("#list").appendChild(div);
  });

  function createButtons(element) {
    const button1 = document.createElement("button");
    button1.setAttribute("class", "change-btn");
    button1.textContent = "Change";
    button1.addEventListener("click", Change);
    element.appendChild(button1);

    const button2 = document.createElement("button");
    button2.setAttribute("class", "done-btn");
    button2.textContent = "Done";
    button2.addEventListener("click", Done);
    element.appendChild(button2);
  }

  function create(type, text) {
    const el = document.createElement(type);
    el.textContent = text;
    return el;
  }
}

function Change(element) {
  const parent = element.target.parentElement;
  const text = Array.from(parent.querySelectorAll("*"));

  const inputs = Array.from(document.querySelectorAll("form input"));

  inputs[0].value = text[0].textContent;
  inputs[1].value = Number(text[2].textContent);
  inputs[2].value = text[1].textContent;
  parent.remove();

  const buttons = Array.from(document.querySelectorAll("form button"));
  buttons[0].disabled = true;
  buttons[1].disabled = false;

  id = res.find((x) => x.name === text[0].textContent)._id;
}

async function Done(element) {
  const id = res.find(
    (x) =>
      x.name === element.target.parentElement.querySelector("h2").textContent
  )._id;

  await fetch("http://localhost:3030/jsonstore/tasks/" + id, {
    method: "DELETE",
  });
  Load();
}
attachEvents();
