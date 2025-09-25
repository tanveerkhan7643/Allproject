let str = ["ali","zoya","nasir"];

str.forEach((value,index) => {
    str[index] = value.toUpperCase();    
});

console.log("The string is = " + str);