const name="rutu"
const repoCount=90
console.log(name+repoCount+" nice");

console.log(`hello my name is ${name} and my repo count is${repoCount} `);
//it is modern way to print the concat called as STRNGINTERPOLATION we can do many things in ongoing

const gameName = new String('Adit-yaa')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-9,3)
console.log(anotherString);

const newStringOne = "  rutuu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://rutu.com/rutu%20kuthe"
console.log(url.replace('%20','-'))
console.log(url.includes('rutu'))
console.log(gameName.split('-'))