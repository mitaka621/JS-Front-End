function solve(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  const stack = arr1.reduce((acc, current, i) => {
    if (i % 2 !== 0) {
      return acc;
    }

    if (!acc.hasOwnProperty(current)) {
      acc[current] = 0;
    }

    acc[current] += Number(arr1[i + 1]);
    return acc;
  }, {});

  Object.keys(stack).forEach((key) => {
    console.log(`${key} -> ${stack[key]}`);
  });
}

solve(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
