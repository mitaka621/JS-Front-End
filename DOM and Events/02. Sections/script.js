function create(words) {
  const container = document.querySelector("#content");

  words.forEach((word) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.style.display = "none";
    p.textContent = word;
    div.appendChild(p);
    const event = div.addEventListener("click", (e) => {
      e.target.querySelector("p").style.display = "block";
    });
    document.querySelector("#content").appendChild(div);
  });
}
