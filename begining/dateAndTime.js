// Dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now()); // this is in mili second
console.log(Math.floor(Date.now()/1000)); // this is in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})