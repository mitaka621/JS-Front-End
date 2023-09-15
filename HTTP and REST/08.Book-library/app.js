function attachEvents() {
  document.querySelector("#loadBooks").addEventListener("click", LoadBooks);
  document.querySelector("#form button").addEventListener("click", AddBook);
}
let bookID = "";
async function AddBook() {
  const title = document.querySelector("input[name=title]").value;
  const author = document.querySelector("input[name=author]").value;
  if (title === "" || author === "") {
    console.log("err");
    return;
  }
  if (document.querySelector("#form button").textContent === "Submit") {
    await fetch("http://localhost:3030/jsonstore/collections/books", {
      method: "POST",
      body: JSON.stringify({
        author,
        title,
      }),
    });
  } else {
    await fetch("http://localhost:3030/jsonstore/collections/books/" + bookID, {
      method: "PUT",
      body: JSON.stringify({
        author,
        title,
      }),
    }).catch(() => "err");
    document.querySelector("#form h3").textContent = "FORM";
    document.querySelector("#form button").textContent = "Submit";
  }
}
async function Edit(event) {
  const bookName =
    event.target.parentElement.parentElement.querySelectorAll("td")[0]
      .textContent;
  const books = await (
    await fetch("http://localhost:3030/jsonstore/collections/books")
  ).json();
  bookID = Object.entries(books).find((x) =>
    Object.values(x[1]).includes(bookName)
  )[0];
  console.log(bookID);
  document.querySelector("input[name=title]").value = bookName;
  document.querySelector("input[name=author]").value =
    event.target.parentElement.parentElement.querySelectorAll(
      "td"
    )[1].textContent;
  document.querySelector("#form h3").textContent = "Edit FORM";
  document.querySelector("#form button").textContent = "Save";
}
async function Delete(event) {
  const bookName =
    event.target.parentElement.parentElement.querySelectorAll("td")[0]
      .textContent;
  const books = await (
    await fetch("http://localhost:3030/jsonstore/collections/books")
  ).json();
  bookID = Object.entries(books).find((x) =>
    Object.values(x[1]).includes(bookName)
  )[0];

  await fetch("http://localhost:3030/jsonstore/collections/books/" + bookID, {
    method: "DELETE",
  }).catch(() => "err");
}

async function LoadBooks() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  const books = await (
    await fetch("http://localhost:3030/jsonstore/collections/books")
  ).json();
  console.log(books);
  Object.values(books).forEach((book) => {
    const tr = document.createElement("tr");
    tr.appendChild(CreateTD(book.title));
    tr.appendChild(CreateTD(book.author));
    tr.appendChild(createActionTD());

    tbody.appendChild(tr);
  });
}

function CreateTD(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

function createActionTD() {
  const td = document.createElement("td");

  const bt = document.createElement("button");
  bt.textContent = "Edit";
  bt.addEventListener("click", Edit);

  const bt2 = document.createElement("button");
  bt2.textContent = "Delete";
  bt2.addEventListener("click", Delete);

  td.appendChild(bt);
  td.appendChild(bt2);

  return td;
}
attachEvents();
