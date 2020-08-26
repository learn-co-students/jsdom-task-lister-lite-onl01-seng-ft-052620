document.addEventListener("DOMContentLoaded", () => {
  const formed = document.getElementById("create-task-form");
  formed.addEventListener("submit", (event) => {
    addTodo();
    event.preventDefault();
  }) 
});

function addTodo() {
  let content = document.getElementById("new-task-description").value;

  if (content !== "") {
    let taskList = document.getElementById("tasks");
    let task = document.createElement("li");
    task.textContent = content;
    taskList.appendChild(task);
  }
  
}
