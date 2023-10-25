// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

// for (let i = 0; i <= 5; i++) {
//     console.log("iteration:",i);
//     for (let index = 0; index < 4; index++) {
//         console.log(index);
//     }
// }

// break and continue
for (let index = 0; index < 10; index++) {
    if(index === 5) {
        console.log("detected 5");
        break
    }
}


// while and do while loop

let index = 0
while(index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let score = 1
do {
    console.log(`score is ${score}`);
    score += 2
} while (score <= 10);