class user{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is : ${this.username}`);
    }
}

class teacher extends user {
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password
    }

    addcourse(){
        console.log(`course is added by : ${this.username}`);
    }
}

const myvar = new teacher("amit","amt@12hdfc.com","4545")
console.log(myvar);
myvar.logMe();
myvar.addcourse();

console.log(myvar instanceof teacher);
console.log(myvar instanceof user); // true due to inheritance