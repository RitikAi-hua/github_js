
// const array=[3,6,8,2,5]
// //initialization, condition check, increment/decrememt
// for(let index=0; index<array.length; index++){
//     const element=array[index]
//     console.log(element)

// }
// for(let i=0; i<10; i++){
//     const element=i
//     if(element==5){
//         console.log(`${element} is best number`)
//     }
//     console.log(element)

// }
// for (let i= 0; i < 10; i++) {
//     console.log(`table of ${i}`)
//    for(let j=1; j<=10; j++){
//     console.log(i +"*"+j+" = "+ i*j)
//    }
    
// }

// const array=[3,6,8,2,5]
// //initialization, condition check, increment/decrememt
// for(let index=0; index<=array.length; index++){
//     const element=array[index]//in js no out of bound exception error instead undefined provide
//     console.log(element)
// }

//break and continue
// break -> terminate the running loop if condition become true 
// continue:skip the next iteration to execute based on condition blow their code don't execute
// for(let i=0; i<10; i++){
//     if(i==4){
//         break;
//     }
//     console.log(i)
// }

// for(let i=0; i<10; i++){
//     console.log(i)
//     if(i==4){
//         continue;
//     }
//    // console.log(i)
// }

//WHILE LOOP

// let i=0
// while(i<10){
//     console.log(i)
//     i++
// }
// let myarray=['flash','batman','superman']
// let arr=0;
// while(arr<myarray.length){
//     console.log(myarray[arr])
//     arr++
// }

let score =11
do{
    console.log(`score is ${score}`);
    score++
}while(score>12);