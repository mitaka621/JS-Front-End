function solve(input) {
  let [sentance, ...words] = input;
  sentance = sentance.split(" ");
  let map = sentance.map((word) => {
    return { word, count: 0 };
  }, {});

  words.map((w) => {
    let currentMap = map.find((m) => m.word === w);
    if (currentMap) {
      currentMap.count++;
    }
  });
  map.sort((x, y) => y.count - x.count);
  map.forEach((element) => {
    console.log(element.word + " - " + element.count);
  });
}

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
