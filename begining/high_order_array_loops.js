// for of

const myarr = [1,2,3,4,5]

for (const num of myarr) {
    console.log(num);
}

greetings = "Hello deepak"
for (const greet of greetings) {
    console.log(greet);
}

// Maps
const map = new Map()
map.set('In','INDIA')
map.set('USA','America')
map.set('FR','France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// you can't iterate object using for of 

// iterating object

const myobj = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const coding = ["js", "SQL", "C++"]
// coding.forEach(function (val){
//     console.log(val);
// });

coding.forEach((item) => {
    console.log(item);
})

function printing(item) {
    console.log(item);
}

coding.forEach(printing)