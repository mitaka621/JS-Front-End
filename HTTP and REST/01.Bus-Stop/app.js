function getInfo() {
  document.querySelector("#buses").innerHTML = "";
  const id = document.querySelector("#stopId").value;

  fetch("http://localhost:3030/jsonstore/bus/businfo/" + id)
    .then((r) => r.json())
    .catch(() => {
      document.querySelector("#stopName").textContent = "Error";
      return;
    })
    .then((busStop) => {
      document.querySelector("#stopName").textContent = busStop.name;
      Object.keys(busStop.buses).forEach((busLine) => {
        const list = document.createElement("li");
        list.textContent = `Bus ${busLine} arrives in ${busStop.buses[busLine]} minutes`;
        document.querySelector("#buses").appendChild(list);
      });
    });
}
