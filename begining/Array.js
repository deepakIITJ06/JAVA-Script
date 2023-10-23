// Array

const myarr = [1,2,3,4,5,6,7]
const myheores = ["shaktiman", "Hanuman", "Spiderman"]

console.log(myarr.length);
console.log(myheores[1]);

// Array methods

myarr.push(12) // pushing element 9 at the end
myarr.pop()

myarr.unshift(9) // this will push 9 at the begining
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newarr = myarr.join()

console.log(myarr);
console.log(newarr);
console.log(typeof(newarr)); // this will give ans as "string"

// slice and splice
console.log("A", myarr);

const myn1 = myarr.slice(1,3) // doesn't include the last index

console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3) // this will manipulate the original array also changing the original array from index 1 to 3
console.log(myn2);
console.log("C", myarr);