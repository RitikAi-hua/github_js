// primitive data type ->store single value and are immutable,store by value
// // string, Number,Boolean,Null,undefined(variables declared +memory assign but not initialized value still)
//symbol,BigInt
// Non primitive data type-> mutable , store by reference like Object, arrays, functions 
//how values store + how to access from memory
//javascript is dynamically typed language means no need to defined variables type automatically assigned at the time of compilation or code exection
//const score=?(any) const score:number=20type safety
const Id=Symbol('123')// they looked same but are different due to symbol
const anotherId=Symbol('123')
console.log(Id===anotherId)

const bigNumber=345654324574533n
//***non primitive****
//  
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Ritik",
    age: 21,
}

const myFunction=function(){
    console.log("Hello World");
}

//console.log(typeof myFunction);

myObj.name
