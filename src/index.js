
const taskDescription = () => document.querySelector('input#new-task-description')

document.querySelector('#create-task-form').addEventListener('submit', function (e) {
  // append the todos list
  //prevent the clearing of the the form
  displayTodos(taskDescription());
  e.preventDefault();
}, false)

// function todo() {
//   const todo = { description: taskDescription().value }
// }

// todos.push(todo)

function displayTodos(todo) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(todo.value);
  node.appendChild(textNode);
  document.getElementById('tasks').appendChild(node)
}