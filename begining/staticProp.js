class user{
    constructor(name) {
        this.username = name;
    }

    logMe() {
        console.log(`user has logged in as : ${this.username}`);
    }

    // this will create for every instance
    createId () {
        return `1234`
    }

    // here there won't be any id creation due to "static"
    static createmyId() {
        return `3456`
    }
}

const mynewvar = new user("aditya")
console.log(mynewvar);
console.log(mynewvar.createId());
// console.log(mynewvar.createmyId()); // this one will not work due to "static" 