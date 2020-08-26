document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.getElementById("submit")
  submit.addEventListener('click', (e) => {
    addTodo();
    e.preventDefault();
  })
  let remove = document.getElementById('remove');
});

  
function addTodo() {
  const newTask = document.getElementById("new-task-description").value;
  const allTasks = document.getElementById("tasks")
   let task = document.createElement("li")
    task.id = "t-id"
    task.textContent = newTask;
    allTasks.appendChild(task);
    document.getElementById("new-task-description").value = null
};



