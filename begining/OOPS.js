// OBJECT
// collection of propertiess and methods
// toLowerCase

// why use oop

// parts of oop

// constructor function
// Prototypes
// Classes
// Instances (new, this)

// 4 pillers
// Abstracion -> hiding internal details
// Encapsulation
// Inheritance
// Polymorphism

const user = {
    name : "chirag",
    loginCount : 10, 
    signedIn : true,

    getuserDetails : function() {
        console.log(`username: ${this.name}`);
        console.log("Got user's details");
    }
}

console.log(this);
console.log(this.name);
console.log(user.name);
console.log(user.getuserDetails());

// constructor always gives you new instance

function userId (name,loginCount,isLoggenIn){
    this.username = name;
    this.loginCount = loginCount;
    this.isLoggenIn = isLoggenIn;

    return this
}

// const userOne = userId("chirag",10,true)
// const userTwo = userId("deepak",5,false)
// console.log(userOne);

// Here userOne => overwrite

const userOne = new userId("chirag",10,true)
const userTwo = new userId("deepak",5,false)
console.log(userOne);
console.log(userTwo instanceof userId);

// Here due to new keyword it is creating new instances