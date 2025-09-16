/*
1.Random Password Generator
  :Ek array banao jisme letters, numbers, aur symbols ho.
  :Randomly words pick karke ek password string banao.
*/

let randomchars =  ["1","2","3","4","5","6","7","8","9","0",
                   "a","b","c","d","e","f","g","h","i","j","k",
                   "!","@","#","$","%","^","&","*","_","~"];

function randomNumber(pass) {
    let randomindex = Math.floor(Math.random() * pass.length);
    return pass[randomindex];
}

function passwordgenerater(length) {
    password = "";
    for(let i = 0; i < length; i++) {
        password += randomNumber(randomchars);
    }
    return password;
}

console.log(passwordgenerater(10)); // 10-character random password