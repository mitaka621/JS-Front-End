function solve(num) {
    const strinfgNum=num.toString();
    let sum=0;
    for (let index = 0; index < strinfgNum.length; index++) {
        sum+=Number(strinfgNum[index]);
        
    }
    console.log(sum);
}

solve(245678);