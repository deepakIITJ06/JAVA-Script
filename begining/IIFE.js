// immediately invoked function expression

function chai() {
    console.log(`DB CONNECTED`);
}

// global scope k pollution se bachne k liye we use IIFE
// () () => syntax (aage ka () for calling function)

(function myfunc(){
    console.log(`DB CONNECTED`);
}) (); // here ; is added to stop the initial IIFE if you want to write multiple IIFE then u will have to write that

// you can also use arrow function here

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("aditya") // here aditya is an argument to this IIFE