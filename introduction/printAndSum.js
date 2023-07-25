function solve(start, end) {
    let sum=0;
    const numbers=[]
    for (let i = start; i <=end ; i++){
    numbers.push(i);
    sum+=i;
    }
    console.log(numbers.join(" "));
    console.log("Sum:",sum);

}

solve(0, 26);