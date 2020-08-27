document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.getElementById("create-task-form");
form.addEventListener("submit", (e) => {
  addTodo();
  e.preventDefault(); 
})
});
function addTodo() {
  let task = document.getElementById("new-task-description").value 
  if (task !== "") {
    let taskList = document.getElementById("tasks");
    let li = document.createElement("li");
    li.textContent = task 
    taskList.appendChild(li)
  }
};


//what should happen

//whats the cause

//when should we be able to do this