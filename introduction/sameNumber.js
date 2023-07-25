function solve(num) {
    let char=num.toString()[0];
    let string=num.toString();
    let isIdentical=true;
    let sum=0;

    for (const element of string) {
        if (element!==char) {
            isIdentical=false;
           }
           sum+=Number(element); 
    }
    console.log(isIdentical);
    console.log(sum);
}

solve(1234);