function solve(num) {
  num = String(num);
  let odd = 0;
  let even = 0;
  for (let index = 0; index < num.length; index++) {
    if (Number(num[index]) % 2 === 0) {
      even += Number(num[index]);
    } else odd += Number(num[index]);
  }

  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

solve(3495892137259234);
