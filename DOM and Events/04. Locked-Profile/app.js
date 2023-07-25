function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      const parent = e.target.parentElement;

      const radioBtn = parent.querySelector("input[type = radio]");

      if (!radioBtn.checked) {
        b.textContent === "Show more" ? showMore(b, parent) : hide(b, parent);
      }
    });
  });

  function showMore(b, parent) {
    parent.querySelector("*>div").style.display = "block";
    b.textContent = "Hide it";
  }

  function hide(b, parent) {
    parent.querySelector("*>div").style.display = "none";
    b.textContent = "Show more";
  }
}
