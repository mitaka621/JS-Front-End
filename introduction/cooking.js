function solve(name, ...params) {
    let num=Number(name);
    for(let i=0;i<params.length;i++)
    {
        switch (params[i]) {
            case "chop":
                num/=2;
                break;
                case "dice":
                num=Math.sqrt(num);
                break;
                case "spice":
                num++;
                break;
                case "bake":
                num*=3;
                break;
                case "fillet":
                num-=num*0.2;
                break;
        
            default:
                break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake',
'fillet');