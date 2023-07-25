function solve() {
  const inputText = document.querySelector("#input").value.split(".");
  const output = document.querySelector("#output");
  output.textContent = "";
  inputText.pop();
  while (inputText.length > 0) {
    const p = document.createElement("p");
    p.textContent = inputText.splice(0, 3).join(". ");
    p.textContent += ".";
    output.appendChild(p);
  }
}
