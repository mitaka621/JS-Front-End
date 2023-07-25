function solve(text) {
    const regex=/\#[A-Za-z]+/g;
    let searchedwords=text.match(regex);

    for (const item of searchedwords) {
        console.log(item.slice(1));
    }
    
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')