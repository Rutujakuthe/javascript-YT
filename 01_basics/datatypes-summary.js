//primitive 

//7 types: String,Number.Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);
const bigNhumber = 123456789987654321n


//Refernce(non Primitive)
//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"rutu",
    age:21,
}
//anything written inside the curly bracese then it is called as object
 const myFunction=function(){
    console.log("hello rutu");

 }
 console.log(typeof outsideTemp);

 //datatype or returntype of all the primitive type is function 
 //and reutnr of function is called as function object
