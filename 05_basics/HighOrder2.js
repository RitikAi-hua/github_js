// const myObj={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     py:"python" 
// }
// for(const obj in myObj){
//     console.log(`${obj}->${myObj[obj]}`)
//     console.log(`${obj}->${myObj.obj}`)
// }

// const programming=['js','rb','py','java','cpp']
// for(const key in programming){
//     console.log(key)//programming[key]
// }
//in array,obj for..in give keys/index only
//for map gives nothing

// Maps->object store unique values and order should be maintain as element inserted
// const map=new Map();
// //to set value
// map.set('in',"india")
// map.set('ger',"germany")
// map.set('russ',"russia")
//console.log(map)

// for (const [key,value] of map) {
//     console.log(`${key}=>${value}`);
// }

//console.log(map.get('in'))
const coding =['js','rb','py','java','cpp']
// coding.forEach((nums, index)=>{
//       console.log(nums, index)
// });

// coding.forEach(function(nums, index){
//       console.log(nums, index)
// });

// coding.forEach(printme)
// function printme(item){  //here we made function individual and passess to foreach workas normal
//     console.log(item)
// }
// printme(coding)

const arrobj=[{username:"Ritik", class:"male"},{username:"shraddha",class:"female"},{username:"john",class:"kiner"}]
// for (obj of arrobj){
//     console.log(obj)
//     for(obj2 in obj)
//         console.log(`${obj2}=>${obj[obj2]}`)
// }
// for (obj of arrobj){
//     console.log(obj)
//     for(const [key,value] of obj)//object is not iterable
//         console.log(`${key}=>${value}`)
// }
