function solve(params) {
  function isPalindrome(num) {
    num = String(num);
    let num2 = num;
    num2 = num2.split("").reverse().join("");
    return num2 === num ? true : false;
  }

  for (let index = 0; index < params.length; index++) {
    console.log(isPalindrome(params[index]));
  }
}

solve([32, 2, 232, 1010]);
