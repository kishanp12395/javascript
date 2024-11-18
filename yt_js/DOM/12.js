// add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo</li>";   //puri innerHTML ko change karta hai
todoList.innerHTML += "<li>New Todo</li>";   //har bar ek nay todo add hoga
todoList.innerHTML += "<li>My Todo</li>";   //har bar ek nay todo add hoga


//when you should not use it

//do not use in projects just for knowledge purpose
// because decrease website performance



//when use it

//jab innerHTML change karna ho tab use karen✔️
//jab kuch new element add karwana ho bar bar to use na karen❌