let score = "33"

console.log(typeof score);
let value = Number(score);

console.log(value);
console.log(typeof value);

// "33" => 33
// "33abc" => NAN // although data type will be number
// true => 1

let ans = "1";
console.log(typeof ans);
let boolform = Boolean(ans);
console.log(typeof boolform);

// "1" => true & "0" => false
// "" => false & "deepak" => true


// ********************* Operations *********************

let val = 3;
let negval = -val;
// console.log(negval);
// console.log(2+2);
// console.log(2**3);
// console.log(2-2);
// console.log(2%3);

let str1 = "deepak";
let str2 = "hello ";

let str3 = str2+str1;
console.log(str3);

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "3"); // => 33