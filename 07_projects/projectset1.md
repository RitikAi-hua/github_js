# projects related to DOM

## project link
[click here](link)

# Solution code

## project 1

```javascript
console.log("Ritik")
const buttons=document.querySelectorAll('.button')//nodelist
const body=document.querySelector('body');
//console.log(buttons[0].id)
//function click(color){
    buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        body.style.backgroundColor=button.id;
        console.log(e);
        console.log(e.target);
    })
    
    
})

```