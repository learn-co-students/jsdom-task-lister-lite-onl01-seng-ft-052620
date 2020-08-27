document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    addTodo();
    e.preventDefault();
  })

});

function addTodo() {
  const task = document.getElementById('new-task-description').value
  if (task !== ""){
    const taskList = document.getElementById('tasks')
    const li = document.createElement("li")
    li.textContent = task;
    taskList.appendChild(li)
  }
}