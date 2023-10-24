function myfunc() {
    console.log("hello deeepak");
}
// myfunc => if u didn't add () then this is just refrence
myfunc();

function addNumbers(num1,num2) {
    console.log(num1+num2);
}

addNumbers(3,"1") // => 31
addNumbers(3,4); 

const result = addNumbers(4,5);
console.log(result); // => result will be undefined bcz function is not returning anything

function addtn(num1,num2) {
    return num1+num2;
}

const result2 = addtn(3,8);
console.log(result2);

function loginUser(username = "suraj") { // username defined initially if given as argument then overriding will happen
    if(username===undefined) {
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUser("deepak"));