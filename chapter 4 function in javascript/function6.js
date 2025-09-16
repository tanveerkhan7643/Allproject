function reversName(str) {
    let revers = ""; // Empty string to store reversed word
    for(i = str.length -1; i >= 0; i--) {
        revers += str[i];
        }
        // Compare original string with reversed string
        return str === revers;  // Return true if both are same, else false
    }
console.log(reversName("atta"));
console.log(reversName("kattar"));


