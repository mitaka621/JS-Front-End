function addItem() {
  const option = document.createElement("option");
  option.setAttribute("value", document.querySelector("#newItemValue").value);
  option.textContent = document.querySelector("#newItemText").value;
  document.querySelector("#menu").appendChild(option);
  document.querySelector("#newItemValue").value = "";
  document.querySelector("#newItemText").value = "";
}
