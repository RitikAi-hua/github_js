const details={
    name:"Ritik",
    age:21,
    skills:{WEB:"HTML.CSS.JS", 
        PROGRAMMING: "PYTHON",
        email:"ritikjaiswalkalwar@gmail.com"
    }

    }
//  console.log(details)
//  console.log(details.skills.WEB) //ASSESSING NESTING VALUE

const obj1={
    1:"er",
    2:"re"
}
const obj2={
    2:"ka",
    4:"ak"
}
//[...o,...o1] for iterable supports
//const obj3={...obj1,...obj2}; //if keys clash last key value overwrites first obj
 //const obj3=Object.assign(obj1,obj2)//concat two object
 //const obj3=Object.assign({},obj1,obj2)//give same result as above but best for multi arrays merge
 //{}target,obj1,obj2,obj3->source
 //console.log(obj3)
 const user=[
    {
        
    },
    {

    },{

    }

 ]
 user[1].email //[1] is email

 //to access key similarly for values, for both entries()
 console.log(Object.keys(details))
 //check key exist 
 console.log(details.hasOwnProperty('isLoggedIn'));
