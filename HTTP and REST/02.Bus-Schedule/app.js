function solve() {
  let stopID = {
    name: "",
    next: "depot",
  };
  function depart() {
    document.querySelector("#depart").disabled = true;
    document.querySelector("#arrive").disabled = false;
    fetch("http://localhost:3030/jsonstore/bus/schedule/" + stopID.next)
      .then((res) => res.json())
      .then((newStop) => {
        console.log(newStop);
        stopID = newStop;
        document.querySelector(
          "span.info"
        ).textContent = `Next stop ${stopID.name}`;
      })
      .catch(() => {
        document.querySelector("span.info").textContent = `Error`;
        document.querySelector("#depart").disabled = false;
        document.querySelector("#arrive").disabled = false;
      });
  }

  async function arrive() {
    document.querySelector("#depart").disabled = false;
    document.querySelector("#arrive").disabled = true;
    document.querySelector(
      "span.info"
    ).textContent = `Arriving at ${stopID.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
