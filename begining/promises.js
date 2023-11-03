const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// You can also do both step in a single step
new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async task 2");
    },1000)
}).then(()=>{
    console.log("Async task 2 is resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // if you want to pass any data *** mainly object in resolve
        resolve({username: "deepak", roll: "B21CH006"})
    },1000)
})

promiseThree.then((anyVariableName)=>{
    console.log(anyVariableName);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let myerror = false;
        if(!myerror){
            resolve({username: "suraj", email: "dpk01@gmail.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour.then((anyName)=>{
    console.log(anyName);
    return anyName.email
}).then((emailJoMili)=>{
    console.log(emailJoMili);
}).catch(function(errorMila){
    console.log(errorMila);
}).finally(()=>{
    console.log("Bss conclude kr rha => ye always run hoga");
})

// New syntax async await

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let myerror = false;
        if(!myerror){
            resolve({username: "JavaScript", pass: "TMKOC"})
        }else{
            reject("Error: JS went wrong")
        }
    },1000)
})

async function newfunc(){
    const response = await promiseFive
    console.log(response);
}

newfunc();