let myDate=new Date()
//console.log(myDate.toString());
console.log(myDate.toJSON)
console.log(myDate.toLocaleDateString)

console.log(myDate.toDateString)
console.log(typeof myDate)
let myCreatedDate=new Date(2026,6,3)
console.log(myCreatedDate.toDateString)
//0->jan because js uses zero- based indexing for months
let date=new Date("2026-06-03")
//console.log(date.toLocalString())
let myTimeStamp=Date.now()
console.log(myTimeStamp/1000);
// to get specific part of date
// .getMonth()+1.getDay().getFullYear()
date.toLocaleString('default',{
    weekday:"long",
    timeZone:"long"
})