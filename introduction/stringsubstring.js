function solve(word, text) {
  word = word.toLowerCase();
  text = text.toLowerCase();
  const textwords = text.split(" ");
  let isFound = false;
  for (const iterator of textwords) {
    if (iterator === word) {
      isFound = true;
      break;
    }
  }
  if (isFound) {
    console.log(word);
  } else console.log(`${word} not found!`);
}

solve("python", "JavaScript is the best programming language");
