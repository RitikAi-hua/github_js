// control flow execute the statement on condition 
//if..else...else if
// if(2==="2"){
//     console.log("i'm executed");
// }
// console.log("i love it") //shift +""

//comparison = comparing two or more value of variables using comparision operator
//comparision operator like:
//==,===,<=,>=,<,>,!=
 const score=200
// // if(score>100){
// //     var power="fly"
// //     console.log(`User power:${power}`)
// // }
// // console.log(power)
// if(score>100) console.log("test")

// //terenary operator short hand
const result =score>100? true : false

console.log(result)

// const userLoggedIn=true
// const debitCard=false
// if(userLoggedIn || debitCard){ //or
//     console.log("Approval") //&& and
// }

//Nullish coalescing operator(??):null undefined
let val1;
//val1=5 ?? 10 if null +value ->value
           //if undefined +value->value
//val1=null ?? 10
val1=null ?? 10 ?? 20 //first occurance value will be assign
console.log(val1)
// const day="sunday"
// switch(day){
//     case "sunday":
//         console.log("it's sunday")
//         break;
//     case "monday":
//         console.log("it's sunday")
//         break;
//     case "tuesday":
//         console.log("it's sunday")
//         break;
//     case "thursday":
//         console.log("it's sunday")
//         break;
//     default:
//         console.log("default value match")
// }

// const userid="something.ai"//if string empty flase either true
// if(userid){
//     console.log("userid is available")
// }else {
//     console.log("Not available")
// }

// const userid=[]//true
// console.log(Boolean(userid))
//falsy values
//false
//"" empty String
//0,-0,BigInt 0n,null,undefined,NaN
//truthy values
//"inside string anything give true even space"
//[] {} function(){}
// const empobj={}
// if(Object.key(empobj).length===0){
//     console.log("empty")
// }
