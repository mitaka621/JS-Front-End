function solve(arr) {
  let racers = [];
  for (let i = 1; i <= arr[0]; i++) {
    const splited = arr[i].split("|");
    racers.push({
      name: splited[0],
      fuel: Number(splited[1]) > 100 ? 100 : splited[1],
      pos: splited[2],
    });
  }
  arr.splice(0, Number(arr[0]) + 1);

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    const cmds = element.split(" - ");
    switch (cmds[0]) {
      case "StopForFuel":
        if (
          Number(racers.find((x) => x.name === cmds[1]).fuel) <= Number(cmds[2])
        ) {
          console.log(
            `${cmds[1]} stopped to refuel but lost his position, now he is ${cmds[3]}.`
          );
          racers.find((x) => x.name === cmds[1]).pos = cmds[3];
          racers.find((x) => x.name === cmds[1]).fuel = 100;
        } else {
          console.log(`${cmds[1]} does not need to stop for fuel!`);
        }
        break;
      case "Overtaking":
        if (
          Number(racers.find((x) => x.name === cmds[1]).pos) <
          Number(racers.find((x) => x.name === cmds[2]).pos)
        ) {
          const tempPos = racers.find((x) => x.name === cmds[1]).pos;
          racers.find((x) => x.name === cmds[1]).pos = racers.find(
            (x) => x.name === cmds[2]
          ).pos;
          pos = racers.find((x) => x.name === cmds[2]).pos = tempPos;
          console.log(`${cmds[1]} overtook ${cmds[2]}!`);
        }
        break;
      case "EngineFail":
        racers.splice(
          racers.indexOf(racers.find((x) => x.name === cmds[1])),
          1
        );
        console.log(
          `${cmds[1]} is out of the race because of a technical issue, ${cmds[2]} laps before the finish.`
        );
        break;
      case "Finish":
        i = 9999999;
        break;
    }
  }

  racers.forEach((el) => {
    console.log(el.name + "\n" + "  Final position: " + el.pos);
  });
}

solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
