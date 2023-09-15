function attachEvents() {
  document.querySelector("#load-course").addEventListener("click", Load);
  document.querySelector("#add-course").addEventListener("click", Add);
}
async function Add() {
  const inputs = Array.from(
    document.querySelectorAll("form input, form textarea")
  );
  console.log(inputs);
  const title = inputs[0].value;
  const type = inputs[1].value;
  const description = inputs[2].value;
  const teacher = inputs[3].value;

  if (type !== "Long" && type !== "Medium" && type !== "Short") {
    return;
  }

  fetch("http://localhost:3030/jsonstore/tasks", {
    method: "POST",
    body: {
      title,
      type,
      description,
      teacher,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  Load();
  inputs.forEach((i) => {
    i.textContent = "";
  });
}
async function Load() {
  console.log("working");
  const courses = Object.values(
    await (await fetch("http://localhost:3030/jsonstore/tasks")).json()
  );
  console.log(courses);
  const divList = document.querySelector("#list");
  courses.forEach((item) => {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    divContainer.appendChild(CreateH(2, item.title));
    divContainer.appendChild(CreateH(3, item.teacher));
    divContainer.appendChild(CreateH(3, item.type));
    divContainer.appendChild(CreateH(4, item.description));
    divContainer.appendChild(createButton("edit-btn", "Edit Course"));
    divContainer.appendChild(createButton("finish-btn", "Finish Course"));

    divList.appendChild(divContainer);
  });
}
function CreateH(num, text) {
  const h = document.createElement("h" + num);
  h.textContent = text;
  return h;
}
function createButton(clas, text) {
  const button = document.createElement("button");
  button.setAttribute("class", clas);
  button.textContent = text;
  return button;
}
attachEvents();
