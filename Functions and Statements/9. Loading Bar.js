function solve(progress) {
  progress /= 10;
  progress = progress.toFixed(0);
  let loadingbar = "[" + "%".repeat(progress) + ".".repeat(10 - progress) + "]";
  progress == 10
    ? console.log("100% Complete!\n[%%%%%%%%%%]")
    : console.log(progress * 10 + "% " + loadingbar + "\nStill loading...");
}

solve(100);
