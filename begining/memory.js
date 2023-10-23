// stack => primitive && Heap => Non-primitive
let myYoutube = "deepak ki pathshala"
let anothername = myYoutube
anothername = "ha bhai bharosa rkh"
console.log(myYoutube);
console.log(anothername);

let userOne = {
    email: "kumar.303@iitj.ac.in" ,
    upi: "deeepak@ybl"
}

let userTwo = userOne;
userTwo.email = "kumardeeeepak01@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);