// var → Function-scoped
// let → Block-scoped
// const → Block-scoped and cannot be reassigned
// let a=10

// function scope(){
//     let c=12;
//     var b=15
//     console.log(b)
//     console.log(a);
// }
// console.log(c)
// // scope()
// if(true){
//     let
//     var f=10;
// }
// console.log(f)

//Nested scope
// function outer(){
//     const username="Ritik"
//     function inner(){
//        const website="Youtube" //like ice cream elder can't dare to approach ice-cream from his/her younger
//        console.log(username)
//     }
//    // console.log(website)
//     inner()
// }
// outer()
 
//as function similarly to if else statement
// if (true){
//     const upper="Shu Shu"
//     if(upper==="Shu Shu"){
//         const lower="Nu Nu" 
//         console.log(upper)
//     }
//     console.log(lower)
// }

// ++++++++++++ interesting ++++++++++++++++

//Hositng->js behaviour that move the declaration on the top of scope 
//before execution js scan entire cide and assign memory to respective variables and functions before runnning the code line by line 
// var hoisted but initilaized imendiately with unfined 
// let and const also hoisted but they are not initialized immedilately and remain unaccessed until their declaration is reached to the code 
//TDZ->time between entering a scope to the actual declaration of a let or const variable during tdz accessing varaibles throws a referenceError
console.log(addone(4))
function addone(num){
  return num+1
}




addtwo(4)
var addtwo=function(num){
  return num+1
}
