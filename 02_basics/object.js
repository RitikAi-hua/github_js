//singleton

//object literals
//Object.create
const mySym=Symbol("key1")
const jsUser={
    name:"Ritik",
    age:21,
    [mySym]:"myKey1",
    location:"jaipur",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//accessing the value from object
// console.log(jsUser.lastLoginDays); //failed in (name first) like due to space 
// console.log(jsUser["location"]);
// console.log(jsUser[mySym])

//modify the value of object 
//obj_name.key="modify_value"
jsUser.email="ritikjaiswalkalwar@gmail.com"
// for(let key in jsUser){
//     console.log(key,jsUser[key])
// }

//To restrict the changes on object use Object.freeze(jsUser)
//Object.freeze(jsUser)
jsUser.greetingTwo=function(){
    console.log(`Namaste js user ${this.name}`)
}

jsUser.greeting=function(){
console.log("Namaste!")
}

console.log(jsUser.greeting());// without() gives function anonymous not execute but reference of fxn with() gives value of function and undefined
console.log(jsUser.greetingTwo());
