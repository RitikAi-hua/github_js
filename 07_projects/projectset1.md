# projects related to DOM

## project link
[click here](/workspaces/github_js/07_projects/project01.html)

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

## project 2 solution

```javascript
const click=document.querySelector('.button');
    const result=document.querySelector('.result');
    //this usecase will give you empty value as when page loaded there is not value inside field 
    // const value1=Number(document.querySelector('.value1').value);
    //  const value2=Number(document.querySelector('.value2').value);

    click.addEventListener("click",()=>{
        const value1=Number(document.querySelector('.value1').value);
        const value2=Number(document.querySelector('.value2').value);

        if(value1<=0 || value2<=0){
            result.textContent='please enter valid values.'
        }
        const valueM=value2/100;

         const bmi=value1/(valueM*valueM)
         let category = '';

            if (bmi < 18.6) {
                category = 'Underweight';
            } else if (bmi <= 24.9) {
                category = 'Normal';
            } else {
                category = 'Overweight';
            }

    
         result.textContent=`Your BMI is ${bmi.toFixed(2)} (${category})`;
        //   click.addEventListener("submit",()=>{
    });
```