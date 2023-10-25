// if
// <, >, <=, >=, ==, !=, ===, !== 

const isUserLoggedIn = true
const temp = 47
if(temp<=50) {
    console.log("temp is less tha 50");
}else{
    console.log("temp is greater than 50");
}

const score = 200
if(score>100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}


const balance = 300
if(balance<200) {
    console.log("less than 200");
}else if(balance<500) {
    console.log("less than 500");
}else{
    console.log("greater than 500");
}

// you can also check multiple condition using "||" and "&&"

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("going above march");
        break;
}