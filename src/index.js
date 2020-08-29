document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const newTask = document.getElementById('new-task-description')
  const todoList = document.getElementById('tasks')

  form.addEventListener("submit", function(event){
    const li = document.createElement('li');
    li.innerHTML = newTask.value;
    todoList.appendChild(li);
    
    const button = document.createElement("button");
    button.innerHTML = "x";
    li.appendChild(button);
    event.preventDefault();

    button.addEventListener("click", function(event){
      event.target.parentNode.remove()
    })

  });
});
