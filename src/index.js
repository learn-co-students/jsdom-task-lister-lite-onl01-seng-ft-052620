document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", (e) => {
    let list = document.createElement("li")
    list.innerHTML = document.getElementById("new-task-description").value;
    document.getElementById("tasks").appendChild(list);
    e.preventDefault();
    e.target.reset();
  }, false)
});
