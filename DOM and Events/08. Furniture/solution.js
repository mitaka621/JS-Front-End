function solve() {
  document.querySelector("input[type=checkbox]").disabled = false;
  document.querySelector("#exercise > button").addEventListener("click", () => {
    const input = JSON.parse(
      document.querySelector("#exercise textarea").value
    );
    input.forEach((currJson) => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      const img = document.createElement("img");
      img.setAttribute("src", currJson.img);
      td1.appendChild(img);
      tr.appendChild(td1);

      const td2 = document.createElement("td");
      const p = document.createElement("p");
      p.textContent = currJson.name;
      td2.appendChild(p);
      tr.appendChild(td2);

      const td3 = document.createElement("td");
      const p3 = document.createElement("p");
      p3.textContent = currJson.price;
      td3.appendChild(p3);
      tr.appendChild(td3);

      const td4 = document.createElement("td");
      const p4 = document.createElement("p");
      p4.textContent = currJson.decFactor;
      td4.appendChild(p4);
      tr.appendChild(td4);

      const td5 = document.createElement("td");
      const inp = document.createElement("input");
      inp.setAttribute("type", "checkbox");
      td5.appendChild(inp);
      tr.appendChild(td5);

      document.querySelector("tbody").appendChild(tr);
    });
  });

  document
    .querySelectorAll("#exercise > button")[1]
    .addEventListener("click", () => {
      let productsNames = [];
      let price = 0;
      let decFactor = 0;
      let count = 0;
      document.querySelectorAll("input[type=checkbox]").forEach((box) => {
        if (box.checked === true) {
          const parent = box.parentElement.parentElement;
          count++;
          productsNames.push(parent.querySelector(":nth-child(2)").innerText);
          price += Number(parent.querySelector(":nth-child(3)").innerText);
          decFactor += Number(parent.querySelector(":nth-child(4)").innerText);
        }
      });

      decFactor /= count;
      const outputString = `Bought furniture: ${productsNames.join(
        ", "
      )}\nTotal price: ${price.toFixed(
        2
      )}\nAverage decoration factor: ${decFactor}`;
      document.querySelectorAll("#exercise textarea")[1].textContent =
        outputString;
    });
}
