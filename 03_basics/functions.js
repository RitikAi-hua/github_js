// # Functions in JavaScript

// ## 1. Function Declaration

// ```javascript
// function greet() {
//     console.log("Hello World");
// }

// greet();
// ```

// ## 2. Function with Parameters

// ```javascript
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Ritik");
// ```

// ## 3. Function with Return Value

// ```javascript
// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);
// ```

// ## 4. Function Expression

// ```javascript
// const greet = function() {
//     console.log("Hello");
// };

// greet();
// ```

// ## 5. Arrow Function

// ```javascript
// const greet = () => {
//     console.log("Hello");
// };

// greet();
// ```

// ### Arrow Function with Parameters

// ```javascript
// const add = (a, b) => a + b;

// console.log(add(5, 3));
// ```

// ## 6. Anonymous Function

// ```javascript
// setTimeout(function() {
//     console.log("Executed after 2 seconds");
// }, 2000);
// ```

// ## 7. Default Parameters

// ```javascript
// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet();
// greet("Ritik");
// ```

// ## 8. Rest Parameters

// ```javascript
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// console.log(sum(1, 2, 3, 4));
// ```

// ## 9. Callback Function

// ```javascript
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function bye() {
//     console.log("Goodbye");
// }

// greet("Ritik", bye);
// ```

// ## 10. Higher-Order Function

// ```javascript
// function operation(a, b, fn) {
//     return fn(a, b);
// }

// console.log(operation(10, 20, (x, y) => x + y));
// ```

// ## 11. Immediately Invoked Function Expression (IIFE)

// ```javascript
// (function() {
//     console.log("Executed immediately");
// })();
// ```

// ## 12. Recursive Function

// ```javascript
// function factorial(n) {
//     if (n === 1) return 1;

//     return n * factorial(n - 1);
// }

// console.log(factorial(5));
// ```

// ## 13. Constructor Function

// ```javascript
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const p1 = new Person("Ritik", 20);

// console.log(p1.name);
// ```

// # Important Interview Questions

// 1. Difference between Function Declaration and Function Expression.
// 2. What is Hoisting?
// 3. What is an Arrow Function?
// 4. Difference between Arrow Function and Normal Function.
// 5. What are Callback Functions?
// 6. What are Higher-Order Functions?
// 7. What is Closure?
// 8. What is Recursion?
// 9. What is IIFE?
// 10. What are Rest Parameters?

// # Most Used Functions in Real Projects

// * Arrow Functions
// * Callback Functions
// * Higher-Order Functions
// * Async Functions
// * Event Handler Functions
// * Array Functions (map, filter, reduce)



function hello(){
        console.log("R");
console.log("I");
console.log("T");
console.log("I");
console.log("K");

}
 //hello()//only hello ->reference ,hello with () execution

 const fxn =(a,b)=>
     a+b;
 

 //console.log(fxn(12,19));
//  function add(a,b){
//     console.log(a+b);
//  }
//  add(10,11);

//  function addTwoNumber(num1,num2){
//     console.log(num1 +num2);

//  }
//  const result=addTwoNumber(3,5);
//  console.log(result);//undefined because no return type inside function to return value 
//  function res(a,b){
//     return a+b;
//     console.log("Ritik");//when we ececute code after return will not be printed as it already return values
//  }
//  const result2 =res(1,2);
//  console.log(result2);

//  function loginUserMessage(username){
//     return `${username} just logged in`
//  }
//  console.log(loginUserMessage("hitesh"));// if value is not pass give undefined
 
//  function loginUserMessage(username="Ritik"){//default value
//     if (!username){
//         console.log("please enter a username")
//         return 
//     }
//       return `${username} just logged in`
//  }
//  console.log(loginUserMessage("hitesh"));
 //console.log(loginUserMessage());

//  function calculateCartPrice(val1,val2,...num1){ //rest or spread operator
//             return val1, num1
//  }
//  console.log(calculateCartPrice(299,199,310,452,131))

 const user={
    username:"Ritik",
    price:199
 }
//  function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
//  }
//  //handleObject(user) object passing 
//  handleObject({username:"Ritik jaiswal",
//     price:199
//  })
function handleObject(anyobject){
    console.log(`username is ${anyobject[0]} and price is ${anyobject[1]}`)
 }
 //similarly array passing as object
 handleObject(["Ritik",100])


 