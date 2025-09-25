let arr = [
    {name: "tanveer", age: 23},
    {name: "ali", age: 21},
    {name: "aziz", age: 24}
];

let adults = arr.filter(user => user.age >= 22);

console.log(adults);

