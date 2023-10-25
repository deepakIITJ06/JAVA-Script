const mynums = [1,2,3,4,5,6,7]

let nums = mynums.filter( (num) => num > 4);
console.log(nums);

const newnums = []

nums.forEach( (el) => {
    if(el > 5) {
        newnums.push(el)
    }
})

console.log(newnums);

// chaining

const newnumers = mynums.map( (num) => num * 10).map( (num) => num + 1 )
console.log(newnumers);

// reduce

const myarr = [1,5,6]

const intitval = 0;
const mytotal = myarr.reduce( (acc, curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc+curval;
},intitval);

console.log(mytotal);