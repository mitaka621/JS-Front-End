function solve(arr, num) {
    const arr2=[];
    for (let i = 0; i < arr.length; i+=num) {
        arr2.push(arr[i]);
    }
    return arr2;
}

solve(['5',
'20',
'31',
'4',
'20'],
2);