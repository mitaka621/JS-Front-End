function solve(a, b) {
  let value1 = a.charCodeAt(0);
  let value2 = b.charCodeAt(0);
  if (value1 > value2) {
    [value1, value2] = [value2, value1];
  }
  let arr = [];
  for (let i = value1 + 1; i < value2; i++) {
    arr.push(String.fromCharCode(i));
  }

  console.log(arr.join(" "));
}

solve("C", "#");
