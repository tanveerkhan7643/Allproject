/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
*/
// Step 1: Lists banalo
let adjectives = ["Khan","mall","marhaba"];
let shopname = ["fashion","collection","Indian"];
let anotherword = ["mall","boutique","garment"]

// Step 2: Random index generate karne ka function
function getRandomWord(list) {
    let randomindex = Math.floor(Math.random() * list.length);
    return list[randomindex];
}

// Step 3: Business name generator
function generateBuisnessName() {
    let adj = getRandomWord(adjectives);
    let shop = getRandomWord(shopname);
    let another = getRandomWord(anotherword);

    return adj+" "+shop+" "+another;
}

// Step 4: Example use
console.log(generateBuisnessName());
