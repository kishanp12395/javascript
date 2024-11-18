
// /adding class to any classlist
const todoSection = document.querySelector(".todo-section");
// console.log(todoSection.classList)//give the list of classes in any class

//first create class in css then add using js
todoSection.classList.add('bg-dark');//add class
todoSection.classList.remove('bg-dark');//remove class

//check karna hai ke koi class contain karta hai k nahi

const ans = todoSection.classList.contains('container');
console.log(ans);//true



//toogle

//agar class phele se nahi hai to add kar dega 
//agar class phele se hai to remove kar dega

// todoSection.classList.toggle("bg-dark");
// todoSection.classList.toggle("bg-dark");




const header = document.querySelector(".header");
// header.classList.add('bg-dark')
// note: bg-dark wali class, css file me hamesa header ke niche likhi jayagi 
console.log(header.classList)