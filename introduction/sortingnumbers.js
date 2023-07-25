function solve(params) {
    const sortedarr=params.sort((a,b)=>a-b);
    const arr=[];
    while(sortedarr.length!=0)
    {
        if(sortedarr.length!=0)
        {
            arr.push(sortedarr.shift());
        }

        if(sortedarr.length!=0)
        {
            arr.push(sortedarr.pop());
            
        }
    }

    return arr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])