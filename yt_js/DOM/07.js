//get multiple element using getElement by class name 
//get multiple element items using  querySelectorAll



const navItems = document.getElementsByClassName("nav-item");

console.log(navItems);//html-collection
console.log(navItems[2]);
console.log(typeof navItems);
console.log(Array.isArray(navItems))//false




// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);//nodelidt
// console.log(navItems[2])

