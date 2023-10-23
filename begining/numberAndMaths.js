// ************* NUMBER ************

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.89566

console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(3));

const hund = 100000
console.log(hund.toLocaleString());

// *************** MATHS ****************

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.3));
// console.log(Math.min(-2,0,4,6));
// console.log((Math.max(3,4,5,-2)));

console.log(Math.random()); // 0 to 1
console.log(Math.random()*10+1); // 1 to 10

const minm = 10
const maxm = 20

console.log(Math.floor(Math.random()*(maxm-minm+1))+minm);