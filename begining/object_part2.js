const tinderUser = new Object() // this is a simple singleton object using constructor

tinderUser.name = "Rohit"
tinderUser.ID = "123abs"
tinderUser.IsLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "soham@gmail.com",
    fullName: "soham kumar",
    info: {
        lastName: "choudhry",
        relg: "Hindu"
    }
}

console.log(regularUser.info["relg"]);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({},obj1,obj2)
// if you don't give {} then all elements will go in obj1 u can also do that
console.log(obj3);

// again you can use seperator
const obj4 = {...obj1,...obj2}
console.log(obj4);

// when values comes from data base
const users = [
    {
        Id: "123abc",
        name: "deepak"
    }
    // here u can many objects
]

users[0].Id
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // data type => array
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedIn"));
// you can check whether that property exits or not