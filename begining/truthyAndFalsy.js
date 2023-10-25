const mystr = ""
const myarr = []

if(mystr || myarr) {
    console.log("empty string will not run this");
    console.log("for empty array it will ruun");
}else{
    console.log("for empty string");
}

// falsy statements
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// checking for arrays and objects
if(myarr.length === 0) {
    console.log("array is empty");
}

const myobj = {} // empty object

if(Object.keys(myobj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val;
val = 5 ?? 20
console.log(val); // will output the first condn if that is null or undefined then the second one

val = null ?? 30
console.log(val);

// Terniary operator

// condition ? true: false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("Price is less than 80"): console.log("Price is more than 80");