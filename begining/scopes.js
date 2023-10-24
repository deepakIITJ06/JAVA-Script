let c = 300

if(true) {
    let a = 20
    const b = 30
    let c = 40
    console.log("INNER c :",c);
}

console.log(c);

function one() {
    const username = "deepak is in local scope"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // you can't do that bcz website is in local scope
    
    two();
}

one();

if(true) {
    const username = "deepak kumar"
    if(username==="deepak kumar") {
        const web = "github "
        console.log(web + username);
    }
}
// console.log(username); // this will give us an error

console.log(myfunc1(4)); // this will work
function myfunc1(num) {
    return num+1
}

// console.log(addn(7)); // this will not work

const addn = function(num1) {
    return num1+1
}

console.log(addn(7));