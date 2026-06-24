const inputEl = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-btn");
const todoContainer = document.querySelector(".todo-list");
const todoFormEl = document.getElementById("todo-form");

class Todo {
  constructor(todo) {
    this.todo = todo;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}

class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo));
  }
}

const todoList = new TodoList(JSON.parse(localStorage.getItem("todo"))?.todos);
// inputEl.addEventListener("input", (ev) => {
//   console.log(ev.target.value);
// });
todoList.todos.forEach((todo) => {
  todoContainer.insertAdjacentHTML(
    "beforeend",
    generateTodoItemHTML(todo.todo),
  );
});
function generateTodoItemHTML(todo) {
  return `
    <li class="todo-item">
        <p>${todo}</p>
        <button class="todo-delete">Delete todo</button>
      </li>
 `;
}
todoFormEl.addEventListener("submit", (ev) => {
  ev.preventDefault();
});
addBtn.addEventListener("click", () => {
  const todoValue = inputEl.value.trim();

  if (todoValue.length == 0) return;

  todoContainer.insertAdjacentHTML(
    "beforeend",
    generateTodoItemHTML(todoValue),
  );

  todoList.addTodo(todoValue);

  localStorage.setItem("todo", JSON.stringify(todoList));

  console.log(todoList);
  inputEl.value = "";
});
