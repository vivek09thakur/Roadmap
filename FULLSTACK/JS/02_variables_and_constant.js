// Path: FULLSTACK/JS/02_variables_and_constant.js

// constants
const accoundId = 696969
// variables
let accountEmail = 'v.user.xd@gmail.com'
var accountPassword = 'Vivek090909'
let accountState;

// accountCity = 'Mumbai' // not allowed 
// accountId = 70
accountEmail = "v.69@x.com"

// console.log('Account ID = ',accoundId)
// console.log("Account Email : ", accountEmail) // because it is variable

console.log("Account Details : \n")
console.table([
    accoundId,
    accountEmail,
    accountPassword,
    // accountCity,
    accountState
])