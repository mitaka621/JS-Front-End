function solve(arr) {
  let horses = arr[0].split("|");
  for (let i = 1; i < arr.length; i++) {
    const currCommand = arr[i];
    const name = currCommand.split(" ")[1];
    switch (currCommand.split(" ")[0]) {
      case "Retake":
        const name2 = currCommand.split(" ")[2];
        const index1 = horses.indexOf(name);
        const index2 = horses.indexOf(name2);
        if (index1 < index2) {
          [horses[index1], horses[index2]] = [horses[index2], horses[index1]];
          console.log(`${name} retakes ${name2}.`);
        }
        break;
      case "Trouble":
        const index = horses.indexOf(name);

        if (index !== 0) {
          const toIndex = index - 1;

          const element = horses.splice(index, 1)[0];

          horses.splice(toIndex, 0, element);
          console.log(`Trouble for ${element} - drops one position.`);
        }
        break;
      case "Rage":
        let ind = horses.indexOf(name);
        const hors = horses.splice(ind, 1)[0];
        ind + 2 < horses.length ? (ind = ind + 3) : (ind = horses.length);
        horses.splice(ind, 0, hors);
        console.log(`${hors} rages 2 positions ahead.`);
        break;
      case "Miracle":
        const idk = horses.shift();

        horses.push(idk);
        console.log(`What a miracle - ${idk} becomes first.`);
        break;
      case "Finish":
        console.log(horses.join("->"));
        console.log(`The winner is: ${horses[horses.length - 1]}`);
        return;

      default:
        console.log("err for" + currCommand.split(" ")[0]);
        break;
    }
  }
}

solve([
  "Onyx|Domino|Sugar|Fiona",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Miracle",
  "Finish",
]);
