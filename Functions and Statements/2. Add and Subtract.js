function addandsub(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  function subtract() {
    return sum(a, b) - c;
  }

  return subtract();
}

console.log(addandsub(1, 17, 30));
