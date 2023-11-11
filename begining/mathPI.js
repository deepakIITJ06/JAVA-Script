// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); // value of PI will still be 3.14

// you can fix that one variable or soomehing is not enumerable or configurable

const check = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(check);

// now if you want to change any property or want to do not loop over on a fixed attribute of your object

const myobj = {
    name: "mera ghar",
    price: "free",
    isAvailable: false,

    checkAvailablity: function(){
        console.log("Home is booked");
    }
}

console.log(Object.getOwnPropertyDescriptor(myobj,"isAvailable"));
// now you can change the properties

Object.defineProperty(myobj,"isAvailable",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myobj,"isAvailable"));

// if enumerable: false => means u can't iterate
// here i have done enumerable: false for isAvailable 

for (let [key,value] of Object.entries(myobj)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}