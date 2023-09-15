function attachEvents() {
  document.querySelector("#btnLoad").addEventListener("click", LoadPhoneBook);
  document.querySelector("#btnCreate").addEventListener("click", AddPhone);
}
async function AddPhone() {
  await fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "POST",
    body: JSON.stringify({
      person: document.querySelector("#person").value,
      phone: document.querySelector("#phone").value,
    }),
  });
  document.querySelector("#person").value = "";
  document.querySelector("#phone").value = "";
  LoadPhoneBook();
}
async function LoadPhoneBook() {
  const phonebookObj = await (
    await fetch("http://localhost:3030/jsonstore/phonebook")
  ).json();
  console.log(phonebookObj);
  const phoneBookList = document.querySelector("#phonebook");
  phoneBookList.innerHTML = "";
  Object.values(phonebookObj).forEach((item) => {
    phoneBookList.appendChild(CreateLi(item));
  });
}
function CreateLi(item) {
  const li = document.createElement("li");
  li.textContent = `${item.person}: ${item.phone}`;
  const button = document.createElement("button");
  button.setAttribute("id", "btnDelete");
  button.textContent = "Delete";
  button.addEventListener("click", async () => {
    await fetch("http://localhost:3030/jsonstore/phonebook/" + item._id, {
      method: "DELETE",
    });
  });
  li.appendChild(button);
  return li;
}
attachEvents();
