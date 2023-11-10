function setusername(name) {
    this.username = name
    console.log("called");
}

function createuser(username, email, password) {
    // setusername(username) // isme function call ho raha hai but wo username is function k this ko allocate nhi ho raha
    setusername.call(this,username) // isme ham "this" ko hold kr rhe hain

    this.email = email
    this.password = password
}

const variableName = new createuser("suraj", "suraj1@gmail.com", "125")
console.log(variableName);