//singleton-->koi bhi constructor se agar hum object banate hai to use singleton kehte hai
// object.create-->this is also the method to make obejcts through constructor

//object literals
const mySym= Symbol("key1")
const jsUser={
    name:"rutu",
    age:18,
    [mySym]:"myKey1",//if we want to access mySym as symbpl then we need to write the key name in sq. bracket
    location:"wadsa",
    email:"rutu@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email="rutu@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="rutu@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function () {
    console.log("hello rutu")
}
jsUser.greetingTwo=function () {
    console.log('hello rutu,${this.name}');
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
