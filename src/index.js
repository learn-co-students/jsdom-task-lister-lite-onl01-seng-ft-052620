  const form = document.querySelector('form');
  const input = document.querySelector('input#new-task-description');
  const select = document.querySelector('select');
  const taskList = document.querySelector('ul#tasks');
  const submitFormButton = document.querySelector('input#submit-form')

  const tasks = []

  const highPriority = () => tasks.filter(task => task.priority === "high")
  const mediumPriority = () => tasks.filter(task => task.priority === "medium")
  const lowPriority = () => tasks.filter(task => task.priority === "low")

  let formStatus = "create"
  let editedTask = null;

document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener("submit", submitForm);
  });

  function submitForm(e) {
    e.preventDefault();
    
    if (formStatus == "create") {
      createTodo();
    } else {
      editTodo();
    }
  }

  function createTodo() {
  task = {
    title: input().value,
    priority: select().value
  }

  tasks.push(task)

  displayTasks();

  resetInput();
}

function editTodo() {
  editedTask.title = input().value;
  editedTask.priority = select().value;

  editedTask = null;
  formStatus = "create"
  submitFormButton().value = "create new task"
  displayTasks();
  resetInput();
}

function editTask() {
  let priority, title;
  if (this.parentNode.className.includes("red")) {
    priority = "high"
  } else if (this.parentNode.className.includes("yellow")) {
    priority = "medium"
  } else {
    priority = "low"
  }

  title = this.parentNode.childNodes[0].textContent
  formStatus = "editing"

  input().value = title;
  select().value = priority;

  editedTask = tasks.find(task => task.title === title && task.priority === priority)
  submitFormButton().value = "Edit Task"
}


  const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

  const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
  };
});
function deleteTask() {
  this.parentNode.remove()
}

function clearTaskLists() {
  taskList().innerHTML = ""
  select().value = "high"
}

function displayTasks() {
  clearTaskLists();

  [highPriority(), mediumPriority(), lowPriority()].forEach(array => array.forEach(task => displayTask(task)))
}

function displayTask(task) {
  const li = document.createElement('li');
  li.innerText = task.title;

  switch (task.priority) {
    case "high":
      li.classList.add("red")
      break;
    case "medium":
      li.classList.add("yellow")
      break;
    default:
      li.classList.add("green")
      break;
  }

  const button = document.createElement('button');
  button.innerText = "X"

  const editButton = document.createElement('button');
  editButton.innerText = "edit"

  button.addEventListener('click', deleteTask)
  editButton.addEventListener('click', editTask)

  li.appendChild(editButton);
  li.appendChild(button);

  taskList().appendChild(li)
}

function resetInput() {
  input().value = ""
}
