const accountId = 144553
let accountEmail = "bitukumar@1234gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState;             //eski value by default undefined hogi

// const ke ander values ko change nhi kiya ja skta hai 
// accountId = 22  //not allowed

console.log(accountId);

accountEmail = "dishu@gmail.com"
accountPassword = "54321"
accountCity = "sehore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/
