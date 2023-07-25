function solve(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(num);
  }
  console.log((arr.join(" ") + "\n").repeat(num));
}

solve(23);
