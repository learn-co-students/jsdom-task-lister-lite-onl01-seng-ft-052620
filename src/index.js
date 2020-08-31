const form = document.querySelector("form");
const description = document.getElementById("new-task-description");
const newTaskUl = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
  callOnLoad()
})


  function callOnLoad() {
    form.addEventListener("submit", submitNewTask )
  }

  const submitNewTask = function submitNewTask(event) {

    event.preventDefault();
    const newDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
  newTask.innerText = newDescription.value;

  appendNewTask(newTask);
  event.target.reset()
  }

  const appendNewTask = task => {
document.getElementById("tasks").appendChild(task)
 }

