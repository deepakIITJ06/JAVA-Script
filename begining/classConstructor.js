// class user{
//     constructor(name, email, password){
//         this.username = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryption(){
//         return `${this.password}abc`
//     }

//     changename() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("deepak","kumar.1@iitj.ac.in","123")

// console.log(chai.encryption());
// console.log(chai.changename());

// Behind the scene

function user2(name,email,pass) {
    this.username = name;
    this.email = email;
    this.password = pass;
}

user2.prototype.encryptepass = function(){
    return `${this.password}`
}
user2.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user2("suraj","suraj123@gmail.com","1256")
console.log(tea.encryptepass());
console.log(tea.changeName());