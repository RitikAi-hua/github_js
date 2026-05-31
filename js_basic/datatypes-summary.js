// primitive data type ->store single value and are immutable,store by value
// // string, Number,Boolean,Null,undefined(variables declared +memory assign but not initialized value still)
//symbol,BigInt
// Non primitive data type-> mutable , store by reference like Object, arrays, functions 
//how values store + how to access from memory
//javascript is dynamically typed language means no need to defined variables type automatically assigned at the time of compilation or code exection
//const score=?(any) const score:number=20type safety
const Id=Symbol('123')// they looked same but are different due to symbol
const anotherId=Symbol('123')
//console.log(Id===anotherId)

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

// console.log(typeof myFunction);

// console.log(myObj.name)
 //++++++++memory types in javascript++++++
 //Stack(all primitive )store inside stack,Heap(all Non primitive) store inside heap 
//  for stack memory we get copy of it
//  but for  heap we get reference value (org value) any changes reflect to original values
let myname="ritikjaiswal"
let anothername=myname
anothername="Ritesh"
// console.log(myname)

// console.log(anothername)

let userOne={
    name:"ritik",
    age:21
}
let userTwo=userOne //userone and usertwo both reference on same values so if usertwo make some changes it will shows to userone

userOne.name="Ritesh"

console.log(userTwo.name)
console.log(userOnename)