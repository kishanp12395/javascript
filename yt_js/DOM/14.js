// before 
// after


// before

// <ul class="todo-list">
//     <li>todo 1</li>
// </ul>

// after



const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Student";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);
