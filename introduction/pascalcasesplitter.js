function solve(text) {
    const regex=/[A-Z][a-z]*/g;
    let arr=text.match(regex);
    console.log(arr.join(", "))
}
solve('HoldTheDoor');