// ## Higher-Order Array Methods in JavaScript: Quick Summary

// Higher-order array methods are functions that operate on arrays by accepting a **callback function** as an argument.

// ### General Syntax

// ```js
// array.method((element, index, array) => {
//   // logic
// });
// ```

// * `element` → current item
// * `index` → current position (optional)
// * `array` → original array (optional)

// ---

// ### `forEach()`

// **Purpose:** Execute code for every element.

// ```js
// arr.forEach(item => console.log(item));
// ```

// * Returns: `undefined`
// * Modifies original array: No
// * Use when: Performing side effects (logging, updating UI, API calls)

// ---

// ### `map()`

// **Purpose:** Transform each element into a new value.

// ```js
// const result = arr.map(item => item * 2);
// ```

// * Returns: New array
// * Modifies original array: No
// * Use when: Converting or formatting data

// ---

// ### `filter()`

// **Purpose:** Keep elements that satisfy a condition.

// ```js
// const result = arr.filter(item => item > 10);
// ```

// * Returns: New array
// * Modifies original array: No
// * Use when: Selecting specific items

// ---

// ### `reduce()`

// **Purpose:** Combine all elements into a single value.

// ```js
// const sum = arr.reduce((acc, item) => acc + item, 0);
// ```

// * Returns: Single value
// * Modifies original array: No
// * Use when: Calculating totals, averages, or creating objects

// ---

// ### `find()`

// **Purpose:** Get the first matching element.

// ```js
// const result = arr.find(item => item.id === 1);
// ```

// * Returns: Element or `undefined`
// * Modifies original array: No
// * Stops early: Yes

// ---

// ### `findIndex()`

// **Purpose:** Get the index of the first matching element.

// ```js
// const index = arr.findIndex(item => item.id === 1);
// ```

// * Returns: Index or `-1`
// * Modifies original array: No
// * Stops early: Yes

// ---

// ### `some()`

// **Purpose:** Check if at least one element matches a condition.

// ```js
// const hasAdmin = users.some(user => user.isAdmin);
// ```

// * Returns: `true` or `false`
// * Modifies original array: No
// * Stops early: Yes

// ---

// ### `every()`

// **Purpose:** Check if all elements match a condition.

// ```js
// const allPassed = scores.every(score => score >= 40);
// ```

// * Returns: `true` or `false`
// * Modifies original array: No
// * Stops early: Yes

// ---

// ### `sort()`

// **Purpose:** Arrange elements in a specific order.

// ```js
// arr.sort((a, b) => a - b);
// ```

// * Returns: Sorted array
// * Modifies original array: Yes
// * Use when: Ordering data

// > Always provide a compare function when sorting numbers.

// ---

// ### `flatMap()`

// **Purpose:** Transform elements and flatten one level.

// ```js
// const words = sentences.flatMap(s => s.split(" "));
// ```

// * Returns: New flattened array
// * Modifies original array: No
// * Equivalent to: `map()` + `flat(1)`

// ---

// ## Memory Trick

// | Task                       | Method        |
// | -------------------------- | ------------- |
// | Do something for each item | `forEach()`   |
// | Transform items            | `map()`       |
// | Select items               | `filter()`    |
// | Combine items              | `reduce()`    |
// | Find one item              | `find()`      |
// | Find an item's position    | `findIndex()` |
// | Check if any match         | `some()`      |
// | Check if all match         | `every()`     |
// | Order items                | `sort()`      |
// | Transform and flatten      | `flatMap()`   |

// ## Which Methods Modify the Original Array?

// | Method        | Mutates Original Array? |
// | ------------- | ----------------------- |
// | `forEach()`   | No                      |
// | `map()`       | No                      |
// | `filter()`    | No                      |
// | `reduce()`    | No                      |
// | `find()`      | No                      |
// | `findIndex()` | No                      |
// | `some()`      | No                      |
// | `every()`     | No                      |
// | `sort()`      | Yes                     |
// | `flatMap()`   | No                      |

// arr["","",""] string inside Array
// arr[{},{},{}] object inside array
const arr=[1,2,3,4,5]
//for..of syntax works on string,array,map object not on pure object
// for (const ele of arr) {
//     console.log(ele)
// }
// const str=["Ritik","jaiswal","kalwar"];
// for(let ele of str){
//     console.log(ele)
// }
// const str="Ritik";
// // for(let ele of str){
// //     console.log(ele)
// // }
// console.log(str.split(""))

//Maps->object store unique values and order should be maintain as element inserted
// const map=new Map();
// //to set value
// map.set('in',"india")
// map.set('ger',"germany")
// map.set('russ',"russia")
// //console.log(map)

// for (const [key,value] of map) {
//     console.log(`${key}=>${value}`);
    
// }
const myObj={
    username:"Ritik",
    hobbies:"world Richest man",
    behaviour:"silent"
}
for(obj of myObj){
    console.log(obj)
}