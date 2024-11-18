// for add new element

// document.createElement()
//append
//prepend
//remove

// const newTodoItemText = document.createTextNode("Tech Student")
// newTodoItem.append(newTodoItemText) //comment lines is long methodn do not use it






// //add element ✔️

// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem) //add element at last
// // todoList.prepend(newTodoItem) //add element at start

// console.log(newTodoItem)



//remove element

const todo1 = document.querySelector('.todo-list li');
todo1.remove()// remove first occurence
console.log(todo1);