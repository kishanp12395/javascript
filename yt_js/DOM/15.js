//static list vs live list



// const listItems = document.querySelectorAll('.todo-list li')
// const sixthLi = document.createElement("li");
// sixthLi.textContent = 'item 6';

// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi)
// console.log(listItems)//this is static list 
// //node list me koi change nahi hoga yani koi nya li add nhi hoga





//note: querySelectorAll --> gives static list 

//  getElementById, getElementClassName ,getElementBySomething
//gives   live list 
//means change reflect in node list



const ul = document.querySelector('.todo-list')
const listItems = ul.getElementsByTagName('li')

const sixthLi = document.createElement("li");
sixthLi.textContent = 'item 6';

ul.append(sixthLi)
console.log(listItems)