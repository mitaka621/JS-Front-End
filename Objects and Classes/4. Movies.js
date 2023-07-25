function solve(commands) {
  let movies = [];
  commands.forEach((m) => {
    if (m.includes("addMovie ")) {
      movies.push({ name: m.split("addMovie ")[1] });
    } else if (m.includes(" directedBy ")) {
      const [name, director] = m.split(" directedBy ");
      if (movies.find((m) => m.name === name)) {
        movies.find((m) => m.name === name).director = director;
      }
    } else if (m.includes("onDate")) {
      const [name, date] = m.split(" onDate ");
      if (movies.find((m) => m.name === name)) {
        movies.find((m) => m.name === name).date = date;
      }
    }
  });
  movies.forEach((m) => {
    if (
      m.hasOwnProperty("name") &&
      m.hasOwnProperty("director") &&
      m.hasOwnProperty("date")
    )
      console.log(JSON.stringify(m));
  });
}

solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
