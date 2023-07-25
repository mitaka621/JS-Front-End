function smallestNum(...params) {
  params.sort((a, b) => a - b);
  console.log(params[0]);
}

smallestNum(600, 342, 123);
