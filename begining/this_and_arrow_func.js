const user = {
    name: "suraj",
    price: 999,
    paid: true,

    welcomeMsg: function() {
        console.log(`${this.name}, welcome to the website`);
        // this always refers to current context
    }
}

// user.welcomeMsg();
// user.name = "deepak";
// user.welcomeMsg();

console.log(this); // this will output an empty object bcz of (node environment)
// in window environment it will not give us an empty object

function chain() {
    let username = "amit"
    console.log(this.username);
    // above line will output undefined
    // this doesn't work as global context inside function
}

chain();

// arrow function

const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(5,7));

// same thing you can write it like

const addn = (num1,num2) => num1+num2
console.log(addn(8,9));
// if you write that in () or nothing then don't need to write return else if in {} then u will have to

// but if want to return an object then u will have to write inside ()