const score =400
//console.log(score)

const balance=new Number(400)
// console.log(balance)
// console.log(balance.toString())//convert to string
// console.log(balance.toFixed(2)) //400.00

const otherNumber=23.0322
//console.log(otherNumber.toPrecision(3))//23.0
const hundreds =1000000
// console.log(hundreds.toLocalString());//1,000,000
// console.log(hundreds.toLocalString('en-IN'));//1,000,000
//to acquire min and max value
//Number.MIN_VALUE and Number.MAX_VALUE
///////math//////
// console.log(Math)
// console.log(Math.abs(-1));
// console.log(Math.ceil(4.2));
// console.log(Math.round(3.6));
// console.log(Math.floor(4.9))
// console.log(Math.max(3,4,7,1,7))
console.log(Math.random());
console.log(Math.trunc(4.8))//4
let random=Math.floor(Math.random()*10)+1;
console.log(random);
const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min +1))+min)