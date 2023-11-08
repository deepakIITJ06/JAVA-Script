// Everything goes to object
// array => object => null
// function => object => null
// string => object => null

function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2 // as like an object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createuser(name,score){
    this.username = name
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++; // basically kiska score increase karna hai ....
}
// this. => tells us => KISKA
createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// const first = createuser("RAM", 25) => ham new instance create kr rhe hain so "new" dena padega
const second = new createuser("SITA", 45)


second.printMe()