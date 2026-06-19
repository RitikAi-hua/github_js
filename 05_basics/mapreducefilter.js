//arrobj.forEach(items)

// function items(item){
//     console.log(item)//limitation of forEach is it doesn't return a value
//     //which often necessitates alternative approaches when you need to transform or filter data.
// }
// items(arrobj)

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const result =myNums.filter((nums)=>nums%2==0)
// console.log(typeof result)//it doesn't modify existing array instead of returning new array

// const result =myNums.filter((num)=>{
//    return num>4
// })//if using curly bracket you have to use return keyword to return value otherwise give enpty array
// console.log(result)

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num) //work same as filter
//     }
// })
// console.log(newNums)

const books=[
    {title:'Book One',genre:'Fiction',publish:1981,editor:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1999,editor:2004},
    {title:'Book Three',genre:'History',publish:1989,editor:2004},
    {title:'Book Four',genre:'Fiction',publish:2009,editor:2004},
    {title:'Book Five',genre:'Fiction',publish:1987,editor:2004},
    {title:'Book Six',genre:'Fiction',publish:1986,editor:2004},
    {title:'Book Seven',genre:'Fiction',publish:2011,editor:2004},
    {title:'Book Eight',genre:'Fiction',publish:1981,editor:2004}
]
let newBook=books.filter((num)=>num.publish>2000)
//console.log(newBook)
newBook=books.filter((num)=>{ return num.genre==='History'})
console.log(newBook)
    
//map().map() ->map().map() is called method chaining. It means you apply one transformation 
    // to an array and then apply another transformation to the result of the first one.
    //The second map() operates on the new array returned by the first map()
    
//map().map().filter().reduce()
//let understand how above line work first the result of first map()given to second map() then second map operate on it and return result to 
//filter function which further apply their work and return result to reduce as soon..
    

