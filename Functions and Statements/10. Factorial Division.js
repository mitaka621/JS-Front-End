function solve(a, b) {
  function factorial(num) {
    let n = 1;
    for (let i = 1; i <= num; i++) {
      n *= i;
    }
    return n;
  }
  console.log((factorial(a) / factorial(b)).toFixed(2));
}

solve(6, 2);
