document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById("tasks")
  const form = document.querySelector('form')
  const newTask = document.getElementById('new-task-description')
  form.onsubmit = function(e){
    e.preventDefault();
    let li = document.createElement('li')
    li.textContent = newTask.value;
    tasks.appendChild(li)
  }
});
