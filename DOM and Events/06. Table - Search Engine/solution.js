function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    Array.from(document.querySelectorAll("tbody tr.select")).forEach((row) => {
      console.log(row);
      row.removeAttribute("class");
    });

    const searchedWrd = document.querySelector("#searchField").value;
    document.querySelector("#searchField").value = "";
    Array.from(document.querySelectorAll("tbody tr td")).forEach((item) => {
      if (item.textContent.includes(searchedWrd)) {
        item.parentElement.setAttribute("class", "select");
      }
    });
  }
}
