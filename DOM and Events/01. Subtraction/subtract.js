function subtract() {
  let inputs = Array.from(document.querySelectorAll("input"));
  console.log(inputs);
  document.querySelector("#result").textContent =
    Number(inputs[0].value) - Number(inputs[1].value);
}
