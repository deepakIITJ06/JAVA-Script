const marvel_heroes = ["Thor", "IronMan", "Spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dcHeroes) // this will push the whole array as a single element
// console.log(marvel_heroes); 

const allheroes = marvel_heroes.concat(dcHeroes) // his will add all elements from dcHeroes 
console.log(allheroes);

// Another method
const anotherarr = [...marvel_heroes, ...allheroes]
console.log(anotherarr);

console.log(Array.isArray("deepak"));
console.log(Array.from("deepak")); // this will cretae an array using that string
console.log(Array.from({name: "deepak"})); // interesting (gives us an empty array)

let score1 = 257
let score2 = 353
let score3 = 765

console.log(Array.of(score1,score2,score3));