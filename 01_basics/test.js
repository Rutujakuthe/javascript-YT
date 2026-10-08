const accountId =144553
let accountEmail="rutu@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;
//accountId = 2// not allowed
accountEmail="hdf@c.com"
accountPassword="1234"
accountCity="wadsa"

console.log(accountId);
/*
prefer not to use var 
beacause of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);