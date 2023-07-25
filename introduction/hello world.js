function DetermineAge(age)
{
    if(age<0)
    {
        console.log("out of bounds");
        return;
    }
    if (age<=2&&age>=0) {
        console.log("baby");
        return;
    }
    else
    if (age<=13) {
        console.log("child");
        return;
    }
    else
    if (age<=19) {
        console.log("teenager");
        return;
    }
    else
    if (age<=65) {
        console.log("adult");
        return;
    }
    else
    if (age>65) {
        console.log("elder");
        return;
    }
    
}

DetermineAge(80);