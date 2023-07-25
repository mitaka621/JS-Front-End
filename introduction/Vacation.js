function solve(count, type, day) {
    let price;
    if (type==="Business"&&count>=100) {
        count-=10;
    }
    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    price=8.45*count;
                    break;
                    case "Business":
                        price=10.9*count;
                        break;
                        case "Regular":
                            price=15.0*count;
                            break;
                default:
                    break;
            }
            break;
            case "Saturday":
                switch (type) {
                    case "Students":
                        price=9.8*count;
                        break;
                        case "Business":
                            price=15.6*count;
                            break;
                            case "Regular":
                                price=20.0*count;
                                break;
                    default:
                        break;
                }
            break;
            case "Sunday":
                switch (type) {
                    case "Students":
                        price=10.46*count;
                        break;
                        case "Business":
                            price=16*count;
                            break;
                            case "Regular":
                                price=22.5*count;
                                break;
                    default:
                        break;
                }
            break;
        default:
            break;
    }
    if (type==="Students"&&count>=30) {
        price-=price*0.15;
    }
    if (type==="Regular"&&count>=10&&count<=20) {
        price-=price*0.05;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
