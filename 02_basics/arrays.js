// const myArr=[0,1,2,3,4,5] //mix and not fixed
// //shallow copy: changing copy array changes reflect to original arrat
// //deep copy: which do not share the same reference
// const myHeros=["shushu","anushka"]
// const myArr2=new Array(1,2,3,4)
// // console.log(myArr[0]);
// // myArr.push(3)
// // myArr.pop()//remve last element from array
// // myArr.unshift(9)//add to the very first position on array time consuming task as to add the value 
// // // beside all value shift one position forward to provide space to add at first position
// // myArr.shift()
// console.log(myArr)
// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(49));
// //console.log()
// // const newArr=myArr.join(" ");
// // console.log(typeof newArr)
// // const ne=newArr.split(",")
// // console.log(ne)

// //slice,splice

// const myn1=myArr.slice(1,3); //exclude end 
// //const myn2=myArr.splice(2,2);
// //console.log(myn1)
// //console.log(myn2)
// //console.log(myArr)
// //to copy array
// const copy=myArr.slice()
// const myn2=copy.splice(2,2);
// console.log(myn2)
// console.log(myArr)
// //convert objects, strings or other iterables into an array
// Array.from()

const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc)add one array inside existing 
const merge=marvel_heros.concat(dc) //returns new arrays
console.log(merge)
const allHeros=[...marvel_heros,...dc] //similar we can add any no of arrays
console.log(allHeros)
const another_arr=[1,3,5,[4,2],[7,5,[1,7]]]
const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr)
console.log(Array.isArray(["ritik"]));
console.log(Array.from("ritik"));
console.log(Array.from({name:"ritik"})); //interesting
console.log(Array.of(1,2,4,5))