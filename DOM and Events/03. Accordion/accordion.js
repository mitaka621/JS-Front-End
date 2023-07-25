function toggle() {
  document.querySelector("div.head span").textContent === "More"
    ? showMore()
    : showLess();
  function showMore() {
    document.querySelector("div.head span").textContent = "Less";
    document.querySelector("#extra").style.display = "block";
  }
  function showLess() {
    document.querySelector("div.head span").textContent = "More";
    document.querySelector("#extra").style.display = "none";
  }
}
