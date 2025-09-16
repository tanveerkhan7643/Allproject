function findchar(str) {
    vowels = "aeiouAEIOU";
    let count = 0;

    for(i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log("charracter of string is =" + findchar("Tanveer"));
