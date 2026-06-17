// creating object
// const user={
//     username:"Ritik",
//     price:999,
    
//     welcomeMessage:function(){
//           console.log(`${this.username},welcome to website`)
//     }//this reference to current context this==user
// }

// user.welcomeMessage()
// console.log(this.alert)  // window golbal object

// const arrrow=()=>{

// }
function coffee(){
    let username="ritik"
    console.log(this)//undefined as this work only for object
    //  instead of function  if there is object it will give output ritik
}
//coffee()

// const arrow=(num1, num2)=>{
//         let username="ritik";
//         console.log(this);
//         return num1+num2;
// }
// const arrow=(num1, num2)=>
//         num1+num2; // return value without return keyword
//if {} then return required but if () or nothing not required return

//console.log(arrow(2,0));
// the difference in regular function and arrow fxn is if we print this give lots of info but in arrow i dont
//to return object {{}}
// const arrow=(num1, num2)=>({username:"Ritik"})

//  console.log(arrow(2,0));

 //Immediately invoked function expression(IIFE)
//  (inside function declaration + code statement)();
//  first () create function expression and second () invoked it
//  variable declared inside it cannot accessed outside of function 
 (function () {
    console.log("I run immediately!");
})();

(() => {
    console.log("I run immediately!");
})(); //semicolom is important at the end if not use another function not will work

// (function () {
//     const message = "Hello";
//     console.log(message);
// })();

// console.log(message); // ReferenceError

//passing argument 
(function (name) {
    console.log(`Hello, ${name}`);
})("Ritik");
 //we can assign iife to variables also
 const a=(function (name) {
    console.log(`Hello, ${name}`);
})("Ritik");