function solve(words) {
  words = words.toLowerCase().split(" ");
  words = words.reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {});

  let arr = [];
  Object.keys(words).forEach((x) => {
    if (words[x] % 2 !== 0) arr.push(x);
  });
  console.log(arr.join(" "));
}

solve("Cake IS SWEET is Soft CAKE sweet Food");
