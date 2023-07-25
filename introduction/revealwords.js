function solve(words, text) {
    const arrwords=words.split(", ")
   for (let i = 0; i < arrwords.length; i++) {
    let temp="";
    for (let j = 0; j < arrwords[i].length; j++) {
      temp+="*";       
    }
    text=text.replace(temp, arrwords[i]);
    
   }
   console.log(text);
}
solve('great, learning','softuni is ***** place for ******** new programming languages')