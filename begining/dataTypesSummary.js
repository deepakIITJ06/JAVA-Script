// Primitive (call by value)

// 7 types : string, number, boolean, null, undefined, symbol, Bigint

const score = 100
const new_score = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

// const bigNumber = 7537248735472324572784n
// console.log(bigNumber);
// refrence type or non-primitive

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "deepak",
    age: 21,
}

const myfunc = function(){
    console.log("Hello deepak");
}

console.log(typeof myobj);