class user{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }
}

const newvar = new user("dpk@iphone.ai", "123abs")
console.log(newvar.email);