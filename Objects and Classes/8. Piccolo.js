function solve(lines) {
  const set = new Set();
  set.delete(3);
  lines.forEach((l) => {
    let [cmd, number] = l.split(", ");
    if (cmd === "IN") {
      set.add(number);
    } else if (cmd === "OUT") {
      set.delete(number);
    }
  });
  if (set.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    Array.from(set)
      .sort()
      .forEach((x) => console.log(x));
  }
}

solve([
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
