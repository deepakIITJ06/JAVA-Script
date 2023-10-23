const name = "deepak "
const repocount = 30

console.log(name + repocount + " kumar");

console.log('hello my name is ${name} and my repo count is ${repocount}');

const gamename = new String("deepak-kumar-sinha")

console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));

const newString = gamename.substring(0,5)
console.log(newString); 

const anotherString = gamename.slice(-8,5)
console.log(anotherString);

const newstr = "   deepak   "
console.log(newstr);
console.log(newstr.trim());

const url = "https://deepak.com/deepak%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('deepak'));
console.log(url.includes('sundar'));