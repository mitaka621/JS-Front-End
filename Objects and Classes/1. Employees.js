function solve(params) {
  function createPerson(name) {
    return {
      name,
      pn: () => name.length,
      whoami() {
        console.log(`Name: ${name} -- Personal Number: ${this.pn()}`);
      },
    };
  }
  let people = [];
  for (const iterator of params) {
    people.push(createPerson(iterator));
  }

  for (const iterator of people) {
    iterator.whoami();
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
