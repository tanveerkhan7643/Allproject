
let correctnumber = 7;
let userinput;

while(userinput != correctnumber){
    userinput =  prompt("Enter the number: ");
    if(userinput != correctnumber){
        console.log("try again");
    }
    else{
        console.log("correct number");
    }
}

