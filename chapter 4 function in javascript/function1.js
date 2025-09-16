function number() {
    let str = "30";
    let num = Number(str);
    if (num %2 == 0) {
        console.log("Even");
    }
    else{
        console.log("odd");
    }
    return num;
}

let result = number();
console.log(result);

