document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    addTask();
    e.preventDefault();
  })
});

function addTask(){
  task_name = document.querySelector('#new-task-description').value;
  task_list = document.getElementById('tasks');
  if (task_name.length > 0){
    task = document.createElement("li");
    task.id = "task-item";
    task.textContent = task_name;
    addPriority();
    task_list.appendChild(task);

    document.querySelector('#new-task-description').value = null;
  }

  function addPriority(){
    priority = document.querySelector('#priority').value;
    if (priority == "High") {
      task.style.color = "red";
    } else if (priority == "Medium") {
      task.style.color = "yellow";
    } else if (priority == "Low") {
      task.style.color = "green";
    }
  }
}


