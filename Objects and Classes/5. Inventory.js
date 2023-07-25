function solve(input) {
  let heroes = [];
  input.forEach((h) => {
    let [Hero, level, items] = h.split(" / ");
    items = items.split(", ");
    level = Number(level);
    heroes.push({
      Hero,
      level,
      items,
      print: () => {
        console.log(
          `Hero: ${Hero}\nlevel => ${level}\nitems => ${items.join(", ")}`
        );
      },
    });
  });
  heroes = heroes.sort((x, y) => x.level - y.level);
  heroes.forEach((x) => x.print());
}

solve([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
