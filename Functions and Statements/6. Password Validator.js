function validatePass(password) {
  let isValid = true;
  if (!(password.length >= 6 && password.length <= 10)) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }
  let regex = /[A-Za-z0-9]+/g;

  if (password.match(regex) != password) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
  }
  let doesHaveEnoughDigits = false;
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(Number(password[i]))) {
      count++;
    }
    if (count >= 2) {
      doesHaveEnoughDigits = true;
      break;
    }
  }

  if (!doesHaveEnoughDigits) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

validatePass("Pa$s$s");
