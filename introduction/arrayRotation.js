function solve(params,rotations ) {
    for (let i = 0; i < rotations; i++) {
       const zdr= params.shift();
        params.push(zdr);
    }
    console.log(params.join(" "));
}

solve([32, 21, 61, 1], 4);