const accountId=143341
let accountEmail="ritikjaiswalkalwar@gmail.com"
var accountPassword="12345"
accuntCity="chandrauta"
// accountId=2  not allowed
accountEmail="sdmkes.gmail.com"
accountPassword="212121212"          //no ressign allow in const +redeclaration but only for var
 accountCity="Bangaluru"            //reassign allow:let &var
let accountState; //output will be undefined
 console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var 
because of issue in block scope and functional-scope
use of semicolon (;)it use matter in js

*/