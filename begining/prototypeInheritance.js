let myname = "amit    "
// now you want to know the actual length

// console.log(myname.trueLength); // will not work
console.log(myname.trim().length);

let superHeroes = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    Spiderman: "sling",

    getMypower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.OnObject = function() {
    console.log(`this variable will present in all objects`);
    // ye sb me jayega array, function,object bcz hamne object me hi ye prototype add kiya hai aur sab object se paas karenge hi
}

// But agar array pe kiya to sirf array ko hi milegi

Array.prototype.OnArray = function() {
    console.log(`Hitesh says hello !`);
}

superHeroes.OnObject()
superHeroes.OnArray()
// heroPower.OnArray() // will not work

// INHERITANCE

const user = {
    name: "deepak",
    email: "deepak12@gmail.com"
}

const teacher = {
    makevideo: true
}

const teachingAssistant = {
    assignment: "JS assg"
}

const TAsupport = {
    IsAvailable: false,
    fulltime: true,
    // inheritance
    __proto__: teachingAssistant
}

// ham bahar bhi inherit kar sakte hain

teacher.__proto__ = user

// MODERN syntax

Object.setPrototypeOf(teachingAssistant, teacher)

let otheruser = "suraj   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// Ab bahar bhi jiske liye lgana ho use kr lein
"aditya   ".truelength()