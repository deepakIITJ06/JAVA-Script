// function with object
const myobj = {
    username: "deepak",
    roll: "B21CH006"
}

function myfunc(givenObj) {
    return givenObj.roll
}

console.log(myfunc(myobj));
// you can also define object inside argument
console.log(myfunc({
    name: "deepak",
    roll: "B21CH006"
}));

// function with array

const myarray = [200,400,"deepak"]

function myfunc2(givenArr) {
    return givenArr[2]
}

console.log(myfunc2(myarray));
// you can do same like object
console.log(myfunc2([
    200,300,"suraj"
]));