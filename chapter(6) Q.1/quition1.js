let again = true;

while(again){
    let age = prompt("Enter the age:");
    age = Number(age);
console.log(age);

if(age < 0){
    console.error("Invalid age: Age cannot be negative.");
    alert("please enter the valid age(non-negative)age");
}
else if(age >= 18){
    alert("you can drive");
}
else{
    console.error("you enterd the negative age!")
}
again = confirm("Do you want to check again?");
}



