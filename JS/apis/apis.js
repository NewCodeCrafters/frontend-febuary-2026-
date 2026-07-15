const baseUrl = "https://jsonplaceholder.typicode.com";

async function getTodos() {
  try {
    const res = await fetch(`${baseUrl}/todos`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getTodo(todoId) {
  try {
    const res = await fetch(`${baseUrl}/todos/${todoId}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function createTodo(todo) {
  try {
    const res = await fetch(`${baseUrl}/todos`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
async function updateTodo(todo, todoId) {
  try {
    const res = await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
  }
}
// createTodo({
//   userId: 10,
//   title: "Jonathan learning apis",
//   completed: false,
// });
updateTodo(
  {
    userId: 10,
    title: "Jonathan learning apis",
    completed: false,
  },
  200,
);

getTodo(200);
