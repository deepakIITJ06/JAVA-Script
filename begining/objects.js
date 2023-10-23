// singelton => (constructor se object banana)
// Object.create

// object literals

const mysym = Symbol("key1")

const macUser = {
    name: "deepak",
    age: 18,
    [mysym]: "this is the correct method to add a symbol in an object",
    location: "Bihar",
    email: "kumardeeeepak01@gmail.com",
    isloggedIn: true,
    "full name": "deepak kumar"
    // these are like key value pairs
}

console.log(macUser.email);
// another method
console.log(macUser["email"]); // take value for that key
// console.log(macUser.full_name); // you can't do this
console.log(macUser["full name"]);
console.log(macUser[mysym]);
console.log(typeof macUser[mysym]);

// changing the value
macUser.email = "kumar.303@iitj.ac.in"
// Object.freeze(macUser) // now change krne pe bhi change nhi hoga

macUser.greeting = function() {
    console.log("Hello MacUser");
}

macUser.greet = function() {
    console.log(`Hello mac User, ${this.name}`);
}

console.log(macUser.greeting());
console.log(macUser.greet());